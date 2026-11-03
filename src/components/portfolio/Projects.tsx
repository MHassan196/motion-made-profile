import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, easeOut } from "./Reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | "Static" | "Dynamic";
const filters: Filter[] = ["All", "Dynamic", "Static"];

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
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects &"
        highlight="Case Studies"
        subtitle="Seventeen shipped products — e-commerce platforms, dashboards, landing pages and full-stack apps. Click any card for the full story."
      />

      <div className="mb-10 flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                filter === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.button
              layout
              key={project.title}
              type="button"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: easeOut }}
              whileHover={{ y: -6 }}
              className="card-surface group flex flex-col overflow-hidden rounded-2xl text-left shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
                  {project.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full px-2 py-0.5 text-[11px] text-primary">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
              className="card-surface max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl shadow-glow"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={selected.thumbnail}
                  alt={`${selected.title} preview`}
                  className="h-full w-full object-cover object-top"
                />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{selected.title}</h3>
                  <div className="flex gap-3">
                    {selected.liveAppLink && (
                      <a
                        href={selected.liveAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                    {selected.githubLink && (
                      <a
                        href={selected.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <SiGithub className="h-4 w-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {selected.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selected.gallery.length > 0 && (
                  <div className="mt-8">
                    <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
                      Screenshots
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selected.gallery.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${selected.title} screenshot`}
                          loading="lazy"
                          className="aspect-video w-full rounded-lg border border-border object-cover object-top"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
