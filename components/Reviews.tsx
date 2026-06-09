const reviews = [
  {
    name: "María García",
    rating: 5,
    date: "Marzo 2024",
    text: "El mejor cocido que he probado en mi vida. El ambiente es acogedor, el servicio atento y los precios muy razonables. ¡Ya hemos repetido tres veces!",
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    date: "Febrero 2024",
    text: "Las croquetas de la abuela son de otro mundo. El jamón ibérico, impresionante. Un lugar para repetir sin duda. Muy recomendable para celebraciones especiales.",
    initials: "CR",
  },
  {
    name: "Ana Martínez",
    rating: 5,
    date: "Enero 2024",
    text: "Reservamos para nuestro aniversario y fue perfecto. Trato personalizado, rincón íntimo y una carta deliciosa. La torrija caramelizada, un pecado irresistible.",
    initials: "AM",
  },
];

export default function Reviews() {
  return (
    <section className="bg-negro py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
            Lo que dicen de nosotros
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Opiniones
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-dorado text-lg">★</span>
                ))}
              </div>

              <p className="font-lato text-gray-300 text-base leading-relaxed mb-8 italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-11 h-11 rounded-full bg-dorado flex items-center justify-center shrink-0">
                  <span className="font-playfair font-bold text-negro text-sm">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-lato font-semibold text-white text-sm">{review.name}</p>
                  <p className="font-lato text-gray-500 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
