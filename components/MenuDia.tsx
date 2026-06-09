const primeros = [
  "Sopa castellana con huevo y pan frito",
  "Ensalada mixta de temporada",
  "Croquetas de jamón ibérico (4 uds.)",
];

const segundos = [
  "Pollo asado al horno con patatas",
  "Merluza a la plancha con verduras",
  "Lomo de cerdo con pimientos asados",
];

export default function MenuDia() {
  return (
    <section id="menu-del-dia" className="bg-negro py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
            De lunes a viernes
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Menú del día
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto mb-8" />
          <div className="inline-block bg-dorado text-negro font-playfair text-4xl font-bold px-10 py-3 rounded">
            12,50€
          </div>
        </div>

        {/* Primeros y Segundos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="font-lato text-dorado tracking-[0.25em] text-xs uppercase mb-6">
              Primeros
            </p>
            <ul className="space-y-4">
              {primeros.map((plato) => (
                <li key={plato} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-dorado mt-[7px] shrink-0" />
                  <span className="font-lato text-white/75 text-base leading-snug">
                    {plato}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="font-lato text-dorado tracking-[0.25em] text-xs uppercase mb-6">
              Segundos
            </p>
            <ul className="space-y-4">
              {segundos.map((plato) => (
                <li key={plato} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-dorado mt-[7px] shrink-0" />
                  <span className="font-lato text-white/75 text-base leading-snug">
                    {plato}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Incluye */}
        <div className="bg-dorado/10 border border-dorado/30 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <p className="font-lato text-dorado tracking-[0.25em] text-xs uppercase shrink-0">
            Incluye
          </p>
          <div className="hidden sm:block w-px h-8 bg-dorado/30" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <span className="flex items-center gap-2 font-lato text-white/80 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" />
              Postre del día
            </span>
            <span className="flex items-center gap-2 font-lato text-white/80 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" />
              Bebida (agua, vino de la casa o refresco)
            </span>
          </div>
        </div>

        <p className="text-center font-lato text-white/25 text-sm mt-10">
          Disponible de lunes a viernes · 13:00 – 16:00 · Sujeto a disponibilidad diaria
        </p>
      </div>
    </section>
  );
}
