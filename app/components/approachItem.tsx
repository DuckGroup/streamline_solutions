"use client";
import { motion } from "framer-motion";

interface ApproachItemProps {
  approach: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
}

export const ApproachItem = ({ approach, index }: ApproachItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.3, x: -20 }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5 }
      }}
      viewport={{ 
        once: false, // Set to true if you want animation only once
        amount: 0.5  // 50% of element must be visible
      }}
      className="border-l-4 border-orange-500 pl-6 py-4 transition-all"
    >
      <div className="text-orange-500 font-bold text-sm mb-2">
        {approach.number}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{approach.title}</h3>
      <p className="text-gray-600">{approach.description}</p>
    </motion.div>
  );
};