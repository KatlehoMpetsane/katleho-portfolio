import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaPython,
  FaGitAlt,
  FaWordpress,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "WordPress",
    icon: <FaWordpress className="text-blue-500 text-5xl" />,
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-5xl" />,
    level: "Intermediate",
  },
  {
    name: "Microsoft Azure",
    icon: <FaMicrosoft className="text-blue-400 text-5xl" />,
    level: "Certified",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-6"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Throughout my academic journey and professional experience,
          I have developed a diverse set of technical skills across
          software development, cloud computing, databases and web technologies.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-3 hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300"
            >

              <div className="flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {skill.name}
              </h3>

              <p className="text-cyan-400 mt-4">
                {skill.level}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;