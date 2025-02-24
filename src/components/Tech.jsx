import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiTailwindcss, SiJavascript, SiMongodb, SiCanva, SiFigma } from 'react-icons/si';
import { FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const techStack = [
  { icon: <RiReactjsLine />, color: 'text-cyan-400', name: 'React', link: 'https://reactjs.org/' },
  { icon: <SiTailwindcss />, color: 'text-blue-400', name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
  { icon: <SiJavascript />, color: 'text-yellow-400', name: 'JavaScript', link: 'https://www.javascript.com/' },
  { icon: <FaNodeJs />, color: 'text-green-500', name: 'Node.js', link: 'https://nodejs.org/' },
  { icon: <SiMongodb />, color: 'text-green-400', name: 'MongoDB', link: 'https://www.mongodb.com/' },
  { icon: <SiCanva />, color: 'text-blue-500', name: 'Canva', link: 'https://www.canva.com/' },
  { icon: <FaGitAlt />, color: 'text-orange-500', name: 'Git', link: 'https://git-scm.com/' },
  { icon: <SiFigma />, color: 'text-pink-500', name: 'Figma', link: 'https://www.figma.com/' }
];

// Bounce animation for icons
const bounceVariant = (delay) => ({
  y: [0, -10, 0],
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    delay: delay,
  }
});

const getDelay = (index) => (index % 4) * 0.1;

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="pb-36">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.25 }}
        className="relative my-20 text-center text-4xl font-semibold text-gray-100"
      >
        Technologies
        <span className="absolute left-1/2 top-[110%] h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </motion.h2>

      {/* Tech Icons Section */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.25, delay: getDelay(index) }}
            whileInView={bounceVariant(getDelay(index))}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 6px 20px rgba(255, 255, 255, 0.1), 0 0 40px ${tech.color}`, // Custom shadow based on icon color
              transition: { type: 'spring', stiffness: 200, damping: 25 },
            }}
            onMouseEnter={() => setHoveredTech(index)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative flex flex-col items-center justify-between w-40 h-40 p-8 border-4 border-neutral-800 rounded-xl shadow-lg transition-all transform"
          >
            {/* Icon at the top */}
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            
            {/* Tooltip and Heading at the bottom */}
            <p className="text-center text-sm text-gray-300">{tech.name}</p>
            {hoveredTech === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 p-3 bg-gray-900 text-gray-200 text-sm rounded-lg shadow-lg border border-gray-700"
              >
                {tech.name}
                <br />
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline text-xs mt-1 block"
                >
                  Read More
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
