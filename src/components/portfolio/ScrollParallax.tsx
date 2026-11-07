import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children: ReactNode;
  depth?: number;
}

/** Gives each full portfolio scene a smooth scroll-linked entrance and parallax drift. */
export function ScrollParallax({ children, depth = 1 }: ScrollParallaxProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const yTarget = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [120 * depth, 0, 0, -120 * depth]);
  const scaleTarget = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.94]);
  const opacityTarget = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.35, 1, 1, 0.55]);
  const y = useSpring(yTarget, { stiffness: 75, damping: 22, mass: 0.35 });
  const scale = useSpring(scaleTarget, { stiffness: 75, damping: 22, mass: 0.35 });
  const opacity = useSpring(opacityTarget, { stiffness: 75, damping: 22, mass: 0.35 });

  return (
    <div ref={sceneRef} className="relative">
      <motion.div
        style={{
          y: reduceMotion ? 0 : y,
          scale: reduceMotion ? 1 : scale,
          opacity: reduceMotion ? 1 : opacity,
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}