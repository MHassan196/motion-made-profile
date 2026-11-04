import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { CONTACT_EMAIL, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal, easeOut } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const configured = Boolean(CONTACT_EMAIL);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!configured) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]"
        aria-hidden
      />
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build"
        highlight="something"
        subtitle="Have a project in mind or a role to fill? My inbox is open — I usually reply within a day."
      />

      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="card-surface flex h-full flex-col gap-6 rounded-3xl p-7 shadow-glow">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Contact details</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer social? Reach me on any platform below — or grab my CV to learn more first.
              </p>
            </div>
            {configured ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-display text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            ) : (
              <p className="rounded-xl border border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
                Email address coming soon — meanwhile, social links below work instantly.
              </p>
            )}
            <div className="mt-auto">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Find me on
              </p>
              <SocialLinks />
              <a
                href={profile.cvUrl}
                download
                className="mt-6 block rounded-full border border-border bg-card/60 px-5 py-2.5 text-center text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                Download CV
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="card-surface rounded-3xl p-7 shadow-glow md:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground">Your name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-foreground">Your email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-2">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline and budget…"
                className="resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <motion.button
              type="submit"
              whileHover={configured ? { scale: 1.02 } : undefined}
              whileTap={configured ? { scale: 0.98 } : undefined}
              transition={{ duration: 0.25, ease: easeOut }}
              disabled={!configured}
              className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 font-display font-semibold text-primary-foreground transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="relative z-10">{sent ? "Opening your mail app…" : "Send message"}</span>
              {sent ? <CheckCircle2 className="relative z-10 h-4 w-4" /> : <Send className="relative z-10 h-4 w-4" />}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
