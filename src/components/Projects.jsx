import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
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
          My Projects
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Here are some of the websites and digital solutions I have developed
          and contributed to during my academic and professional journey.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          <ProjectCard
            image="/projects/kiboko.png"
            title="Kiboko Shuttles"
            description="A professional transportation company website featuring responsive design, online bookings and a modern user experience."
            technologies={[
              "WordPress",
              "PHP",
              "JavaScript",
              "CSS",
            ]}
            website="https://kibokoshuttles.com"
          />

          <ProjectCard
            image="/projects/scentbox.png"
            title="Scent Box Africa"
            description="An e-commerce platform built to showcase and sell premium fragrances with a clean shopping experience."
            technologies={[
              "WooCommerce",
              "WordPress",
              "PHP",
            ]}
            website="https://scentboxafrica.co.za"
          />

          <ProjectCard
            image="/projects/treasure.png"
            title="Treasure Signs & Print"
            description="A modern business website developed for a branding and printing company with responsive layouts and SEO best practices."
            technologies={[
              "WordPress",
              "CSS",
              "SEO",
            ]}
            website="https://treasuresigns.co.za"
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;