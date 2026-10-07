import React, { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];
const sectionIds = navLinks.map((link) => link.id);

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#060814] backdrop-blur-md border-b border-white/10">

      <header className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={handleLinkClick}
          className="text-2xl font-semibold text-cyan-400"
        >
          WC.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                active === link.id
                  ? "bg-cyan-400/20 text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {link.label} {link.emoji}
            </a>
          ))}

        </nav>

        {/* Mobile / Tablet More Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer"
        >
          {isMenuOpen ? (
            <>
              <span>Close</span>
              <span className="text-lg">✕</span>
            </>
          ) : (
            <>
              <span>More</span>
              <span className="text-lg">☰</span>
            </>
          )}
        </button>

      </header>

      {/* Mobile / Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 md:px-10 pb-5">

          <nav className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-2">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-xl text-sm transition-colors ${
                  active === link.id
                    ? "bg-cyan-400/20 text-cyan-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {link.label} {link.emoji}
              </a>
            ))}

          </nav>

        </div>
      )}

    </div>
  );
}

export default Navigation;