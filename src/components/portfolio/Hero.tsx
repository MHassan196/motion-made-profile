import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, rotatingRoles, stats } from "@/data/portfolio";
import { Counter, easeOut } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

const headingWords = ["Building", "digital", "experiences", "that", "perform."];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const yOrbA = useTransform(scrollY, [0, 700], [0, 140]);
  const yOrbB = useTransform(scrollY, [0, 700], [0, -100]);
  const yContent = useTransform(scrollY, [0, 700], [0, 90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Parallax glow orbs */}
      <motion.div
        style={{ y: yOrbA }}
        className="pointer-events-none absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />
      <motion.div
        style={{ y: yOrbB }}
        className="pointer-events-none absolute right-[4%] top-1/3 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
        aria-hidden
      />

      <motion.div
        style={{ y: yContent }}
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 md:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new opportunities
          <Sparkles className="h-3.5 w-3.5 text-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          className="mb-3 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          {profile.tagline}
        </motion.p>

        <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {headingWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.55 + i * 0.09 }}
              className="mr-[0.28em] inline-block"
            >
              {word === "experiences" ? <span className="text-gradient-primary">{word}</span> : word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.1 }}
          className="mt-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-primary/60" aria-hidden />
          <div className="flex items-baseline gap-3 text-lg sm:text-xl">
            <span className="font-display font-medium text-foreground">{profile.name} —</span>
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
          transition={{ duration: 0.6, ease: easeOut, delay: 1.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {profile.about.split(".")[0]}. I turn ideas into fast, scalable products — from pixel-perfect
          interfaces to resilient backends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 font-display font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href={profile.cvUrl}
            download
            className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-8 py-3.5 font-display font-semibold text-foreground backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary"
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
        transition={{ duration: 0.8, ease: easeOut, delay: 1.6 }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-card/80 px-4 py-6 backdrop-blur">
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
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
