import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  // Prevent overflow issues globally
  useEffect(() => {
    document.body.style.overflowX = "clip"; // Fix scrollbar issue
    return () => {
      document.body.style.overflowX = ""; // Reset when unmounted
    };
  }, []);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Cursor hover effects
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="relative text-gray-200 antialiased selection:bg-purple-500 selection:text-black min-h-screen overflow-x-clip">
      <Cursor cursorVariant={cursorVariant} />

      {/* Background layers */}
      <div className="fixed top-0 left-0 h-full w-full -z-10 bg-black"></div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.3)_10%,rgba(76,29,149,0.2)_40%,transparent_70%)]"></div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isSidebarOpen && <Sidebar toggleSidebar={() => setIsSidebarOpen(false)} />}
          
          {/* Navbar should stay correctly positioned */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />
          </div>

          {/* Main content */}
          <main className="container mx-auto px-8 pt-[80px]">
            <section id="hero"><Hero textEnter={textEnter} textLeave={textLeave} /></section>
            <section id="about"><AboutMe /></section>
            <section id="tech"><Tech /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <section id="footer"><Footer /></section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
