import { motion } from "framer-motion";
import { easeOut } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="h-px w-14 origin-center bg-primary"
        aria-hidden
      />
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
        className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
