import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; </p>
      <div className="mt-2">
        <Link to="/about" className="mx-2 hover:underline">Sobre Nosotros</Link>
        <Link to="/contact" className="mx-2 hover:underline">Contacto</Link>
        <Link to="/privacy" className="mx-2 hover:underline">Privacidad</Link>
      </div>
    </footer>
  );
};

export default Footer;
