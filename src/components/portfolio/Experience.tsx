import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.35 });

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading title="Experience" align="left" />

      <div ref={timelineRef} className="relative">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-border" aria-hidden />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-primary"
          aria-hidden
        />
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-4 pb-10 pl-8 last:pb-0 md:grid-cols-[210px_1fr] md:gap-12 md:pl-10"
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 20, delay: index * 0.12 + 0.12 }}
                className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-primary bg-background"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4 md:block">
                <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="h-9 w-9 rounded-md border border-border object-cover md:mt-4"
                  />
                )}
              </div>
              <div className="border-b border-border pb-8 last:border-0 last:pb-0">
                <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">{exp.role}</h3>
                <p className="mt-1 text-base font-medium text-primary">{exp.company}</p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs text-muted-foreground">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}