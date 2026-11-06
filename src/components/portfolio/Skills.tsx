import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillIcon } from "./SkillIcon";

const groupReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.055 },
  },
};

const skillReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading title="Skills" align="left" />

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={groupReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border-t border-border pt-5"
          >
            <div className="mb-5 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-foreground">{group.title}</h3>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillReveal}
                  whileHover={{ x: 3 }}
                  className="flex min-h-12 items-center gap-2.5 border-b border-border/70 py-2.5"
                >
                  <SkillIcon slug={skill.icon} color={skill.color} className="h-[18px] w-[18px] shrink-0" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}