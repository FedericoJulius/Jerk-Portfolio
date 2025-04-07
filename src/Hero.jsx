import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ame from "./assets/ame.jpeg";

function Hero() {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <div id="home" className="h-[70vh] w-full relative">
      {/* Background image on md and up */}
      <div
        className=" absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ame})` }}
      />

      {/* Gradient overlay for readability */}
      <div className="hidden md:block absolute inset-0 bg-black/50" />

      {/* Text content */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col justify-center items-start p-6 sm:p-16 h-full text-white"
      >
        <h1 className="text-5xl sm:text-6xl font-bold leading-normal">
          Hello, I'm a Jerk
        </h1>
        <h3 className="mt-8 text-xl">Loser</h3>
        <p className="mt-4 text-gray-300 max-w-md hidden lg:block">
          I am a passionate web developer with a knack for creating stunning and
          functional websites. I love coding and turning ideas into reality. My
          goal is to build user-friendly and visually appealing web
        </p>
        <button className="mt-8 bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition duration-300 ease-in-out">
          Contact Me
        </button>
      </motion.div>

    </div>
  );
}

export default Hero;
