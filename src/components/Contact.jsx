import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiRoadmapdotsh } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const socialMedia = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/justakash_02/",
    color: "text-pink-600",
  },
  {
    icon: FaGithub,
    url: "https://github.com/labsbyakash",
    color: "text-gray-800",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/labsbyakash/",
    color: "text-blue-600",
  },
  //   {
  //     icon: FaTwitter,
  //     url: "https://twitter.com/your_username",
  //     color: "text-blue-500",
  //   },
  {
    icon: SiLeetcode,
    url: "https://leetcode.com/devakashsharma",
    color: "text-yellow-500",
  },
  {
    icon: SiRoadmapdotsh,
    url: "https://roadmap.sh/u/akashsharma",
    color: "text-black",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    status: null,
    message: "",
  });
  const formRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation for the text section
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for the form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_bdv36ak",
        "template_4j04jz7",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "SDhhAOkaBnNh97eIU"
      )
      .then(() => {
        setSubmitStatus({
          status: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setSubmitStatus({
          status: "error",
          message: "Failed to send message. Please try again.",
        });
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d1d8f0] flex items-center justify-center  px-10 py-20"
    >
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full max-w-6xl">
        {/* Text Section */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 md:pr-12 poppins text-center md:text-left mb-12 md:mb-0"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-3">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message, and let&apos;s create something amazing.
          </p>

          {/* Social Media Links */}
          <p className="text-lg poppins text-gray-700 mb-2">Follow me on:</p>
          <div className="flex justify-center md:justify-start space-x-5">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-transform duration-300`}
              >
                <social.icon size={30} />
              </a>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div
          ref={formRef}
          className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-10"
        >
          <h3 className="text-3xl font-semibold font-general text-center mb-8 text-gray-800">
            Contact Me
          </h3>

          {submitStatus.status && (
            <div
              className={`mb-4 p-3 rounded-lg poppins text-center ${
                submitStatus.status === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {[
              {
                label: "Name",
                type: "text",
                name: "name",
                placeholder: "Your Name",
              },
              {
                label: "Email",
                type: "email",
                name: "email",
                placeholder: "Your Email",
              },
            ].map((field) => (
              <div key={field.name} className="mb-6 poppins">
                <label
                  htmlFor={field.name}
                  className="block text-gray-700 mb-2 font-medium"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                </div>
              </div>
            ))}

            <div className="mb-6 poppins">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full font-general bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
