import React, { useRef, useEffect } from "react";
import { useState } from "react";
import IdleJs from "idle-js";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import LoadingBar from 'react-top-loading-bar';
function App() {
    const loadingRef = useRef(null);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      let value = 0;
      const interval = setInterval(() => {
        value += 10;
        setProgress(value); // smooth start
        if (value >= 100) {// complete bar
          clearInterval(interval);
        }
      }, 300);

      return () => clearInterval(interval);
    }, []);
  
  const sectionRefs = useRef([]);
  const index = useRef(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (sectionRefs.current[index.current]) {
        sectionRefs.current[index.current].scrollIntoView({
          behavior: "smooth",
        });
      }
      index.current = (index.current + 1) % sectionRefs.current.length;
    }, 5000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const idle = new IdleJs({
      idle: 3000, // 3 seconds idle
      onIdle: startAutoScroll,
      onActive: stopAutoScroll,
      events: ["mousemove", "keydown", "scroll", "touchstart"], // Detect user activity
    });

    idle.start();

    return () => {
      idle.stop();
      stopAutoScroll();
    };
  }, []);
  if(progress < 100) {
    return (
         <div>
      <LoadingBar
        color="#10b981"

        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="fixed top-2 right-4 text-white text-sm z-50">

        {progress < 100 ? `${progress}%` : ""}
      </div></div>
    );
  }
  return (
    <div>
      <Navbar />
      <div id="hero" ref={(el) => (sectionRefs.current[0] = el)}>
        <Hero />
      </div>
      <div id="skills" ref={(el) => (sectionRefs.current[1] = el)}>
        <Skills />
      </div>
      <div id="about" ref={(el) => (sectionRefs.current[2] = el)}>
        <About />
      </div>
      <div id="projects" ref={(el) => (sectionRefs.current[3] = el)}>
        <Projects />
      </div>
      <div id="contact" ref={(el) => (sectionRefs.current[4] = el)}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
