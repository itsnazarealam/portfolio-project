import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#060814] text-slate-200 px-8 md:px-16 py-15 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to
            say hello? Feel free to send me a message.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold text-white">
              Let's work together
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              I'm always interested in hearing about new projects,
              opportunities, and collaborations. If you have an idea,
              let's discuss it.
            </p>

            {/* Email */}
            <div className="mt-8">

              <p className="text-sm text-slate-500">
                Email
              </p>

              <a
                href="mailto:itsnazarealam@gmail.com"
                className="mt-2 inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                itsnazarealam@gmail.com
              </a>

            </div>

            {/* Location */}
            <div className="mt-6">

              <p className="text-sm text-slate-500">
                Location
              </p>

              <p className="mt-2 text-slate-300">
                New Delhi, India
              </p>

            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">

              <p className="text-sm text-slate-500">
                Connect with me
              </p>

              <div className="mt-4 flex gap-4">

                <a
                  href="https://github.com/itsnazarealam"
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/itsnazarealam/"
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  LinkedIn
                </a>

                <a
                  href="https://instagram.com/itsnazarealam/"
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  Instagram
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
                />

              </div>

              {/* Email */}
              <div className="mt-5">

                <label
                  htmlFor="email"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
                />

              </div>

              {/* Message */}
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="block text-sm text-slate-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors resize-none"
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 text-[#060814] font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
