import React from "react";
import { useTypewriter, Cursor as TypewriterCursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = ({ textEnter, textLeave }) => {  // Accept functions as props
  const [text] = useTypewriter({
    words: ["esigner", "eveloper"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div className="relative pb-4 lg:pb-24 flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <h1 
          onMouseEnter={textEnter}  // Call function directly
          onMouseLeave={textLeave}  
          className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight"
        >
          I'm <span className="font-semibold">Aaradhy Raghav Duvey</span>
        </h1>
        <span className="mt-4 inline-block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-transparent leading-normal drop-shadow-lg">
          D{text}
        </span>
        <TypewriterCursor cursorColor="white" typeSpeed={70} cursorStyle="_" />
      </motion.div>
    </div>
  );
};

export default Hero;
