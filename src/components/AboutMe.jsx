import React from 'react';
import { motion } from 'framer-motion';
import About from '../assets/output1.jpg';
import { ABOUT_TEXT } from '../constants/index';

const AboutMe = () => {
  return (
    <div id='about' className="relative pb-20 lg:pb-24 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]">
      {/* Section Title */}
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.25}}
        className="my-16 text-center text-4xl font-semibold text-gray-100 relative">
        About <span className="text-neutral-500">Me</span>
        <span className="absolute left-1/2 top-12 h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-32 px-6 lg:px-20">
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/3 flex justify-center"
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            className="rounded-2xl max-w-[280px] sm:max-w-[380px] lg:max-w-[420px] shadow-xl shadow-purple-500/30 border-2 border-purple-500/20"
            src={About}
            alt="About me pic"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-6 text-lg leading-relaxed text-gray-300 lg:pl-8">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
