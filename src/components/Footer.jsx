// import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiRoadmapdotsh } from "react-icons/si";

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide font-circular-web text-amber-50 mb-6 md:mb-0">
            Akash Sharma
          </h2>

          <div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                {
                  Icon: FaInstagram,
                  url: "https://www.instagram.com/justakash_02/",
                },
                {
                  Icon: FaGithub,
                  url: "https://github.com/labsbyakash",
                },
                {
                  Icon: FaLinkedin,
                  url: "https://linkedin.com/in/akash-sharma-1b7a73240",
                },
                // {
                //   Icon: FaTwitter,
                //   url: "https://twitter.com/yourusername",
                // },
                {
                  Icon: SiLeetcode,
                  url: "https://leetcode.com/devakashsharma",
                },
                {
                  Icon: SiRoadmapdotsh,
                  url: "https://roadmap.sh/u/akashsharma",
                },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-transform duration-300 hover:scale-125"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <div className="mt-6 text-center md:text-start font-robert-medium">
              <p className="text-gray-400 text-sm md:text-base">
                Made with <span className="text-red-500">❤️</span> by a Shinobi
              </p>
              {/* <p className="text-gray-500 text-xs md:text-sm mt-2">
                © {currentYear} All Rights Reserved
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
