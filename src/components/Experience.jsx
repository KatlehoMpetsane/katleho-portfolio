import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase />,
    title: "Web Developer & Technical Support",
    company: "Wao Host",
    period: "Recent Experience",
    description:
      "Developed and maintained client websites using modern web technologies while providing technical support for hosting environments and web applications.",
    responsibilities: [
      "Developed responsive websites for clients",
      "Managed website hosting using cPanel",
      "Configured DNS records and SSL certificates",
      "Resolved website and email issues",
      "Maintained WordPress websites",
      "Improved website performance and SEO",
      "Provided technical support to clients",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "cPanel",
      "DNS",
      "SSL",
    ],
  },

  {
    icon: <FaGraduationCap />,
    title: "Advanced Diploma in Information Technology",
    company: "Vaal University of Technology",
    period: "Completed",
    description:
      "Completed an Advanced Diploma in Information Technology, strengthening my knowledge in software engineering, business analysis, databases and systems development.",
    responsibilities: [
      "Software Development",
      "Business Analysis",
      "Database Management",
      "Systems Analysis",
      "Research Project",
    ],
    technologies: [
      "Java",
      "Python",
      "SQL",
      "Azure",
      "Git",
    ],
  },

  {
    icon: <FaLaptopCode />,
    title: "Diploma in Information Technology",
    company: "Vaal University of Technology",
    period: "Completed",
    description:
      "Built a strong foundation in programming, web development, networking, databases and information systems through practical projects.",
    responsibilities: [
      "Web Development",
      "Programming",
      "Database Design",
      "Information Systems",
      "Software Testing",
    ],
    technologies: [
      "Java",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-cyan-500 ml-6">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="mb-16 ml-10 relative"
            >

              <div className="absolute -left-16 top-1 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">
                {exp.icon}
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 hover:shadow-cyan-500/30 hover:shadow-xl transition">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.title}
                </h3>

                <h4 className="text-lg mt-2">
                  {exp.company}
                </h4>

                <p className="text-gray-400 mb-5">
                  {exp.period}
                </p>

                <p className="text-gray-300 leading-8">
                  {exp.description}
                </p>

                <h5 className="font-semibold mt-8 mb-3 text-cyan-400">
                  Key Responsibilities
                </h5>

                <ul className="list-disc list-inside text-gray-300 space-y-2">

                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}

                </ul>

                <div className="flex flex-wrap gap-3 mt-8">

                  {exp.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-cyan-500 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;