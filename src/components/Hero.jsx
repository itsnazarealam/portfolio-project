import React from "react";

export default function Hero() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about"},
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#060814] text-slate-200 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-24 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-40 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Navigation 
      <header className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 h-24 flex items-center justify-between">

        <span className="text-2xl font-semibold text-cyan-400">
          Portfolio.
        </span>

        <nav className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">

          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                index === 0
                  ? "bg-cyan-400/20 text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {link.label} {link.emoji}
            </a>
          ))}

        </nav>
      </header>
      */}
      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center pt-16 pb-24"
      >

        {/* Left Content */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nazare Alam
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-md leading-relaxed">
            I’m a Java Backend Developer passionate about building scalable, reliable, and efficient backend systems. I work with Java, Spring Boot, REST APIs, and databases to turn ideas into real-world applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-[#060814] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/10 text-slate-200 font-medium text-sm hover:bg-white/15 transition-colors"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5 text-slate-400">

            <a
              href="https://github.com/itsnazarealam"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/itsnazarealam/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>

            {/* <a
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              Code
            </a> */}

          </div>

        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center md:justify-end">

          <div className="w-full max-w-md h-[450px] rounded-3xl overflow-hidden border border-white/10">

            <img
              src="/nazare.jpg"
              alt="Nazare Alam"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* Scroll Down */}
      {/* <div className="relative z-10 flex justify-center pb-10 text-slate-500 animate-bounce">

        <span className="text-2xl">
          ↓
        </span>

      </div> */}

    </div>
  );
}