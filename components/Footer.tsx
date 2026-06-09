export default function Footer() {
  return (
    <footer className="bg-negro border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-playfair text-3xl font-bold text-dorado">El Rincón</p>
            <p className="font-lato text-gray-500 text-sm mt-1">
              Cocina Tradicional Española
            </p>
          </div>
          <div className="flex gap-6 font-lato text-sm">
            <a href="#nosotros" className="text-gray-500 hover:text-dorado transition-colors">Nosotros</a>
            <a href="#carta" className="text-gray-500 hover:text-dorado transition-colors">Carta</a>
            <a href="#horarios" className="text-gray-500 hover:text-dorado transition-colors">Horarios</a>
            <a href="#reservar" className="text-gray-500 hover:text-dorado transition-colors">Reservar</a>
          </div>
          <p className="font-lato text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} Restaurante El Rincón
            <br />
            <span className="text-gray-700">
              Web by{" "}
              <a href="https://muestrateagency.netlify.app" className="text-dorado hover:underline" target="_blank" rel="noopener noreferrer">
                MUESTRATE!
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
