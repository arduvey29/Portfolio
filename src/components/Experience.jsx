import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in
        className="relative my-16 text-center text-4xl font-bold text-gray-100"
      >
        Experience
        <span className="absolute left-1/2 top-12 h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></span>
      </motion.h2>

      <div className="space-y-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth fade-in
            className="group relative flex flex-wrap items-start lg:items-center lg:justify-center"
          >
            {/* Year Section (Fade-In) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Clean fade-in
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 group-hover:text-purple-400 transition duration-300">
                {experience.year}
              </p>
            </motion.div>

            {/* Experience Details (Fade-In) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Smooth fade
              className="relative w-full max-w-xl lg:w-3/4 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 shadow-md transition duration-300 group-hover:shadow-purple-500/20"
            >
              {/* Role & Company */}
              <h6 className="mb-2 text-lg font-semibold text-gray-100">
                {experience.role} -{" "}
                <span className="text-sm text-purple-400">{experience.company}</span>
              </h6>

              {/* Description */}
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300 shadow-md transition duration-300 hover:bg-purple-500/30 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
