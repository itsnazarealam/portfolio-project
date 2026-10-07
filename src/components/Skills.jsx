import { useState } from "react";

const ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skills = [
  { name: "HTML5", group: "Frontend", icon: "html5/html5-original.svg" },
  { name: "CSS3", group: "Frontend", icon: "css3/css3-original.svg" },
  { name: "Tailwind CSS", group: "Frontend", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", group: "Frontend", icon: "javascript/javascript-original.svg" },
  { name: "C++", group: "Backend", icon: "cplusplus/cplusplus-original.svg" },
  { name: "JPA", group: "Backend", icon: "java/java-original.svg" },
  { name: "Spring Boot", group: "Backend", icon: "spring/spring-original.svg" },
{ name: "Hibernate", group: "Backend", icon: "hibernate/hibernate-original.svg" },
{ name: "MySQL", group: "Backend", icon: "mysql/mysql-original.svg"} ,
  { name: "PostgreSQL", group: "Backend", icon: "postgresql/postgresql-original.svg",
    invert: true },
  { name: "Git", group: "Tools", icon: "git/git-original.svg" },
  { name: "GitHub", group: "Tools", icon: "github/github-original.svg", invert: true },
  { name: "Postman", group: "Tools", icon: "postman/postman-original.svg" },
  { name: "VS Code", group: "Tools", icon: "vscode/vscode-original.svg" },
  { name: "IntelliJ IDEA", group: "Tools", icon: "intellij/intellij-original.svg" },
];

const groups = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? skills : skills.filter((s) => s.group === active);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#050814] py-10 text-white">
      {/* soft cyan / violet glows, like the hero background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold md:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          Technologies and tools I use to design, build and ship modern web applications.
        </p>

        {/* pill filter, same look as the navbar pill */}
        <div
          role="group"
          aria-label="Filter skills"
          className="mt-10 inline-flex gap-1 rounded-full border border-white/10 bg-white/5 p-1.5"
        >
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              aria-pressed={active === g}
              className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${
                active === g
                  ? "bg-cyan-900/60 text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* skill cards */}
        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((s) => (
            <li
              key={s.name}
              className="group flex flex-col items-center gap-4 cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-8 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]"
            >
              <img
                src={`${ICON}/${s.icon}`}
                alt=""
                width={52}
                height={52}
                className={`h-[52px] w-[52px] object-contain ${s.invert ? "invert" : ""}`}
              />
              <span className="font-medium text-slate-200 group-hover:text-white">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}