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
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="About me"
        title="A developer who"
        highlight="ships"
        subtitle="Two years of turning ideas into products — end to end, from the first wireframe to the production deploy."
      />

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card-surface relative overflow-hidden rounded-3xl p-8 shadow-glow md:p-10">
            <span
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <p className="font-display text-lg leading-relaxed text-foreground md:text-xl">
              {profile.about.split(". ").slice(0, 2).join(". ")}.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {profile.about.split(". ").slice(2).join(". ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Frontend", "Backend", "Full Stack", "MERN", "UI Engineering"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, ease: easeOut, delay: i * 0.07 }}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        <Stagger className="flex flex-col gap-4 lg:col-span-2">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="card-surface group flex gap-4 rounded-2xl p-5 transition-colors duration-300 hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
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
