import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#060814] border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-medium">
              Nazare Alam
            </span>
            . All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="text-sm hover:text-cyan-400 transition-colors"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}