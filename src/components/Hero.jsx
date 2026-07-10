import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"className="min-h-screen bg-slate-950 flex items-center px-8 pt-24"
      
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Katleho
            <span className="text-cyan-400"> Mpetsane</span>
          </h1>

          <h2 className="text-3xl mt-8 text-cyan-400 font-semibold h-12">

            <Typewriter
              words={[
                "Information Technology Graduate",
                "Web Developer",
                "IT Support Specialist",
                "Azure Certified",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />

          </h2>

          <p className="text-gray-400 mt-10 leading-8 text-lg max-w-xl">

            Passionate about building modern web applications,
            solving technical problems, and delivering innovative
            digital solutions through software development,
            cloud technologies, and IT support.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="/Katleho_KM_Mpetsane_cv.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg shadow-cyan-500/40 hover:scale-105 transition duration-300"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-white hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src="/images/profile.jpg"
            alt="Katleho Mpetsane"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 hover:scale-105 transition duration-500"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;