import Image from "next/image";

const stats = [
  { num: "+20", label: "Años de tradición" },
  { num: "+50", label: "Platos en carta" },
  { num: "★ 4.9", label: "Valoración media" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <div className="relative h-80 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&fit=crop"
              alt="Interior acogedor del Restaurante El Rincón"
              fill
              className="object-cover"
            />
            {/* Badge años */}
            <div className="absolute bottom-6 right-6 bg-dorado text-negro px-5 py-3 rounded-lg shadow-lg">
              <p className="font-playfair text-2xl font-bold leading-none">+20</p>
              <p className="font-lato text-xs font-semibold mt-1 tracking-wide">años de experiencia</p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
              Nuestra historia
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-negro mb-4 leading-tight">
              Un rincón con
              <br />
              <span className="italic text-vino">alma propia</span>
            </h2>
            <div className="w-16 h-1 bg-dorado mb-8" />
            <p className="font-lato text-gray-600 text-lg leading-relaxed mb-6">
              Fundado en el corazón de la ciudad, Restaurante El Rincón nació de
              una pasión por recuperar los sabores de la cocina española más
              auténtica. Cada plato que servimos es el fruto de décadas de
              tradición familiar y el amor por los ingredientes de temporada.
            </p>
            <p className="font-lato text-gray-600 text-lg leading-relaxed mb-10">
              Nuestro chef, formado en las mejores cocinas del país, regresa a
              sus raíces para ofrecerte una experiencia gastronómica que combina
              la receta de siempre con una presentación contemporánea. Aquí, la
              cocina de la abuela se sirve con la elegancia que merece.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-playfair text-3xl font-bold text-dorado">{s.num}</p>
                  <p className="font-lato text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
