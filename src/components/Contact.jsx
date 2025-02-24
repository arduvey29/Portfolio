import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [animation, setAnimation] = useState("Send Message"); // Button text state

  const sendEmail = async (e) => {
    e.preventDefault();
    setAnimation("✉️ Sending..."); // Show sending message

    try {
      await emailjs.sendForm(
        process.env.SERVICE_KEY,
        process.env.TEMPLATE_KEY,
        form.current,
        process.env.PUBLIC_KEY
      );

      setTimeout(() => setAnimation("👍 Sent!"), 800); // Show thumbs-up after 800ms
      setTimeout(() => setAnimation("Send Message"), 2000); // Reset button text after 2 seconds
      setStatusMessage("✅ Message sent successfully!");

      form.current.reset();

      // Hide the message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      setStatusMessage("❌ Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="relative pb-16"> {/* Added relative positioning for popup */}
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.25 }}
        className="relative my-16 text-center text-4xl font-bold text-gray-100"
      >
        Let's Work Together
        <span className="absolute left-1/2 top-12 h-1 w-16 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></span>
      </motion.h2>

      {/* Left - Contact Details | Right - Contact Form */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Contact Details */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-md text-gray-300 space-y-4"
        >
          <p>Got a cool idea? Let’s turn it into something awesome together. Drop me a message, and let’s get started!</p>

        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="bg-neutral-900 p-8 rounded-2xl shadow-lg shadow-purple-500/20 w-full max-w-lg flex flex-col gap-4"
        >
          <label className="text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 rounded-lg bg-neutral-800 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <label className="text-gray-300 font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 rounded-lg bg-neutral-800 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <label className="text-gray-300 font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="p-3 rounded-lg bg-neutral-800 text-white focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />

          {/* Submit Button with Animation */}
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-cyan-400 py-3 px-6 text-white font-semibold rounded-lg hover:opacity-80 transition-transform duration-300 ease-in-out flex items-center justify-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            {animation}
          </motion.button>
        </motion.form>
      </div>

      {/* Status Message Popup */}
      {statusMessage && (
        <motion.div
          className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {statusMessage}
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
