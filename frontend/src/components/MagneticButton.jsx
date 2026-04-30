import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * MagneticButton — a CTA wrapper that gently pulls toward the cursor on hover.
 * Wraps any clickable element. Adds premium tactile feel.
 */
export const MagneticButton = ({ children, strength = 0.35, className = "", ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  // Children move slightly less than the wrapper for a layered feel
  const childX = useTransform(springX, (v) => v * 0.5);
  const childY = useTransform(springY, (v) => v * 0.5);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
      {...props}
    >
      <motion.div style={{ x: childX, y: childY }} className="inline-block">
        {children}
      </motion.div>
    </motion.div>
  );
};
