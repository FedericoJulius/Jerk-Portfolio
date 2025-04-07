import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { links } from "./data";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { threshold: 0.2 });
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Wrapper>
      {/* Top nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-transparent flex justify-between items-center mx-auto p-8 w-full fixed top-0 left-0 z-50"
      >
        <div className="text-3xl font-bold text-emerald-500">LOGO</div>

        {/* Nav links for md+ */}
        <div className="gap-8 items-center hidden md:flex">
          {links.map((section) => (
            <a
              key={section.id}
              href={section.path}
              className="nav-link text-lg text-gray-100 hover:text-emerald-500 relative"
            >
              {section.text}
            </a>
          ))}
        </div>

        {/* Hamburger icon for small screens */}
        <motion.div
          className= {` block md:hidden text-white text-2xl cursor-pointer hover:text-emerald-500 ${isDrawerOpen? "" : "hover:rotate-90"} transition  z-[60]`}
          onClick={toggleDrawer}
          animate={{ x: isDrawerOpen ? -220 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <FaBars />
        </motion.div>
      </motion.div>

      {/* Drawer overlay */}
      {isDrawerOpen && (
        <motion.div
          className="fixed inset-0  z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isDrawerOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-[220px] bg-gray-900 p-6 z-50 shadow-lg"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-bold text-white">Menu</span>
          <FaTimes
            className="text-white text-xl cursor-pointer hover:text-emerald-500"
            onClick={toggleDrawer}
          />
        </div>

        <nav className="flex flex-col gap-6">
          {links.map((section) => (
            <a
              key={section.id}
              href={section.path}
              onClick={toggleDrawer}
              className="text-white text-lg hover:text-emerald-500 hover:rotate-0"
            >
              {section.text}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Spacer */}
      <div className="h-[96px]" />
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
