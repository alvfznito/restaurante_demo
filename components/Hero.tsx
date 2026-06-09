import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&fit=crop"
        alt="Interior Restaurante El Rincón"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay oscuro cálido */}
      <div className="absolute inset-0 bg-gradient-to-b from-negro/70 via-negro/50 to-negro/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-lato text-dorado tracking-[0.4em] text-xs uppercase mb-6">
          Cocina Tradicional Española
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          Restaurante
          <br />
          <span className="text-dorado italic">El Rincón</span>
        </h1>
        <div className="w-20 h-px bg-dorado mx-auto my-6" />
        <p className="font-lato text-crema text-lg md:text-2xl mb-10 font-light leading-relaxed">
          Donde cada plato cuenta una historia
          <br className="hidden sm:block" /> de sabor y tradición
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#carta"
            className="bg-dorado text-negro px-8 py-4 font-lato font-bold text-base rounded hover:bg-dorado/90 transition-colors"
          >
            Ver nuestra carta
          </a>
          <a
            href="#reservar"
            className="border-2 border-white/70 text-white px-8 py-4 font-lato font-semibold text-base rounded hover:border-dorado hover:text-dorado transition-colors"
          >
            Reservar mesa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
