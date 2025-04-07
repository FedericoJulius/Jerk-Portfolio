import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ame from "./assets/ame.jpeg";

function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <div
      id="home"
      className="grid grid-cols-[1fr_1.6fr] gap-4 h-[70vh] bg-cover bg-center bg-gradient-to-r from-gray-900 to-gray-800"
    >
      {/* Text section */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isTextInView ? 1 : 0, x: isTextInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-start p-16 text-white"
      >
        <h1 className="text-6xl font-bold leading-normal">Hello, I'm a Jerk</h1>
        <h3 className="mt-8 text-xl text-white">Loser</h3>
        <p className="mt-4 text-gray-300 max-w-md">
          I am a passionate web developer with a knack for creating stunning and
          functional websites. I love coding and turning ideas into reality. My
          goal is to build user-friendly and visually appealing web
        </p>
        <button className="mt-8 bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition duration-300 ease-in-out">
          Contact Me
        </button>
      </motion.div>

      {/* Image section */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isImageInView ? 1 : 0, x: isImageInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center p-8"
      >
        <img
          className="w-full max-h-[50vh] h-auto object-cover rounded-xl shadow-lg"
          src={ame}
          alt="Developer"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
