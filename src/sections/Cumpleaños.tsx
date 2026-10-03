import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Cumpleaños() {
  const [velasEncendidas, setVelasEncendidas] = useState(false)
  const [deseoPedido, setDeseoPedido] = useState(false)

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-50 flex items-center justify-center px-6 py-24 overflow-hidden">

      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        {/* ENCABEZADO */}

        <p className="text-yellow-600 font-semibold tracking-widest">
          UN PEQUEÑO JUEGO PARA TI
        </p>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Ayúdame a preparar tu cumpleaños 🎂
        </h2>

        <p className="mt-6 mb-10 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Antes de continuar, tenemos que preparar algo...
        </p>


        {/* TORTA */}

            <motion.div
            className="relative flex justify-center mt-16"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{
                opacity: 1,
                scale: deseoPedido ? [1, 1.08, 1] : 1,
                y: 0,
            }}
            transition={{
                opacity: {
                duration: 0.8,
                },
                scale: {
                duration: 0.8,
                },
                y: {
                duration: 0.8,
                },
            }}
            >

            {/* Brillos */}

            {deseoPedido && (
                <>
                <motion.span
                    className="absolute -left-8 top-4 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    y: [-5, -25, -45],
                    }}
                    transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    }}
                >
                    ✨
                </motion.span>

                <motion.span
                    className="absolute -right-8 top-10 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    y: [0, -20, -40],
                    }}
                    transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                    }}
                >
                    ⭐
                </motion.span>
                </>
            )}


            {/* Velas */}

            <div className="absolute -top-8 flex gap-5">

                {[1, 2, 3].map((vela) => (

                <motion.div
                    key={vela}
                    className="relative text-3xl"
                    animate={
                    velasEncendidas
                        ? {
                            y: [0, -3, 0],
                        }
                        : {}
                    }
                    transition={{
                    duration: 1,
                    repeat: velasEncendidas ? Infinity : 0,
                    }}
                >

                    {velasEncendidas && (

                    <motion.span
                        className="absolute -top-5 left-1/2 -translate-x-1/2 text-xl"
                        animate={{
                        scale: [0.8, 1.15, 0.8],
                        opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        }}
                    >
                        🔥
                    </motion.span>

                    )}

                    🕯️

                </motion.div>

                ))}

            </div>


            {/* Torta */}

            <motion.div
                className="text-[120px] sm:text-[140px] leading-none"
                animate={{
                rotate: velasEncendidas
                    ? [0, -2, 2, -1, 1, 0]
                    : 0,
                }}
                transition={{
                duration: 2,
                repeat: velasEncendidas ? Infinity : 0,
                ease: "easeInOut",
                }}
            >
                🎂
            </motion.div>

            </motion.div>


        {/* MENSAJE */}

        <AnimatePresence mode="wait">

          {!velasEncendidas && (

            <motion.p
              key="encender"
              className="mt-8 text-2xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Primero tenemos que encender las velas.
            </motion.p>

          )}


          {velasEncendidas && !deseoPedido && (

            <motion.div
              key="deseo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >

              <p className="mt-8 text-2xl text-gray-700">
                Ahora cierra los ojos y pide un deseo...
              </p>

              <motion.button
                className="mt-8 px-8 py-4 rounded-full bg-yellow-500 text-white text-lg font-semibold shadow-lg"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setDeseoPedido(true)}
              >
                ✨ Pedir mi deseo
              </motion.button>

            </motion.div>

          )}


          {deseoPedido && (

            <motion.div
              key="final"
              className="relative mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >

              {/* ESTRELLAS */}

              <div className="absolute inset-0 pointer-events-none overflow-hidden">

            <motion.span
                className="absolute left-[10%] top-[20%] text-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [30, -40, -80],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.1,
                }}
            >
                ✨
            </motion.span>


            <motion.span
                className="absolute left-[25%] top-[40%] text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [20, -50, -100],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                }}
            >
                ⭐
            </motion.span>


            <motion.span
                className="absolute left-[45%] top-[25%] text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [20, -50, -100],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: 0.8,
                }}
            >
                ✨
            </motion.span>


            <motion.span
                className="absolute right-[25%] top-[35%] text-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [30, -40, -90],
                }}
                transition={{
                    duration: 2.7,
                    repeat: Infinity,
                    delay: 0.3,
                }}
            >
                ⭐
            </motion.span>


            <motion.span
                className="absolute right-[10%] top-[20%] text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: [20, -50, -100],
                }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: 1,
                }}
            >
                ✨
             </motion.span>

            </div>
            
              {/* MENSAJE */}

                <motion.div
                     className="mb-8"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                         delay: 0.3,
                         type: "spring",
                        }}
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                    ✨ Deseo pedido
                    </span>
                </motion.div>

              <motion.p
                className="text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
              >
                Espero que tu deseo se cumpla.
                <br />
                Aunque yo ya pedí el mío...
              </motion.p>


              <motion.p
                className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                }}
              >
                "...seguir celebrando muchos
                cumpleaños contigo." 🌻
              </motion.p>


              <motion.div
                className="mt-8 text-5xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 3.5,
                  type: "spring",
                }}
              >
                🌻
              </motion.div>

              <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 4.5,
                    duration: 1,
                    }}
                >
                    <p className="text-lg text-gray-500">
                        🎁 Sorpresa desbloqueada
                    </p>

                    <motion.button
                        className="mt-5 px-8 py-4 rounded-full bg-gray-800 text-white text-lg font-semibold shadow-lg"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document
                            .getElementById("galeria")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        Continuar →
                    </motion.button>
                </motion.div>

            </motion.div>

          )}

        </AnimatePresence>


        {/* BOTÓN ENCENDER */}

        {!velasEncendidas && (

          <motion.button
            className="mt-10 px-8 py-4 rounded-full bg-yellow-500 text-white text-lg font-semibold shadow-lg"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setVelasEncendidas(true)}
          >
            Encender velas 🕯️
          </motion.button>

        )}

      </motion.div>

    </section>
  )
}

export default Cumpleaños