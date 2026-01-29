"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface DraggableCardProps {
  children: React.ReactNode;
}

const DraggableCard = ({ children }: DraggableCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const handleDragEnd = () => {
    controls.start({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className="cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileDrag={{ scale: 1.05}}
    >
      {children}
    </motion.div>
  );
};

export default DraggableCard;