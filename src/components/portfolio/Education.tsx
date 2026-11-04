import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, easeOut } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Academics"
        title="Education &"
        highlight="Qualifications"
        subtitle="A software engineering degree backed by a consistent record of strong results."
      />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {education.map((edu, i) => (
          <StaggerItem key={edu.institution}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="card-surface group relative h-full overflow-hidden rounded-2xl p-6 shadow-glow transition-colors duration-300 hover:border-primary/40"
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {edu.grade}
                </span>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {edu.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary/90">{edu.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
