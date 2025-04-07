import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { links } from "./data";

function Navbar() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { threshold: 0.2 });

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-transparent flex justify-between items-center mx-auto p-8 w-full fixed top-0 left-0 z-50"
      >
        <div className="text-3xl font-bold text-emerald-500">LOGO</div>
        <div className="flex gap-8 items-center">
          {links.map((section) => (
            <a
              key={section.id}
              href={`${section.path}`}
              className="nav-link text-lg text-gray-100 hover:text-emerald-500 relative"
            >
              {section.text}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[96px]" />

      {/* Invisible ref to track hero section visibility */}
      <div ref={heroRef} className="absolute top-[70vh] h-[1px] w-full" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .bg-transparent {
    background-color: transparent !important;
  }

  a.nav-link::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #10b981;
    transition: width 0.3s ease-in-out;
  }

  a.nav-link:hover::after {
    width: 100%;
  }
`;

export default Navbar;
