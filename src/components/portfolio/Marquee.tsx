import { skillGroups } from "@/data/portfolio";

const techNames = skillGroups.flatMap((g) => g.skills.map((s) => s.name));

export function Marquee() {
  const row = [...techNames, ...techNames];
  return (
    <div className="marquee-paused relative overflow-hidden border-y border-border py-4">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((name, i) => (
          <span key={name + i} className="flex items-center gap-10" aria-hidden={i >= techNames.length}>
            <span className="whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
