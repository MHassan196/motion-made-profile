import { motion } from "framer-motion";
import { Code2, Database, Gauge } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem, easeOut } from "./Reveal";

const pillars = [
  {
    icon: Code2,
    title: "Web Applications",
    text: "Pixel-perfect, interactive frontends with React, Next.js and TypeScript that stay fast under real-world load.",
  },
  {
    icon: Database,
    title: "APIs & Databases",
    text: "Node.js, Express, MongoDB and PostgreSQL — resilient backends, clean data flow and secure integrations.",
  },
  {
    icon: Gauge,
    title: "Motion & Performance",
    text: "GSAP and Framer Motion choreography, plus the SEO and performance work that makes it all feel instant.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading title="About" />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card-surface rounded-xl p-8 shadow-panel md:p-10">
            <p className="font-display text-lg leading-relaxed text-foreground md:text-xl">
              {profile.about.split(". ").slice(0, 2).join(". ")}.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {profile.about.split(". ").slice(2).join(". ")}
            </p>
          </div>
        </Reveal>

        <Stagger className="flex flex-col gap-4 lg:col-span-2">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="card-surface group flex gap-4 rounded-xl p-5 transition-colors duration-300 hover:border-primary/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
