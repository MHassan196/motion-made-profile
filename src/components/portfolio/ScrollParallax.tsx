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

  const yTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [58 * depth, 0, 0, -58 * depth]);
  const scaleTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [0.97, 1, 1, 0.97]);
  const opacityTarget = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.68, 1, 1, 0.68]);
  const y = useSpring(yTarget, { stiffness: 90, damping: 24, mass: 0.3 });
  const scale = useSpring(scaleTarget, { stiffness: 90, damping: 24, mass: 0.3 });
  const opacity = useSpring(opacityTarget, { stiffness: 90, damping: 24, mass: 0.3 });

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