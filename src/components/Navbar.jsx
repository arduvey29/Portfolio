import React, { useState, useEffect } from "react";
import { FaDiscord, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Homepage", link: "hero" },
    { label: "About Me", link: "about" },
    { label: "Technologies", link: "tech" },
    { label: "Experience", link: "experience" },
    { label: "Projects", link: "projects" },
    { label: "Contact Us", link: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }} // Starts off-screen
      animate={{ opacity: 1, y: 0 }} // Slides down smoothly
      transition={{ type: "spring", stiffness: 120, damping: 14, duration: 1.2 }} // Smooth & bouncy
      className={`fixed w-full flex items-center justify-between py-4 px-8 text-white bg-opacity-80 backdrop-blur-md transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <p
        className="cursor-pointer text-3xl font-bold tracking-wide logo-font"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ARD
      </p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-8 text-lg font-light flex-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => scrollToSection(item.link)}
              className="hover:text-purple-400 transition"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-6 text-xl">
        <a href="https://www.linkedin.com/in/aaradhy-raghav-duvey-b18b872b7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-purple-400 cursor-pointer transition" />
        </a>
        <a href="https://github.com/arduvey29" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-400 cursor-pointer transition" />
        </a>
        <a href="https://www.instagram.com/ard_16.29?igsh=MTl3cDZtZjIyaXVnOA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-purple-400 cursor-pointer transition" />
        </a>
        <a href="https://discordapp.com/users/1260661176606523393" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="hover:text-purple-400 cursor-pointer transition" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-3xl focus:outline-none"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.8 }}
          className="absolute top-16 left-0 w-full bg-black text-center text-lg flex flex-col gap-4 p-6 shadow-lg z-50"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.link)}
              className="hover:text-purple-400 transition block py-2"
            >
              {item.label}
            </button>
          ))}

          {/* Social Icons in Mobile Menu */}
          <div className="flex justify-center gap-6 mt-4 text-xl border-t border-gray-700 pt-4">
            <FaLinkedin className="hover:text-purple-400 cursor-pointer transition" />
            <FaGithub className="hover:text-purple-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-purple-400 cursor-pointer transition" />
            <FaDiscord className="hover:text-purple-400 cursor-pointer transition" />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
