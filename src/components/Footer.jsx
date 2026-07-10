import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Katleho Mpetsane
            </h2>

            <p className="text-gray-400 mt-2">
              Information Technology Graduate | Web Developer | IT Support
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="mailto:rusherchrisk@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/KatlehoMpetsane"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/katleho-mpetsane-691830215"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Katleho Mpetsane. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;