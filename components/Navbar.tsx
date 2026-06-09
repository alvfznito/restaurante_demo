"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Carta", href: "#carta" },
    { label: "Horarios", href: "#horarios" },
    { label: "Galería", href: "#galeria" },
    { label: "Reservar", href: "#reservar", cta: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-negro/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="font-playfair text-2xl font-bold text-dorado tracking-wide">
            El Rincón
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.cta ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-dorado text-negro px-5 py-2.5 rounded font-lato font-semibold hover:bg-dorado/90 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-lato text-white hover:text-dorado transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-3 px-2 font-lato transition-colors ${
                link.cta ? "text-dorado font-semibold" : "text-white hover:text-dorado"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
