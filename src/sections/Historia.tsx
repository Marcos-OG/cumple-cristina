import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

function Historia() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 70%", "end 40%"],
  })

  const progreso = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
  })


  const momentos = [

    {
      icono: "🌱",
      capitulo: "CAPÍTULO 1",
      titulo: "Cuando solo éramos compañeros",
      fecha: "2016",
      texto:
        "Nos conocimos en primero de secundaria. En ese momento solo éramos dos personas que disfrutaban molestarse y pasar el rato juntos, sin imaginar que esa pequeña historia tendría un significado tan grande."
    },


    {
      icono: "✨",
      capitulo: "CAPÍTULO 2",
      titulo: "Algo empezó a cambiar",
      fecha: "2022",
      texto:
        "Llegó quinto de secundaria y poco a poco empezamos a acercarnos más. Las conversaciones fueron diferentes y comenzamos a conocernos de una manera especial."
    },


    {
      icono: "🍗",
      capitulo: "CAPÍTULO 3",
      titulo: "Nuestro primer momento especial",
      fecha: "Nuestra primera salida",
      texto:
        "Nuestra primera salida al mall para comer KFC puede parecer algo sencillo, pero para mí fue un momento que nunca olvidaré. Fue uno de esos días que guardo con mucho cariño."
    },


    {
      icono: "❤️",
      capitulo: "CAPÍTULO 4",
      titulo: "Nuestra historia continúa",
      fecha: "Hoy",
      texto:
        "Después llegaron muchos momentos juntos: comidas, películas, playa, universidad y experiencias que hicieron crecer nuestra historia. Y lo más bonito es saber que todavía quedan muchas páginas por escribir."
    }

  ]



  return (

    <section
      id="historia"
      className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-50 py-24 px-6 overflow-hidden"
    >

      <div className="max-w-4xl mx-auto">


        {/* TITULO */}

        <motion.div
          className="text-center"
          initial={{
            opacity:0,
            y:40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:1
          }}
        >

          <p className="text-yellow-600 text-lg font-semibold tracking-wider">
            NUESTRA HISTORIA
          </p>


          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-800">
            Un camino que escribimos juntos 🌻
          </h2>


          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Algunas historias empiezan sin que nos demos cuenta...
            y esta fue la nuestra.
          </p>


        </motion.div>



        {/* CAMINO */}

        <div ref={timelineRef}  className="relative mt-20">


          {/* Línea vertical */}

          {/* Línea base */}

        <div
          className="
            absolute
            left-8
            sm:left-1/2
            top-0
            bottom-0
            w-1
            bg-yellow-100
            transform
            sm:-translate-x-1/2
            z-0
          "
        />


        {/* Línea que se ilumina */}

        <motion.div
          className="
            absolute
            left-8
            sm:left-1/2
            top-0
            bottom-0
            w-1
            bg-yellow-400
            transform
            sm:-translate-x-1/2
            origin-top
            z-0
          "
          style={{
            scaleY: progreso,
          }}
        />



          {momentos.map((momento,index)=>(


            <motion.div

              key={index}

              className={`
                relative flex items-start mb-20
                ${
                  index % 2 === 0
                  ? "sm:flex-row"
                  : "sm:flex-row-reverse"
                }
              `}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true,
                amount:0.3
              }}

              transition={{
                duration:0.8
              }}

            >



              {/* ICONO */}

              <motion.div
                className="
                  absolute
                  left-8
                  sm:left-1/2
                  transform
                  -translate-x-1/2
                  w-16
                  h-16
                  rounded-full
                  bg-yellow-400
                  flex
                  items-center
                  justify-center
                  text-3xl
                  shadow-lg
                  z-10
                "
                initial={{
                  scale: 0.7,
                  opacity: 0.5,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                }}
              >
                <motion.span
                  animate={
                    index === 3
                      ? {
                          scale: [1, 1.15, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    repeat: index === 3 ? Infinity : 0,
                  }}
                >
                  {momento.icono}
                </motion.span>
              </motion.div>




              {/* ESPACIO */}

              <div className="hidden sm:block sm:w-1/2">
              </div>




              {/* TARJETA */}

              <div
                className="
                ml-24
                sm:ml-0
                sm:w-1/2
                sm:px-8
                "
              >


                <motion.div

                  className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  border
                  border-yellow-100
                  p-7
                  "

                  whileHover={{
                    y:-5
                  }}

                >


                  <p className="text-yellow-600 font-semibold text-sm tracking-wider">
                    {momento.capitulo}
                  </p>


                  <h3 className="mt-3 text-2xl font-bold text-gray-800">
                    {momento.titulo}
                  </h3>


                  <p className="mt-2 text-yellow-600 font-semibold">
                    {momento.fecha}
                  </p>


                  <p className="mt-5 text-gray-700 leading-relaxed">
                    {momento.texto}
                  </p>


                </motion.div>


              </div>


            </motion.div>


          ))}


        </div>



        {/* FRASE FINAL */}

        <motion.div

          className="text-center mt-10"

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          viewport={{
            once:true
          }}

        >

          <p className="text-xl text-gray-600 italic">
            "Y pensar que todo comenzó con simples bromas
            y terminó convirtiéndose en una historia que amo."
          </p>


          <p className="mt-5 text-3xl">
            🌻❤️
          </p>


        </motion.div>


      </div>


    </section>

  )

}


export default Historia