import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillIcon } from "./SkillIcon";
import { Stagger, StaggerItem, easeOut } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading title="Skills" />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="card-surface h-full rounded-xl p-6 shadow-panel transition-colors duration-300 hover:border-primary/50 md:p-7"
            >
              <h3 className="mb-6 font-display text-xl font-semibold text-foreground">{group.title}</h3>
              <div className="grid grid-cols-3 gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, ease: easeOut, delay: i * 0.04 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background/60 px-2 py-4 text-center transition-colors duration-300 hover:border-primary/50"
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
