import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skillCard }) {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="w-full max-w-7xl p-3 flex flex-col rounded-xl bg-slate-800 text-center gap-5">
      {/* Card Icon */}
      <div className="w-fit mx-auto mt-4 p-4 rounded-full bg-slate-900 text-3xl text-primary">
        {skillCard.icon}
      </div>

      {/* Card Title */}
      <h3 className="mx-auto text-xl sm:text-2xl font-bold uppercase tracking-widest">
        {skillCard.title}
      </h3>

      {/* Skill summary */}
      <p className="mx-auto max-w-sm text-gray-300 sm:text-lg">
        {skillCard.summary}
      </p>

      {/* Card List */}
      <div className="h-full p-4 bg-slate-900 rounded-xl">
        <motion.ul
          {...stagger}
          className="flex flex-start flex-wrap gap-3 text-gray-400"
        >
          {/* Render skills list using stagger animation */}
          {skillCard.skills.map((skill, i) => (
            <motion.li
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.2,
                delay: 0.1 * i,
              }}
              key={skill}
              className="px-3 py-1 border border-gray-400 rounded-lg"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
