import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading title="Education" align="left" />

      <div className="border-t border-border">
        {education.map((item, index) => (
          <motion.article
            key={item.institution}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-2 border-b border-border py-6 md:grid-cols-[190px_minmax(0,1fr)_120px] md:items-start md:gap-8 md:py-7"
          >
            <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
            <p className="font-display text-sm font-semibold text-primary md:text-right">{item.grade}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}