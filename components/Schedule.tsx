const schedule = [
  { day: "Lunes", lunch: "13:00 – 16:00", dinner: null, closed: false },
  { day: "Martes", lunch: null, dinner: null, closed: true },
  { day: "Miércoles", lunch: "13:00 – 16:00", dinner: null, closed: false },
  { day: "Jueves", lunch: "13:00 – 16:00", dinner: "20:30 – 23:30", closed: false },
  { day: "Viernes", lunch: "13:00 – 16:00", dinner: "20:30 – 23:30", closed: false },
  { day: "Sábado", lunch: "13:00 – 16:00", dinner: "20:30 – 23:30", closed: false },
  { day: "Domingo", lunch: "13:00 – 16:00", dinner: null, closed: false },
];

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Schedule() {
  return (
    <section id="horarios" className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
            Planifica tu visita
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-negro mb-4">
            Horarios y Reservas
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto" />
        </div>

        {/* Tabla de horarios */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12 border border-gray-100">
          {schedule.map((row, i) => (
            <div
              key={row.day}
              className={`flex items-center justify-between px-6 py-4 ${
                i % 2 === 0 ? "bg-crema" : "bg-white"
              } ${row.closed ? "opacity-40" : ""}`}
            >
              <span className="font-playfair text-lg font-semibold text-negro flex items-center gap-2">
                {row.day}
                {row.closed && (
                  <span className="font-lato text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    Cerrado
                  </span>
                )}
              </span>
              {!row.closed && (
                <div className="text-right font-lato text-sm space-y-0.5">
                  <div className="text-gray-600">
                    <span className="text-dorado font-semibold">Mediodía:</span>{" "}
                    {row.lunch}
                  </div>
                  {row.dinner && (
                    <div className="text-gray-600">
                      <span className="text-dorado font-semibold">Noche:</span>{" "}
                      {row.dinner}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA reserva */}
        <div className="bg-negro rounded-2xl p-8 md:p-12 text-center">
          <p className="font-playfair text-2xl md:text-3xl text-white mb-3">
            ¿Quieres reservar tu mesa?
          </p>
          <p className="font-lato text-gray-400 mb-8 text-base">
            Escríbenos por WhatsApp y te confirmamos disponibilidad al momento
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-dorado text-negro px-8 py-4 rounded font-lato font-bold text-base hover:bg-dorado/90 transition-colors mb-8"
          >
            {WHATSAPP_SVG}
            Reservar por WhatsApp
          </a>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-center gap-6 text-gray-400 font-lato text-sm">
            <span>📍 Plaza Mayor 1, Tu ciudad</span>
            <span>📞 000 000 000</span>
            <span>✉️ info@restauranteelrincon.es</span>
          </div>
        </div>
      </div>
    </section>
  );
}
