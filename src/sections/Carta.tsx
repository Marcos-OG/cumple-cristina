import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const CONTRASENAS = ["Neczet", "neczet"]

function Carta() {

  const [cartaAbierta, setCartaAbierta] = useState(false)
  const [contrasena, setContrasena] = useState("")
  const [intentoFallido, setIntentoFallido] = useState(false)
  const [desbloqueando, setDesbloqueando] = useState(false)

  return (
    <section id="carta" className="min-h-screen bg-white py-24 px-6"
    >

      <div className="max-w-4xl mx-auto">

        <AnimatePresence mode="wait">

  {!cartaAbierta && (

  <motion.div
    className="min-h-[70vh] flex items-center justify-center px-6"
    initial={{
      opacity: 0,
      scale: 0.9,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.8,
    }}
  >

    <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-center">

      {/* SOBRE */}

      <motion.div
        className="text-7xl"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💌
      </motion.div>


      {/* TÍTULO */}

      <h2 className="mt-8 text-4xl sm:text-5xl font-bold text-gray-800">
        Una carta para ti
      </h2>


      <p className="mt-5 text-lg text-gray-600 leading-relaxed">
        Hay algo aquí que solo tú puedes abrir...
      </p>
      <AnimatePresence>
        {desbloqueando && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-50 px-6"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <motion.div
              className="text-center"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <motion.div
                className="text-7xl"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                🔓
              </motion.div>


              <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-gray-800">
                Contraseña correcta
              </h2>


              <p className="mt-4 text-lg text-gray-600">
                Sabía que encontrarías la forma...
              </p>


              <motion.div
                className="mt-8 text-5xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
              >
                💌
              </motion.div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      {/* CONTRASEÑA */}

      <div className="mt-8">

        <input
          type="password"
          value={contrasena}
          onChange={(e) => {
            setContrasena(e.target.value)
            setIntentoFallido(false)
          }}
          placeholder="Escribe la contraseña"
          className="w-full px-5 py-4 rounded-2xl border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center text-lg"
        />


        <motion.button
          className="mt-5 w-full px-8 py-4 rounded-full bg-yellow-500 text-white font-semibold shadow-lg"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => {

            if (CONTRASENAS.includes(contrasena)) {
              setIntentoFallido(false)
              setDesbloqueando(true)

              setTimeout(() => {
                setDesbloqueando(false)
                setCartaAbierta(true)
              }, 2200)

            } else {

              setIntentoFallido(true)

            }

          }}
        >
          {intentoFallido
            ? "Intentar nuevamente 💌"
            : "Abrir mi carta 💌"
          }
        </motion.button>

      </div>


      {/* MENSAJE DE ERROR */}

      <AnimatePresence>

        {intentoFallido && (

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-8"
          >

            <p className="text-red-500 font-semibold text-lg">
              ❌ Parece que esa no era...
            </p>


            <motion.p
              className="mt-3 text-yellow-600 font-bold text-2xl"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              ✨ Una pista
            </motion.p>


            <p className="mt-2 text-gray-500">
              Quizá esto pueda ayudarte.
            </p>


            {/* IMAGEN DE LA PISTA */}

            <motion.div
              className="mt-6 rounded-2xl overflow-hidden shadow-lg"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
            >

              <img
                src={`${import.meta.env.BASE_URL}pista.jpg`}
                alt="Pista"
                className="w-full max-h-80 object-cover"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  </motion.div>

)}

</AnimatePresence>


        {/* Carta */}
        {cartaAbierta && (

        <motion.div 
            className="bg-yellow-50 rounded-3xl shadow-xl p-8 md:p-14"
            initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
            }}
            animate={{
                 opacity: 1,
                 scale: 1,
                 y: 0,
            }}
            transition={{
                 duration: 1,
                ease: "easeOut",
             }}
>

          {/* Encabezado */}
          <motion.div
             className="text-center mb-6 text-3xl"
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
                delay: 0.5,
                type: "spring",
             }}
>
        🌻 ❤️ 🌻
</motion.div>
          
          <div className="text-center mb-12">

            <p className="text-2xl font-semibold text-yellow-700">
              Para mi amor,
            </p>

            <p className="text-3xl font-bold text-gray-800 mt-2">
              mi princesita, mi cachetonsita ❤️
            </p>

          </div>


          {/* Carta */}
          <div className="space-y-7 text-gray-700 text-lg leading-relaxed">

            <p>
              Hoy es un día muy especial porque nació una de las personas
              más importantes de mi vida: tú. Y aunque podría simplemente
              decirte "feliz cumpleaños, mi amor" y desearte todo lo bonito
              del mundo, siento que tu cumpleaños merece mucho más que unas
              cuantas palabras.
            </p>


            <p>
              Quiero aprovechar este día para recordarte lo mucho que te amo,
              lo importante que eres para mí y todo lo que significa para mí
              haber coincidido contigo en esta vida.
            </p>


            <p>
              A veces me pongo a pensar en cómo empezó todo y me da un poco
              de risa. Nos conocemos desde primero de secundaria y, siendo
              sinceros, creo que nuestra especialidad siempre fue fastidiarnos
              jajaja.
            </p>


            <p>
              Desde aquellos primeros años siempre encontrábamos alguna manera
              de molestarnos, sin imaginar que con el tiempo esa persona a la
              que tanto fastidiaba terminaría convirtiéndose en el amor de mi vida.
            </p>


            <p>
              Y luego llegó quinto de secundaria, ese 2022 que ahora recuerdo
              con muchísimo cariño. Poco a poco empezamos a acercarnos más,
              a hablar más y a sentir algo diferente, hasta que llegó aquella
              primera salida al mall para comer KFC.
            </p>


            <p>
              Puede parecer algo tan simple, pero para mí fue un momento muy
              especial. Todavía recuerdo lo nervioso que estaba, aunque
              seguramente intentaba disimularlo.
            </p>


            <p>
              Desde entonces hemos vivido muchas cosas juntos. Hemos ido al
              mall, hemos comido, visto películas, ido a la playa, te he ido
              a recoger a tu universidad y hemos compartido momentos que
              quizá para otras personas parecerían pequeños, pero que para
              mí significan muchísimo simplemente porque estaba contigo.
            </p>


            <p>
              No necesito que siempre pase algo extraordinario para ser feliz
              contigo, muchas veces simplemente estar a tu lado, conversar,
              reírnos o compartir cualquier momento hace que mi día sea especial.
            </p>



            <p>
              También hemos pasado por momentos difíciles y no quiero escribir
              esta carta fingiendo que todo siempre fue perfecto, porque no lo fue.
            </p>



            <p>
              Sé que cometí errores y que tuvimos momentos en los que nos
              alejamos por mis inseguridades y también por situaciones relacionadas
              con nuestros estudios y nuestras vidas.
            </p>


            <p>
              Pero algo que valoro muchísimo de nosotros es que, a pesar de todo,
              pudimos volver a hablar, entendernos, solucionar nuestros problemas
              y darnos otra oportunidad.
            </p>


            <p>
              Todo eso nos ayudó a crecer, a conocernos mejor y a valorar mucho
              más lo que tenemos. Y sinceramente, siento que ahora estamos más
              felices que nunca.
            </p>


            <p>
              Amorcito, quiero que sepas que admiro muchísimo la persona que eres.
              Admiro lo perseverante que eres, la inteligencia que tienes y la
              manera en la que te esfuerzas por dar lo mejor de ti en tu carrera.
            </p>


            <p>
              Sé que Medicina no es fácil y sé todo el esfuerzo que haces para
              seguir adelante, incluso cuando las cosas se ponen pesadas, y quiero
              que sepas que estoy muy orgulloso de ti.
            </p>


            <p>
              También admiro tu forma de ser, la manera en que me tratas y todos
              esos pequeños detalles que hacen que seas tú. Y sí, también tengo
              que decirlo: eres demasiado bonita.
            </p>


            <p>
              Me encanta tu sonrisa y podría intentar explicar exactamente qué
              fue lo que hizo que me enamorara de ti, pero la verdad es que no
              sé cómo explicarlo. Simplemente pasó.
            </p>


            <p>
              Me enamoré de ti y mientras más te conocía, más razones encontraba
              para quererte.
            </p>


            <p>
              Hoy puedo decirte con todo mi corazón que te amo muchísimo.
              Te amo sabiendo que somos dos personas que todavía estamos
              aprendiendo, creciendo y construyendo nuestras vidas.
            </p>


            <p>
              Quiero seguir creciendo contigo, verte terminar tu carrera y
              cumplir todas esas metas que tienes, terminar también la mía,
              conseguir nuestros sueños, trabajar, ganar dinero, viajar juntos
              y conocer lugares que todavía ni siquiera imaginamos.
            </p>


            <p>
              Quiero que algún día podamos mirar atrás y decir:
              "Mira todo lo que conseguimos juntos".
            </p>


            <p>
              Quiero vivir contigo, tener nuestro propio hogar, nuestras
              pequeñas costumbres y una vida que hayamos construido entre
              los dos.
            </p>


            <p>
              Y sí, también quiero esa familia que alguna vez hemos imaginado,
              con nuestros dos hijos, una niña y un niño, y poder mirar todo
              lo que construimos juntos sabiendo que empezamos siendo dos
              chicos que simplemente se fastidiaban en el colegio.
            </p>


            <p>
              No sé exactamente cómo será nuestro futuro ni qué cosas tendremos
              que enfrentar, pero hay algo que sí sé: quiero que estés en él.
            </p>


            <p>
              Quiero seguir teniendo citas contigo, seguir llevándote a comer,
              seguir viendo películas, seguir yendo a la playa, seguir
              recogiéndote de la universidad y seguir creando recuerdos contigo,
              aunque algún día nuestros planes cambien por otros nuevos.
            </p>


            <p>
              Porque al final, más que el lugar o lo que hagamos, lo que hace
              especial cada momento es estar contigo.
            </p>


            <p>
              En este cumpleaños solo quiero desearte todo lo bonito que mereces.
              Espero que puedas cumplir cada una de tus metas, que sigas creciendo,
              que nunca pierdas esa perseverancia que tanto admiro de ti y que
              siempre tengas motivos para sonreír.
            </p>


            <p>
              Y cuando tengas días difíciles, quiero que recuerdes que tienes
              a alguien que cree en ti y que siempre va a estar orgulloso de
              verte luchar por tus sueños.
            </p>


            <p>
              Feliz cumpleaños, mi amor. Eres una de las mejores cosas que me
              ha pasado en la vida y me hace feliz saber que, después de tantos
              años, seguimos aquí, construyendo nuestra historia.
            </p>


            <p>
              Te amo con todo mi corazón, mi princesita, mi cachetonsita,
              y espero que este sea solamente uno de los muchos cumpleaños
              que todavía podamos celebrar juntos.
            </p>

          </div>


          {/* Firma */}
          <motion.div
            className="mt-14 pt-8 border-t border-yellow-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >

            <p className="text-xl text-gray-600">
              Con todo mi amor,
            </p>

            <p className="mt-2 text-2xl font-bold text-yellow-700">
              Tu ojitos bonitos ❤️
            </p>

          </motion.div>

          <motion.div
                 className="mt-10"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{
                     delay: 0.5,
                    duration: 1,
                }}
          >

             <p className="text-gray-500 text-lg">
                Pero todavía falta una última cosa...
            </p>

            <motion.button
                className="mt-6 px-8 py-4 rounded-full bg-gray-800 text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                document
                .getElementById("sorpresa-final")
                ?.scrollIntoView({ behavior: "smooth" })
                }}
            >
                🎁 Ver mi última sorpresa
            </motion.button>

</motion.div>

        </motion.div>
        )}
      </div>

    </section>
  )
}

export default Carta