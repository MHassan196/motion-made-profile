import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, easeOut } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading title="Education" />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {education.map((edu) => (
          <StaggerItem key={edu.institution}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="card-surface group relative h-full overflow-hidden rounded-xl p-6 shadow-panel transition-colors duration-300 hover:border-primary/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {edu.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary/90">{edu.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{edu.grade}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
