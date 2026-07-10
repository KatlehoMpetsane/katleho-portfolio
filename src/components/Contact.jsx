import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_ep56teu",
        "template_s2xp4wa",
        form.current,
        "0oIN5jvx4CpqSl_gZ"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("✅ Message sent successfully!");
          form.current.reset();

          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          console.error(error);

          setLoading(false);

          setSuccess("❌ Failed to send message. Please try again.");

          setTimeout(() => {
            setSuccess("");
          }, 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          I'm currently open to graduate opportunities, internships,
          web development projects, and IT support roles.
          Feel free to contact me and I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaEnvelope size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:rusherchrisk@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  rusherchrisk@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaPhone size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  Phone
                </h3>

                <a
                  href="tel:+27717713391"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  +27 71 771 3391
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaLinkedin size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://www.linkedin.com/in/katleho-mpetsane-691830215"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  linkedin.com/in/katleho-mpetsane
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-cyan-500 p-4 rounded-full">
                <FaGithub size={22} />
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/KatlehoMpetsane"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  github.com/KatlehoMpetsane
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-900 p-8 rounded-2xl shadow-xl"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 mb-5 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 mb-5 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 mb-6 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-center mt-6 text-cyan-400 font-medium">
                {success}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;