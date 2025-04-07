import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { social } from "./data";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="mt-32 text-center">
      <hr className="border border-gray-500" />
      <div className="flex items-center justify-around">
        <motion.div
          ref={ref}
          className="flex justify-center items-center gap-6 mt-6"
        >
          {social.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={iconVariants}
              whileHover={{ scale: 1.2, color: "#10b981" }} // Tailwind emerald-500
              className="text-2xl text-white transition duration-300 cursor-pointer"
            >
              <span>{item.icon}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
