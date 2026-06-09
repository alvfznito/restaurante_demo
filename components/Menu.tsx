import Image from "next/image";

const dishes = [
  {
    name: "Jamón Ibérico de Bellota",
    description:
      "Selección de las mejores piezas de jamón ibérico 100% bellota, cortado a cuchillo con maestría.",
    price: "18€",
    image:
      "https://images.unsplash.com/photo-1559628233-100c798642d3?w=600&q=80&fit=crop&crop=center",
    tag: "Especialidad",
  },
  {
    name: "Croquetas de la Abuela",
    description:
      "Cremosas croquetas de jamón ibérico y bechamel artesanal. Receta familiar de toda la vida.",
    price: "8€",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop&crop=center",
    tag: null,
  },
  {
    name: "Cocido Completo",
    description:
      "El cocido madrileño de siempre: garbanzos, verduras y los mejores cortes de carne de ternera y cerdo.",
    price: "16€",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop&crop=center",
    tag: "Tradicional",
  },
  {
    name: "Secreto Ibérico a la Brasa",
    description:
      "Tierno secreto ibérico marcado a la brasa de encina, con sal Maldon y romero fresco del jardín.",
    price: "19€",
    image:
      "https://images.unsplash.com/photo-1544025162-d76538b2ed4e?w=600&q=80&fit=crop&crop=center",
    tag: "Especialidad",
  },
  {
    name: "Torrija Caramelizada",
    description:
      "Nuestra versión de la torrija tradicional con helado de vainilla artesanal y caramelo salado.",
    price: "6€",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80&fit=crop&crop=center",
    tag: null,
  },
  {
    name: "Tabla de Quesos",
    description:
      "Selección de quesos artesanales españoles acompañados de miel de flores y frutos secos de temporada.",
    price: "12€",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80&fit=crop&crop=center",
    tag: null,
  },
];

export default function Menu() {
  return (
    <section id="carta" className="bg-crema py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-dorado tracking-[0.3em] text-xs uppercase mb-4">
            Nuestra selección
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-negro mb-4">
            Carta Destacada
          </h2>
          <div className="w-16 h-1 bg-dorado mx-auto mb-4" />
          <p className="font-lato text-gray-500 text-lg max-w-xl mx-auto">
            Ingredientes de temporada, recetas de siempre. Cada bocado cuenta la historia de nuestra tierra.
          </p>
        </div>

        {/* Grid platos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {dish.tag && (
                  <span className="absolute top-4 left-4 bg-dorado text-negro text-xs font-lato font-bold px-3 py-1 rounded">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-playfair text-xl font-bold text-negro leading-tight">
                    {dish.name}
                  </h3>
                  <span className="font-playfair text-2xl font-bold text-dorado shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="font-lato text-gray-500 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#reservar"
            className="inline-block bg-dorado text-negro px-10 py-4 font-lato font-bold text-base rounded hover:bg-dorado/90 transition-colors"
          >
            Reservar mesa
          </a>
        </div>
      </div>
    </section>
  );
}
