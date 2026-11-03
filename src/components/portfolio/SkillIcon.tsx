import { SiFigma, SiFirebase, SiGit, SiGithub, SiGsap, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiVercel, SiWordpress, SiExpress, SiConvex, SiMui, SiFramer } from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  redux: SiRedux,
  javascript: SiJavascript,
  typescript: SiTypescript,
  mui: SiMui,
  tailwindcss: SiTailwindcss,
  gsap: SiGsap,
  framer: SiFramer,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  php: SiPhp,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  convex: SiConvex,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  wordpress: SiWordpress,
  vercel: SiVercel,
  postman: SiPostman,
  figma: SiFigma,
};

export function SkillIcon({ slug, color, className }: { slug: string; color?: string; className?: string }) {
  const Icon = iconMap[slug];
  if (!Icon) return null;
  return <Icon className={className} style={{ color }} aria-hidden />;
}
