import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold tracking-wider">
          © {new Date().getFullYear()} Aaradhy Raghav Duvey | <span className="font-light">Techy. Innovator. Creator.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
