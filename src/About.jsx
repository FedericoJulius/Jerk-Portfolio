import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";

function About() {
  const fullText = `Jerk has worked since kindergarten. Actually, she is born with skills of stupidity, but she managed to learn some skills like HTML, CSS, JS, React and Tailwind CSS. She is a web developer who loves to create beautiful and functional websites. Jerk is passionate about coding and enjoys turning ideas into reality.`;

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="mt-48 font-bold text-6xl ml-16">About</h1>
      <hr className="border-1 border-gray-500 mt-8" />
      <p className="mt-8 text-left w-8/12 ml-16 text-gray-300 whitespace-pre-line">
        <Typewriter
          words={[fullText]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={25}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </p>
    </motion.div>
  );
}

export default About;
