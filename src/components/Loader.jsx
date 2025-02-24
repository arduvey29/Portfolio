import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "../animations/Animation";

const Loader = () => {
  const wordOptions = [
    ["Code", "Chaos", "Creativity"],
    ["Design", "Disrupt", "Dominate"],
    ["Syntax", "Soul", "Serendipity"],
    ["Dreams", "Depth", "Discipline"],
    ["Build", "Break", "Balance"],
    ["Logic", "Aesthetics", "Ambition"],
    ["Pixels", "Poetry", "Passion"],
    ["Innovate", "Iterate", "Inspire"],
    ["Minimal", "Mindful", "Magnetic"],
    ["Engineer", "Explorer", "Creator"],
  ];

  const [selectedWords, setSelectedWords] = useState(["", "", ""]);

  useEffect(() => {
    // Select a random set of words
    const randomIndex = Math.floor(Math.random() * wordOptions.length);
    setSelectedWords(wordOptions[randomIndex]);

    // Ensure animation runs after setting words
    setTimeout(() => {
      preLoaderAnim();
    }, 100); // Delay slightly to allow React to update the DOM
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="loader-text">{selectedWords[0]},</span>
        <span className="loader-text">{selectedWords[1]},</span>
        <span className="loader-text">{selectedWords[2]}.</span>
      </div>
    </div>
  );
};

export default Loader;
