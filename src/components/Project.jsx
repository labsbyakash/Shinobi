import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalPanels = panelsRef.current.length;

      // Create a master timeline that pins the container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalPanels * 100}%`, // Dynamic length based on items + 1
          pin: true,
          scrub: 1,
        },
      });

      // Loop through all panels (Projects + The Final GitHub Card)
      panelsRef.current.forEach((panel, i) => {
        if (i === 0) return; // First panel is already there

        // Animate the panel sliding up
        tl.fromTo(
          panel,
          {
            yPercent: 100,
            opacity: 0.8,
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="project"
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* 1. MAPPING THE PROJECTS */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (panelsRef.current[index] = el)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
          style={{ zIndex: index + 1 }}
        >
          <div className="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
            {/* Text Side */}
            <div className="order-2 md:order-1 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-gray-400">
                  0{index + 1}
                </span>
                <div className="h-[1px] w-12 bg-gray-600"></div>
                <span className="text-sm font-mono text-blue-400 uppercase tracking-wider">
                  Featured Work
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-bold font-general leading-tight">
                {project.name}
              </h2>

              <p className="text-gray-400 font-robert-regular text-lg max-w-md">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-lg font-medium border-b border-white pb-1 w-fit hover:text-blue-400 hover:border-blue-400 transition-colors duration-300"
              >
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>

            {/* Image Side */}
            <div className="order-1 md:order-2 h-[40vh] md:h-[70vh] w-full rounded-2xl overflow-hidden relative shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      ))}

      {/* 2. THE FINAL 'MORE ON GITHUB' SLIDE */}
      <div
        ref={(el) => (panelsRef.current[projects.length] = el)}
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
        style={{ zIndex: projects.length + 1 }}
      >
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-8xl font-bold font-general mb-8 tracking-tighter">
            Want to see more?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-robert-regular">
            I have many more experiments, open-source contributions, and chaos
            on my GitHub profile.
          </p>

          <a
            href="https://github.com/labsbyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-general rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Visit My GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-400/20"></div>
          </a>
        </div>
      </div>

      {/* Scroll Progress Indicator (Optional) */}
      <div className="absolute bottom-10 right-10 z-[100] flex flex-col items-center gap-2 mix-blend-difference">
        <span className="text-xs uppercase tracking-widest text-white">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Project;
