import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="mt-48 font-bold text-6xl ml-16">Projects</h1>
      <hr className="border-1 border-gray-500 mt-8" />
      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-16 justify-around items-center">
          {[1, 2].map((proj, i) => (
            <motion.div
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              key={i}
              className="w-1/3 p-4  bg-gray-400 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-100">
                Project {proj}
              </h2>
              <img alt="" />
              <p className="mt-2 text-md text-gray-300">
                Description of project {proj}. This project is about...
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
