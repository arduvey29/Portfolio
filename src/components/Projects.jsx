import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-16">
      {/* Section Title */}
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.25}}
        className="relative my-16 text-center text-4xl font-bold text-gray-100">
        Projects
        <span className="absolute left-1/2 top-12 h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></span>
      </motion.h2>

      {/* Coming Soon Section */}
      <div className="flex flex-col items-center justify-center text-center px-6">
        <p className="text-lg text-neutral-400 max-w-xl">
          🚀 Great things take time! I'm working on some exciting projects that
          will be showcased here soon. Stay tuned for something amazing! ✨
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
        {[1, 2, 3].map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex flex-col items-center justify-between p-6 h-90 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-lg shadow-purple-500/20"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Project {project}</h3>
            <p className="text-neutral-400 text-sm text-center max-w-xs">
              A brief description of the project will be added here soon.
            </p>
            {/* Blinking Dot */}
            <div className="absolute top-3 right-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400"></span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
