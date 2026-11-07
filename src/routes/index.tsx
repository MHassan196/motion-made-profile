import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollParallax } from "@/components/portfolio/ScrollParallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Hassan — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Hassan, a Full Stack Developer crafting fast, scalable web apps with React, Next.js and Node.js. Explore 17 projects, skills, experience and get in touch.",
      },
      { property: "og:title", content: "Muhammad Hassan — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer building fast, scalable web apps with React, Next.js and Node.js — 17 shipped projects and counting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <Hero />
        <ScrollParallax depth={0.7} layer={1}><Marquee /></ScrollParallax>
        <ScrollParallax depth={1} layer={2} className="-mt-14"><About /></ScrollParallax>
        <ScrollParallax depth={1.1} layer={3} className="-mt-14"><Skills /></ScrollParallax>
        <ScrollParallax depth={0.9} layer={4} className="-mt-14"><Projects /></ScrollParallax>
        <ScrollParallax depth={1.1} layer={5} className="-mt-14"><Experience /></ScrollParallax>
        <ScrollParallax depth={0.8} layer={6} className="-mt-14"><Education /></ScrollParallax>
        <ScrollParallax depth={1} layer={7} className="-mt-14"><Contact /></ScrollParallax>
      </main>
      <ScrollParallax depth={0.7} layer={8} className="-mt-8"><Footer /></ScrollParallax>
    </div>
  );
}
