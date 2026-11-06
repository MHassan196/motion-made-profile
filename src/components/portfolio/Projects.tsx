import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { easeOut } from "./Reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | "Static" | "Dynamic";
const filters: Filter[] = ["All", "Dynamic", "Static"];

const sliderVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -90 : 90, opacity: 0 }),
};

/* ---------- Card with a subtle cursor-follow tilt ---------- */

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(ry, { stiffness: 180, damping: 22 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 7);
    rx.set(-py * 7);
  };

  return (
    <motion.button
      layout
      type="button"
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: easeOut }}
      whileHover={{ y: -5 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="card-surface group flex flex-col overflow-hidden rounded-xl text-left shadow-panel transition-colors duration-300 hover:border-primary/50"
    >
      <div ref={imageRef} className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <motion.img
          style={{ y: imageY }}
          src={project.thumbnail}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-[calc(100%+28px)] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 font-mono text-xs tabular-nums text-foreground/80 mix-blend-difference">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-lg border border-border bg-background/85 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-foreground" />
        </span>
      </div>
      <div className="flex flex-1 items-start justify-between gap-4 px-1 py-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </motion.button>
  );
}

/* ---------- Dialog with a full screenshot slider ---------- */

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const slides = useMemo(
    () => (project.gallery.length ? [project.thumbnail, ...project.gallery] : [project.thumbnail]),
    [project],
  );
  const [[index, dir], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (delta: number) =>
    setPage(([i]) => [(i + delta + slides.length) % slides.length, delta]);
  const goTo = (i: number) => setPage(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/85 p-3 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 48, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="card-surface max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl shadow-panel"
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="md:grid md:grid-cols-[1.15fr_1fr]">
          {/* Slider */}
          <div className="flex flex-col border-border md:border-r">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary select-none">
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                  key={index}
                  src={slides[index]}
                  alt={`${project.title} screenshot ${index + 1}`}
                  custom={dir}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: easeOut }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) paginate(1);
                    else if (info.offset.x > 70) paginate(-1);
                  }}
                  className="absolute inset-0 h-full w-full cursor-grab object-cover object-top active:cursor-grabbing"
                />
              </AnimatePresence>

              {slides.length > 1 && (
                <>
                  <button
                    onClick={() => paginate(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <span className="absolute bottom-3 right-3 z-10 rounded-md border border-border bg-background/85 px-2 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {index + 1} / {slides.length}
                  </span>
                </>
              )}
            </div>

            {slides.length > 1 && (
              <div className="flex gap-2 overflow-x-auto p-3">
                {slides.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                    className={cn(
                      "h-14 w-24 shrink-0 overflow-hidden rounded-md border transition-all duration-300",
                      i === index ? "border-primary" : "border-border opacity-60 hover:opacity-100",
                    )}
                  >
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {project.type} project
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">{project.tags.join(" · ")}</p>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.liveAppLink && (
                <a
                  href={project.liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <SiGithub className="h-4 w-4" /> {project.githubLink2 ? "Frontend" : "Source code"}
                </a>
              )}
              {project.githubLink2 && (
                <a
                  href={project.githubLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <SiGithub className="h-4 w-4" /> Backend
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Section ---------- */

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading title="Projects" align="left" />

      <div className="mb-7 flex gap-6 border-b border-border">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative pb-3 text-sm font-medium transition-colors duration-300",
              filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-underline"
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} onOpen={() => setSelected(project)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
