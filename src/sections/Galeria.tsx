import { motion } from "framer-motion"

const fotos = [
  {
    id: 1,
    imagen: `${import.meta.env.BASE_URL}recuerdo1.jpg`,
    titulo: "Nuestro primer recuerdo",
    descripcion: "Un momento que siempre voy a guardar conmigo ❤️",
  },
  {
    id: 2,
    imagen: `${import.meta.env.BASE_URL}recuerdo2.jpg`,
    titulo: "Un día contigo",
    descripcion: "Porque incluso los momentos simples son especiales contigo.",
  },
  {
    id: 3,
    imagen: `${import.meta.env.BASE_URL}recuerdo3.jpg`,
    titulo: "Un recuerdo más",
    descripcion: "Otro pedacito de nuestra historia 🌻",
  },
  {
    id: 4,
    imagen: `${import.meta.env.BASE_URL}recuerdo4.jpg`,
    titulo: "Momentos juntos",
    descripcion: "De esos momentos que quisiera repetir muchas veces.",
  },
  {
    id: 5,
    imagen: `${import.meta.env.BASE_URL}recuerdo5.jpg`,
    titulo: "Siempre nosotros",
    descripcion: "Y todavía quedan muchísimos recuerdos por crear.",
  },
  {
    id: 6,
    imagen: `${import.meta.env.BASE_URL}recuerdo6.jpg`,
    titulo: "Te Rezo?🤤",
    descripcion: "🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️",
  },
]

function Galeria() {
  return (
    <section id="galeria" className="bg-yellow-50 py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* Título */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="text-yellow-600 text-lg font-semibold">
            ALGUNOS DE NUESTROS MOMENTOS
          </p>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestros recuerdos 📸
          </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          No necesito tener miles de fotos para recordar
          nuestros momentos, porque cada instante contigo
          tiene un lugar especial en mi corazón.
        </motion.p>

        </motion.div>


        {/* Galería */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {fotos.map((foto, index) => (

            <motion.div
              key={foto.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* Foto */}

            <div className="h-80 overflow-hidden bg-yellow-50 border-2 border-yellow-300 rounded-2xl flex items-center justify-center p-2">

              <img
                src={foto.imagen}
                alt={foto.titulo}
                className="w-full h-full object-contain rounded-xl"
              />

            </div>


              {/* Información */}

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-gray-800">
                  {foto.titulo}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {foto.descripcion}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

            </div>

      {/* Botón para continuar */}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >

        <p className="text-gray-500 text-lg">
          Y aunque estos recuerdos son especiales...
        </p>

        <p className="mt-2 text-gray-700 text-xl">
          todavía hay algo que quiero decirte.
        </p>

        <motion.button
          className="mt-7 px-8 py-4 rounded-full bg-gray-800 text-white text-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document
              .getElementById("carta")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Continuar hacia mi carta 💌
        </motion.button>

      </motion.div>

    </section>
  )
}

export default Galeria