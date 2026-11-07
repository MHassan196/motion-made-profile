import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children: ReactNode;
  depth?: number;
  layer?: number;
  className?: string;
}

/** Scroll-linked 3D scene that gives each portfolio section independent depth. */
export function ScrollParallax({ children, depth = 1, layer = 1, className }: ScrollParallaxProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const yTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [150 * depth, 0, 0, -150 * depth]);
  const scaleTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [0.86, 1, 1, 0.92]);
  const opacityTarget = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.2, 1, 1, 0.4]);
  const rotateXTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [9 * depth, 0, 0, -7 * depth]);
  const rotateYTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [-3 * depth, 0, 0, 3 * depth]);
  const zTarget = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], [-180 * depth, 0, 0, -140 * depth]);
  const y = useSpring(yTarget, { stiffness: 65, damping: 21, mass: 0.4 });
  const scale = useSpring(scaleTarget, { stiffness: 65, damping: 21, mass: 0.4 });
  const opacity = useSpring(opacityTarget, { stiffness: 65, damping: 21, mass: 0.4 });
  const rotateX = useSpring(rotateXTarget, { stiffness: 65, damping: 21, mass: 0.4 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 65, damping: 21, mass: 0.4 });
  const z = useSpring(zTarget, { stiffness: 65, damping: 21, mass: 0.4 });

  return (
    <div
      ref={sceneRef}
      className={`relative [perspective:1400px] ${className ?? ""}`}
      style={{ zIndex: layer }}
    >
      <motion.div
        style={{
          y: reduceMotion ? 0 : y,
          scale: reduceMotion ? 1 : scale,
          opacity: reduceMotion ? 1 : opacity,
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          z: reduceMotion ? 0 : z,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}