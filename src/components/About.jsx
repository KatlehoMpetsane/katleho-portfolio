import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCloud,
  FaCertificate,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Information Technology Graduate
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I am an Information Technology graduate from the
              Vaal University of Technology with practical
              experience in web development, software development,
              technical support and cloud technologies.
            </p>

            <p className="text-gray-300 leading-8">
              My experience includes developing websites,
              maintaining hosting environments, configuring DNS
              and SSL certificates, supporting clients,
              troubleshooting technical issues and delivering
              digital solutions through my work at Wao Host.
            </p>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition">

              <FaGraduationCap className="text-cyan-400 text-4xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Education
              </h3>

              <p className="text-gray-300">
                🎓 Postgraduate Diploma in Information Technology
              </p>

              <p className="text-gray-300 mt-2">
                🎓 Advanced Diploma in Information Technology
              </p>

              <p className="text-gray-300 mt-2">
                🎓 Diploma in Information Technology
              </p>

              <p className="text-gray-400 mt-4">
                Vaal University of Technology
              </p>

            </div>

            <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition">

              <FaCertificate className="text-cyan-400 text-4xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Certifications
              </h3>

              <p className="text-gray-300">
                Microsoft Azure AZ-900
              </p>

              <p className="text-gray-300 mt-2">
                Microsoft AI-900
              </p>

              <p className="text-gray-300 mt-2">
                Microsoft AZ-204
              </p>

            </div>

            <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition">

              <FaLaptopCode className="text-cyan-400 text-4xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Specialities
              </h3>

              <p className="text-gray-300">
                ✔ Web Development
              </p>

              <p className="text-gray-300 mt-2">
                ✔ IT Support
              </p>

              <p className="text-gray-300 mt-2">
                ✔ Website Hosting
              </p>

              <p className="text-gray-300 mt-2">
                ✔ Cloud Computing
              </p>

            </div>

          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-24"
        >

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-cyan-500 transition">
            <h2 className="text-5xl font-bold">3+</h2>
            <p className="mt-3">Microsoft Certifications</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-cyan-500 transition">
            <h2 className="text-5xl font-bold">3+</h2>
            <p className="mt-3">Professional Websites</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-cyan-500 transition">
            <h2 className="text-5xl font-bold">15+</h2>
            <p className="mt-3">Technical Skills</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-cyan-500 transition">
            <h2 className="text-5xl font-bold">100%</h2>
            <p className="mt-3">Commitment</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;