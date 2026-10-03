import { motion } from "framer-motion"


function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-50 to-green-100 relative overflow-hidden">
      <motion.div
        className="absolute left-[10%] top-[20%] text-4xl"
        animate={{
        y: [0, -15, 0],
        rotate: [0, 8, -8, 0],
        }}
        transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        }}
      >
  🌻
</motion.div>


<motion.div
  className="absolute right-[10%] top-[30%] text-3xl"
  animate={{
    y: [0, 12, 0],
    rotate: [0, -8, 8, 0],
  }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  🌻
</motion.div>


<motion.div
  className="absolute left-[18%] bottom-[18%] text-2xl"
  animate={{
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1, 0.8],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
>
  ✨
</motion.div>


      <motion.div
      className="absolute right-[20%] bottom-[20%] text-2xl"
      animate={{
      opacity: [0.3, 0.8, 0.3],
      scale: [0.8, 1, 0.8],
      }}
      transition={{
      duration: 2.5,
      repeat: Infinity,
      }}
>
  ✨
      </motion.div>

      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 8, -8, 0],
          }}
          transition={{
          opacity: {
          duration: 1,
          },
          scale: {
          duration: 1,
          type: "spring",
          },
          rotate: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          },
          }}
        >
          🌻
        </motion.div>


        <motion.h1
          className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-600 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
          delay: 0.6,
          duration: 0.8,
          }}
        >
          Feliz cumpleaños Mi Doctorsita ✨
        </motion.h1>


       <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
          delay: 1.1,
          duration: 0.8,
          }}
        >
          Naciste un 03 de noviembre de 2005 🌻
        </motion.p>


        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
          delay: 1.5,
          duration: 0.8,
          }}
        >
          Un pequeño espacio creado especialmente para ti, espero que te guste :3
        </motion.p>


        <motion.button
          className="mt-10 px-8 py-4 rounded-full bg-yellow-500 text-white font-semibold shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
              document
                .getElementById("historia")
                ?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Abrir sorpresa 🌻
        </motion.button>


      </motion.div>

    </section>
  )
}

export default Hero