import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      borderRadius: "50%",
      backgroundColor: "white",
      mixBlendMode: "hard-light"
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      borderRadius: "50%",
      backgroundColor: "purple",
      mixBlendMode: "hard-light"
    },
  };

  return <motion.div className="cursor fixed top-0 left-0 pointer-events-none" variants={variants} animate={cursorVariant} />;
};

export default Cursor;