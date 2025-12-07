import React, { useEffect, useRef } from "react";
// Make sure the path matches your file structure exactly
import { skills } from "../constants/data";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".bento-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-50 py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Inline Styles for custom animations and noise */}
      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .bento-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite; /* Slower speed for better readability */
        }
      `}</style>

      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

      {/* Blob Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="mb-12 bento-item">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight font-general mt-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-blue-500">
              Me.
            </span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl">
            More than just code. A glimpse into my stack, my style, and my
            philosophy.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. The Introduction Card (Large) */}
          <div className="bento-item col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg
                className="w-32 h-32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
            <div>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Open to Work
              </div> */}
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                I'm Akash Sharma.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                A <b>Full Stack Developer</b> crafting digital experiences that
                blend form and function. I don't just write code; I build
                solutions. My approach combines the precision of backend logic
                with the creativity of frontend design.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:gap-4 hover:shadow-lg"
              >
                Let's Connect <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* 2. The Photo Card */}
          <div className="bento-item col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-slate-200 rounded-3xl overflow-hidden relative group border border-slate-300">
            <img
              src="/img/person-org.png"
              alt="Akash Profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium">📍 Konoha</p>
              <p className="text-white/80 text-sm">Developer & Creator</p>
            </div>
          </div>

          {/* 3. The Personality / Stats Card */}
          <div className="bento-item col-span-1 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-orange-500/40 transition-shadow duration-300 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-white/10 text-9xl font-black select-none">
              狐
            </div>

            <h4 className="text-xl font-bold mb-1 relative z-10">
              The Ninja Way 🦊
            </h4>
            <p className="text-orange-100 text-sm mb-4 relative z-10">
              Powered by Ramen & Code.
            </p>

            <div className="space-y-2 relative z-10">
              <div className="flex justify-between text-sm font-medium">
                <span>Will of Fire</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-1.5">
                <div
                  className="bg-white h-1.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <div className="flex justify-between text-sm font-medium mt-2">
                <span>Bugs Fixed</span>
                <span>∞</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-1.5">
                <div
                  className="bg-white h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* 4. Tech Stack Marquee (Mapped from skills array) */}
          <div className="bento-item col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900 rounded-3xl flex items-center relative overflow-hidden border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10 pointer-events-none"></div>

            <div className="flex gap-10 py-6 animate-scroll whitespace-nowrap">
              {/* Loop twice to create the infinite scroll illusion */}
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-10 items-center">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group/skill"
                    >
                      <div className="w-12 h-12 bg-slate-800/50 rounded-lg p-2 flex items-center justify-center border border-slate-700 group-hover/skill:border-indigo-500/50 transition-colors">
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-full h-full object-contain filter group-hover/skill:brightness-110 transition-all"
                        />
                      </div>
                      <span className="text-slate-400 font-bold text-lg group-hover/skill:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Small Detail Card */}
          <div className="bento-item col-span-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-purple-300 transition-colors duration-300 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-3">
              🚀
            </div>
            <div className="font-bold text-slate-800 text-lg">
              Always Learning
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Exploring AI & Machine Learning
            </p>
          </div>

          {/* 6. Contact CTA */}
          <div className="bento-item col-span-1 md:col-span-3 lg:col-span-1 bg-indigo-600 rounded-3xl p-6 text-white flex flex-col justify-center items-center text-center hover:bg-indigo-700 transition-colors">
            <h4 className="font-bold text-2xl">Have an idea?</h4>
            <p className="text-indigo-200 text-sm mt-2 mb-4">
              Let's build something amazing together.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Email Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
