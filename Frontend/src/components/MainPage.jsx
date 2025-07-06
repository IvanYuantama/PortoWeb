// MainPage.jsx
import React, { useState, useEffect, useRef } from "react";

import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Typed from "typed.js";
import { Mail, Linkedin, Instagram } from "lucide-react";
import FotoIvan from "../assets/Foto_IvanYuantamaPradipta.jpg";

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hello, my name is Ivan.", "I'm a Computer Engineering Student.", "I love building impactful systems."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy(); // Cleanup
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const placeholderImg = "https://media.istockphoto.com/id/1443562748/id/foto/kucing-jahe-lucu.jpg?s=612x612&w=0&k=20&c=g--RaRzUgk83osyJGx88ZtoChTk3VzP8n86EQHvc7Ko=";

  const workExperiences = [
    {
      img: "https://i.imghippo.com/files/fh3763PgM.png",
      title: "Digital Laboratory Assistant - FTUI",
      description:
        "Developed questions and practical modules for courses like Digital Systems and Algorithm Programming, while guiding 100+ students in practicum sessions and providing feedback to enhance their technical understanding and skills.",
    },
    {
      img: "https://i.imghippo.com/files/eDS6496IiQ.png",
      title: "Fullstack Developer - PT Winnicode Garuda Indonesia",
      description:
        "Built a responsive, full-stack news portal with real-time updates, personalized content, and interactive features using ReactJS, Tailwind CSS, Node.js, Express.js, and PostgreSQL, including a CMS for streamlined publishing and admin tasks.",
    },
    {
      img: "https://i.imghippo.com/files/UMG4325YI.png",
      title: "IoT and Blockchain System Intern - Pusat Data dan Informasi Kementrian PU",
      description:
        "Built a Web 3.0 application for issuing and verifying blockchain-based certificates, an AI-powered facial recognition system for secure room access, and an IoT-based automatic lighting system to improve energy efficiency and workplace convenience.",
    },
  ];

  const educationExperiences = [
    {
      img: "https://i.imghippo.com/files/fUe6028ek.png",
      title: "SMAN 47 Jakarta - Science",
      description:
        "I attended SMAN 47 Jakarta with a focus on natural sciences. During my time there, I actively participated in various extracurricular activities such as band and choir, which helped me develop creativity, teamwork, and communication skills beyond academics.",
    },
    {
      img: "https://i.imghippo.com/files/Ykab4390ctY.png",
      title: "University of Indonesia - Bachelor Degree Computer Engineering",
      description: "I am currently studying Computer Engineering at the University of Indonesia, where I focus on areas such as embedded systems, IoT, and software development to build innovative and impactful technological solutions.",
    },
  ];

  const organizationExperiences = [
    {
      img: "https://i.imghippo.com/files/BkeP9732TY.png",
      title: "Vice Head of Training and Development - EXERCISE FTUI",
      description: "Designed and led training programs to promote skill development and continuous learning, including sessions on Proteus, MATLAB, competitive programming, and CTF, each attended by around 20 participants.",
    },
    {
      img: "https://i.imghippo.com/files/yGn5927hc.png",
      title: "Programming Staff Computer Vision - AUAV VTOL UI",
      description: "Developed a rectangle detection algorithm using OpenCV and integrated it with the ROS2 framework, allowing drones to identify and track markers for autonomous navigation.",
    },
  ];

  const projectExperiences = [
    {
      img: "https://i.imghippo.com/files/zcf3651aFM.png",
      title: "Sertifikat Magang Pusdatin PU - Web 3.0 (Blockchain)",
      link: "https://sertifikatmagang-pupr.vercel.app/",
      description:
        "SertifikatMagang Pusdatin PU is a Web 3.0 app for publishing and verifying internship certificates using blockchain. Built with ReactJS, Hardhat, and NeonDB, and deployed on Vercel with Alchemy Sepolia for on-chain verification.",
    },
    {
      img: "https://i.imghippo.com/files/XJzL5001VmQ.png",
      title: "ChatBot - Web",
      link: "https://ivanyuantama-web.vercel.app/chatbot",
      description:
        "Chatbot is a web-based AI project that uses DeepSeek LLM to simulate human-like conversations. This chatbot was built using modern web technologies and deployed via Vercel as part of my portfolio.",
    },
    {
      img: "https://i.imghippo.com/files/zBM6860Kc.png",
      title: "Portofolio - Web",
      link: "https://ivanyuantama-web.vercel.app",
      description:
        "This is a personal portfolio website showcasing my projects, experiences, and skills in web development and AI. Built with ReactJS, Tailwind CSS, and SwiperJS, the site features a clean, responsive design with support for dark mode and interactive project previews.",
    },
    {
      img: "https://i.imghippo.com/files/DKk3997Cbk.png",
      title: "VChat - Web",
      link: "https://github.com/IvanYuantama/VChat",
      description:
        "VChat is a website used to send messages and replies to anyone. On this website, users need to sign up first, then log in. If so, the user can connect with people around him by entering a chat ID which can be determined by the user himself.",
    },
    {
      img: "https://i.imghippo.com/files/aAn7959Joc.png",
      title: "RentLab - Web",
      link: "https://github.com/IvanYuantama/RentLab-SBD",
      description:
        "RentLab is a website used to borrow laboratory goods at the Faculty of Engineering, University of Indonesia. This website is divided into two users, namely the user as a student who will borrow goods and aslab as the user who laboratory goods.",
    },
    {
      img: "https://i.imghippo.com/files/hyX9101JQU.png",
      title: "JBus - Android",
      link: "https://github.com/IvanYuantama/JBus-android",
      description: "JBus is an Android project that is used to make bus reservations. In this app, users can make orders, payments and rentals according to the desired time. This project was carried out using Java and Android Studio",
    },
    {
      img: "https://i.imghippo.com/files/IE9751ZGc.png",
      title: "Smart Room - IoT",
      link: "https://www.linkedin.com/posts/ivanyuantama_i-made-my-first-simple-iot-project-with-blynk-activity-7096087098776047616-Ev0u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1CMRcBtvETc3MVTujME3n--AwhIk1g7IQ",
      description:
        "Smart Room is simple IoT Project with Blynk. This project will be used in my room to turn on the PC or other electronic things from online. I can controlled electronic part in my room by phone or website. With blynk it can be scheduled to turn on/turn off too.",
    },
  ];

  const certificate = [
    {
      img: "https://i.imghippo.com/files/DJjn9473bE.png",
    },
    {
      img: "https://i.imghippo.com/files/bzw5598DkQ.png",
    },
    {
      img: "https://i.imghippo.com/files/rNXd2706bc.png",
    },
    {
      img: "https://i.imghippo.com/files/ZmeF6867GoM.png",
    },
    {
      img: "https://i.imghippo.com/files/SWP8439ijU.png",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {/* Welcoming Page */}
        <section className="h-screen flex items-center justify-center" id="home">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mx-6 text-slate-800 dark:text-slate-200">
            <span ref={typedRef} />
          </h1>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-16">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Foto dengan efek hover */}
            <div className="group w-64 h-64 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transition-transform duration-500 transform hover:rotate-[8deg] hover:scale-105">
              <img src={FotoIvan} alt="Ivan Yuantama Pradipta" className="object-cover w-full h-full rounded-full" />
            </div>

            {/* Teks intro */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-opacity duration-700">
              I’m Ivan Yuantama Pradipta, a passionate Computer Engineering student focused on blockchain, AI, IoT, network, and also full-stack development. I love building real-world impact through smart, scalable solutions.
            </p>

            {/* Tombol Download CV */}
            <a href="https://drive.google.com/file/d/1XdfIW2ZGI0Ecu7d4GoA7oJYrpSK-3O7d/view?usp=sharing" download>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition duration-300 font-semibold tracking-wide"> Download CV</button>
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work" className="py-20 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Work Experience</h2>
          <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {workExperiences.map((work, index) => (
              <div key={index} className="group">
                <div
                  className="transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl 
          bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl 
          overflow-hidden shadow-md w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-full"
                >
                  <div className="w-full overflow-hidden">
                    <img src={work.img} alt={`Work ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h1 className="text-xl font-bold text-center mt-5 mx-5 text-gray-800 dark:text-white tracking-wide">{work.title}</h1>
                  <div className="p-4 md:p-6 text-justify">
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed transition-opacity duration-500 group-hover:opacity-90">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Experience */}
        <section id="education" className="py-20 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education Experience</h2>
          <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {educationExperiences.map((work, index) => (
              <div key={index} className="group">
                <div
                  className="transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl 
          bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl 
          overflow-hidden shadow-md w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-full"
                >
                  <div className="w-full overflow-hidden">
                    <img src={work.img} alt={`Work ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h1 className="text-xl font-bold text-center mt-5 mx-5 text-gray-800 dark:text-white tracking-wide">{work.title}</h1>

                  <div className="p-4 md:p-6 text-justify">
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed transition-opacity duration-500 group-hover:opacity-90">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Experience */}
        <section id="organization" className="py-20 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Organization Experience</h2>
          <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {organizationExperiences.map((work, index) => (
              <div key={index} className="group">
                <div
                  className="transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl 
          bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl 
          overflow-hidden shadow-md w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-full"
                >
                  <div className="w-full overflow-hidden">
                    <img src={work.img} alt={`Work ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h1 className="text-xl font-bold text-center mt-5 mx-5 text-gray-800 dark:text-white tracking-wide">{work.title}</h1>

                  <div className="p-4 md:p-6 text-justify">
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed transition-opacity duration-500 group-hover:opacity-90">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}

        <section id="projects" className="py-20 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Projects</h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-7xl mx-auto"
          >
            {projectExperiences.map((work, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-6 text-center">
                  <img src={work.img} alt={`Work ${index + 1}`} className="w-full object-cover rounded mb-4" />
                  <h1 className="text-xl font-bold text-center mt-5 mx-5 text-gray-800 dark:text-white tracking-wide mb-5">{work.title}</h1>
                  <p className="text-gray-700 dark:text-gray-300 text-justify">{work.description}</p>
                  <div className="mt-4 flex justify-center">
                    <a href={work.link}>
                      <Button>Preview</Button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Certificates */}
        <section id="certificate" className="py-20 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Certificates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {certificate.map((item, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                  <img src={item.img} alt={`Certificate ${index + 1}`} className="w-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 md:px-16 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Email */}
            <a href="mailto:ivanyuantama.work@gmail.com" className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <Mail className="mx-auto text-blue-500 mb-3" size={32} />
              <p className="font-semibold text-gray-800 dark:text-white">Email</p>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/ivanyuantama" target="_blank" className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="mx-auto text-blue-600 mb-3" size={32} />
              <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/ivan_yuantama" target="_blank" className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <Instagram className="mx-auto text-pink-500 mb-3" size={32} />
              <p className="font-semibold text-gray-800 dark:text-white">Instagram</p>
            </a>

            {/* GitHub */}
            <a href="https://github.com/IvanYuantama" target="_blank" className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.22 2.2.82a7.6 7.6 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
            </a>
          </div>
        </section>

        {/* ChatBot Redirect Section */}
        <section id="chatbot" className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Try My AI ChatBot!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Curious about something? Ask anything to my integrated chatbot powered by DeepSeek AI.</p>
            <a href="/chatbot">
              <button className="px-8 py-4 bg-green-600 text-white rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition duration-300 text-lg font-semibold">Go to ChatBot</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
