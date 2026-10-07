import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio.",
      description:
        "This is my personal portfolio, showcasing my skills, projects, experience, and a little about me.",
      tech: ["HTML", "Tailwind CSS", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "Campus Hire",
      description:
        "This project automates manual campus placement processes for TPOs, companies, and students, making placement management faster and more efficient.",
      tech: ["React", "Spring Boot", "MySQL", "Hibernate"],
      github: "https://github.com/itsnazarealam/College-Placement-Portal",
      demo: "https://campus-hire-murex.vercel.app/",
    },
    {
      title: "Weather Wise",
      // img: "/WeatherWise.png",
      description:
        "A weather app that provides real-time weather information for any location.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/itsnazarealam/WeatherWise",
      demo: "https://itsnazarealam.github.io/WeatherWise/",
    },
    {
      title: "Media Search App",
      description:
        "A responsive media search application that allows users to search and explore images, videos, and GIFs from different APIs.",
      tech: ["React", "Redux", "Tailwind CSS", "REST API"],
      github: "https://github.com/itsnazarealam/media-search-app",
      target: "_blank",
      demo: "https://warm-buttercream-8077c2.netlify.app/",
    },
    {
      title: "Student Management System",
      img: "",
      description:
        "A CRUD-based student management application for adding, updating, viewing, and deleting student records using a React frontend and Spring Boot backend.",
      tech: ["React", "Spring Boot", "MySQL", "REST API"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#060814] text-slate-200 px-8 md:px-16 py-15 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            My Work
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I have built while learning and
            working with modern frontend and backend technologies.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all duration-300"  
            >

              <div className="h-45 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden">

            {project.img ? (
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                src={project.img}
                alt={`${project.title} screenshot`}
              />
            ) : (
              <span className="text-5xl font-bold text-white/20 group-hover:text-cyan-400/40 transition-colors">
                {"</>"}
              </span>
            )}

          </div>

              <div className="mt-6">

                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href={project.github}
                    target="_black"
                    className="px-4 py-2 rounded-full bg-white/10 text-slate-200 text-sm hover:bg-white/15 transition-colors"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_black"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-[#060814] font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
