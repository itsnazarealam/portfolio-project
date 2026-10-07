import React from "react";

export default function About() {
  const skills = [
    "Java",
    "C++",
    "React.js",
    "JavaScript",
    "Spring Boot",
    "MySQL",
    "JPA",
    "Hibernate",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST API",
  ];

  return (
    <section
      id="about"
      className="relative bg-[#060814] text-slate-200 px-8 md:px-16 py-15 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-semibold text-white">
              I'm a Full-Stack Developer
            </h3>

            <p className="mt-6 text-slate-400 leading-relaxed">
              I'm a passionate developer who enjoys building modern,
              responsive, and user-friendly web applications. I like
              understanding how things work and turning ideas into
              practical solutions using clean and maintainable code.
            </p>

            <p className="mt-5 text-slate-400 leading-relaxed">
              My primary focus is on frontend development with React.js
              and backend development using Java and Spring Boot. I also
              work with MySQL, REST APIs, JPA, and Hibernate to build
              complete full-stack applications.
            </p>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Along with development, I regularly practice Data
              Structures and Algorithms using C++ to improve my
              problem-solving and logical thinking skills.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">
                  3+
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">
                  10+
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">
                  100+
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Problems Solved
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold text-white">
              My Skills
            </h3>

            <p className="mt-3 text-slate-400 text-sm">
              Technologies and tools I use to build applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Education */}
            <div className="mt-10 pt-8 border-t border-white/10">

              <p className="text-cyan-400 text-sm font-medium">
                Education
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                Master of Computer Applications
              </h4>

              <p className="mt-2 text-slate-400 text-sm">
                Computer Applications & Software Development
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                Bachelor of Computer Applications
              </h4>

              <p className="mt-2 text-slate-400 text-sm">
                Computer Applications & Software Development
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}