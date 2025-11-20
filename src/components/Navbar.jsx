import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const scrollSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        })
    }
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-blue-600">
          Clínica Dental
        </h2>
        
        <ul className="hidden md:flex gap-8 text-gray-700">
          <li><button onClick={()=> scrollSection("Inicio")}>Inicio</button></li>
          <li><button onClick={()=> scrollSection("Nosotros")}>Sobre Nosotros</button></li>
          <li><button onClick={()=> scrollSection("Atencion")}>Servicios</button></li>
          <li><button onClick={()=> scrollSection("Equipo")}>Nuestro Equipo</button></li>
        </ul>

        {/* Botones */}
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="border border-blue-600 px-4 py-1 rounded-lg text-blue-600 flex items-center justify-center">
            Agendar Cita
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded-lg flex items-center justify-center">
            Iniciar Sesión
          </Link>
        </div>

        {/* Menu Hamburguesa */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/team">Nuestro Equipo</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
