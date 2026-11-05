import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, easeOut } from "./Reveal";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading title="Experience" />

      <div ref={timelineRef} className="relative mx-auto max-w-3xl">
        {/* Track + scroll-linked progress line */}
        <div className="absolute left-[22px] top-0 h-full w-px bg-border md:left-1/2" aria-hidden />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[22px] top-0 h-full w-px origin-top bg-primary md:left-1/2"
          aria-hidden
        />

        <Stagger className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <StaggerItem key={exp.company}>
                <div className={`relative flex md:items-center ${left ? "" : "md:flex-row-reverse"}`}>
                  {/* Node */}
                  <motion.span
                    whileInView={{ scale: [0, 1.25, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="absolute left-[22px] z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-background md:left-1/2"
                  >
                    <Briefcase className="h-4 w-4 text-primary" />
                  </motion.span>

                  <div className={`ml-14 w-full md:ml-0 md:w-1/2 ${left ? "md:pr-14" : "md:pl-14"}`}>
                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="card-surface rounded-xl p-6 shadow-panel transition-colors duration-300 hover:border-primary/50"
                    >
                      <div className="flex items-center gap-3">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            loading="lazy"
                            className="h-11 w-11 rounded-lg border border-border object-cover"
                          />
                        )}
                        <div>
                          <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-sm font-medium text-primary">{exp.company}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {exp.period}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                      <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
                        {exp.skills.join(" · ")}
                      </p>
                    </motion.article>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
