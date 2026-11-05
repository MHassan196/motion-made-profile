import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { profile, rotatingRoles, stats } from "@/data/portfolio";
import { Counter, easeOut } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

const headingWords = ["Robust", "web", "applications,", "from", "concept", "to", "deployment."];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 700], [0, 90]);
  const gridOpacity = useTransform(scrollY, [0, 600], [0.3, 0]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Parallax background grid, fades out on scroll */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 38%, black 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 38%, black 25%, transparent 72%)",
          }}
        />
      </motion.div>

      {/* Scroll parallax on the whole hero content */}
      <motion.div
        style={{ y: yContent }}
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 md:pt-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
          className="mb-4 text-base font-medium text-muted-foreground"
        >
          Hi, I'm <span className="font-semibold text-foreground">{profile.name}</span>
        </motion.p>

        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {headingWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.5 + i * 0.07 }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.05 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-primary" aria-hidden />
          <div className="flex items-baseline gap-3 text-lg sm:text-xl">
            <span className="font-display font-medium text-foreground">{profile.role} —</span>
            <span className="relative inline-flex h-7 min-w-[220px] overflow-hidden sm:min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  className="absolute left-0 whitespace-nowrap font-medium text-primary"
                >
                  {rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {profile.about.split(".")[0]}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary px-7 py-3 font-display font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href={profile.cvUrl}
            download
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3 font-display font-semibold text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <SocialLinks className="ml-1" />
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut, delay: 1.55 }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-card px-4 py-6">
              <Counter
                value={stat.value}
                decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                suffix={stat.suffix}
                className="font-display text-3xl font-bold text-primary md:text-4xl"
              />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#skills"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-label="Scroll to skills"
        className="mx-auto mt-10 mb-6 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
