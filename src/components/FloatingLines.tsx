"use client";

import { motion } from "framer-motion";

const FloatingLines = () => {
/**
 * A component that renders a bunch of lines that float around on the screen.
 *
 * The lines are created randomly, with random widths, colors, and positions.
 * They are animated with a staggered delay to create a sense of movement.
 * The animation is infinite, and the lines will continue to move around until
 * the component is unmounted.
 */
  // Generate 15 random lines with different properties
  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    width: Math.floor(Math.random() * 40) + 20, // Random width between 20-60px
    color: ["#008000", "#FF0000", "#000000"][Math.floor(Math.random() * 3)], // Random color
    top: `${Math.random() * 90}%`, // Random top position (0-90%)
    left: `${Math.random() * 90}%`, // Random left position (0-90%)
    delay: Math.random() * 3, // Random delay
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: 1,
            y: [0, -3, 3, 0], // Slight floating effect
            x: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.delay, // Staggered effect
          }}
          className="absolute h-[2px]"
          style={{
            width: `${line.width}px`,
            backgroundColor: line.color,
            top: line.top,
            left: line.left,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLines;
