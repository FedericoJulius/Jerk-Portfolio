import React, { useRef } from "react";
import { skills } from "./data";
import { motion, useInView } from "framer-motion";

function Skills() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true });
  return (
    <div>
      {/* Title */}
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-48 font-bold text-6xl ml-16"
      >
        Skills
      </motion.h1>

      <hr className="border-1 border-gray-500 mt-8" />

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        ref={skillsRef}
        animate={isSkillsInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className="grid grid-cols-3 gap-2 mt-12"
      >
        {skills.map((section) => (
          <motion.div
            
            key={section.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="text-emerald-500">{section.icon}</div>
            <h2 className="mt-4 text-2xl font-bold text-gray-100">
              {section.name}
            </h2>
            <p className="mt-2 text-md text-gray-300">{section.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
