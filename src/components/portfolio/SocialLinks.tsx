import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { label: "GitHub", href: profile.socials.github, Icon: SiGithub },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: SiLinkedin },
    { label: "Facebook", href: profile.socials.facebook, Icon: SiFacebook },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
