import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillIcon } from "./SkillIcon";
import { Stagger, StaggerItem, easeOut } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]"
        aria-hidden
      />
      <SectionHeading
        eyebrow="What I work with"
        title="Skills &"
        highlight="Technologies"
        subtitle="A toolkit refined over two years of shipping real products — from interactive frontends to APIs and databases that hold up under load."
      />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="card-surface group h-full rounded-2xl p-6 shadow-glow md:p-7"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">{group.title}</h3>
                <span className="font-display text-xs uppercase tracking-[0.2em] text-primary/80">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">{group.blurb}</p>
              <div className="grid grid-cols-3 gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, ease: easeOut, delay: i * 0.04 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/50 px-2 py-4 text-center transition-colors duration-300 hover:border-primary/40"
                  >
                    <SkillIcon slug={skill.icon} color={skill.color} className="h-6 w-6" />
                    <span className="text-[11px] font-medium leading-tight text-muted-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
