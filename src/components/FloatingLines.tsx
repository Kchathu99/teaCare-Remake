"use client";

import { motion } from "framer-motion";

const FloatingLines = () => {

  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    width: Math.floor(Math.random() * 40) + 20, 
    color: ["#008000", "#FF0000", "#000000"][Math.floor(Math.random() * 3)], 
    top: `${Math.random() * 90}%`, 
    left: `${Math.random() * 90}%`, 
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: 1,
            y: [0, -3, 3, 0], 
            x: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.delay, 
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
