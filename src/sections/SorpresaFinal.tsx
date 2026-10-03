import { motion } from "framer-motion"

function SorpresaFinal() {
  return (
    <section
      id="sorpresa-final"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-24 overflow-hidden relative"
    >

      {/* Girasoles flotando */}

      <motion.div
        className="absolute left-[8%] top-[15%] text-5xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        🌻
      </motion.div>


      <motion.div
        className="absolute right-[10%] top-[25%] text-4xl"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        🌻
      </motion.div>


      <motion.div
        className="absolute left-[15%] bottom-[18%] text-4xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🌻
      </motion.div>


      <motion.div
        className="absolute right-[15%] bottom-[15%] text-5xl"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        🌻
      </motion.div>


      {/* Estrellas */}

      <motion.div
        className="absolute left-[25%] top-[12%] text-2xl"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>


      <motion.div
        className="absolute right-[25%] top-[18%] text-2xl"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>


      {/* Contenido principal */}

      <div className="relative z-10 text-center max-w-3xl">

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="text-7xl"
        >
          🌻
        </motion.div>


        <motion.p
          className="mt-8 text-yellow-400 tracking-[0.3em] font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Y ESTE ES MI ÚLTIMO MENSAJE
        </motion.p>


        <motion.h2
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          Feliz cumpleaños,
          <br />
          Mi Amor ❤️
        </motion.h2>


        <motion.p
          className="mt-10 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          Espero que este pequeño espacio te haya recordado
          <br className="hidden md:block" />
          lo especial que eres para mí.
        </motion.p>


        <motion.p
          className="mt-6 text-2xl text-yellow-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.3,
            duration: 1,
          }}
        >
          Te amo, mi princesita, mi cachetonsita. ❤️
        </motion.p>


        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          <p className="text-gray-400">
            03 • 11 • 2005
          </p>

          <p className="mt-2 text-gray-500">
            🌻 Un cumpleaños más de muchos que espero celebrar contigo.
          </p>
        </motion.div>


        {/* Volver al inicio */}

        <motion.button
          className="mt-12 px-8 py-4 rounded-full border border-yellow-400 text-yellow-400 font-semibold"
          whileHover={{
            scale: 1.08,
            backgroundColor: "rgba(250, 204, 21, 0.1)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
        >
          Volver al inicio ↑
        </motion.button>

      </div>

    </section>
  )
}

export default SorpresaFinal