import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fit=crop",
    alt: "Interior acogedor del restaurante",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80&fit=crop",
    alt: "Plato elaborado con esmero",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80&fit=crop",
    alt: "Gastronomía española",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&fit=crop",
    alt: "Selección de vinos de bodega",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&fit=crop",
    alt: "Mesa preparada para la ocasión",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop",
    alt: "Ambiente íntimo y cálido",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-negro py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
            Nuestros momentos
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Galería
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto" />
        </div>

        {/* Grid fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-dorado/0 group-hover:bg-dorado/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
