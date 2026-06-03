import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Typed from "typed.js";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FotoIvan from "../assets/Foto_IvanYuantamaPradipta.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg: #0a0a0a;
    --bg-2: #111111;
    --bg-3: #181818;
    --accent: #e8f4b8;
    --accent-dim: #b8c988;
    --text: #f0ede8;
    --text-body: rgba(240,237,232,0.75);
    --text-muted: #7a7a72;
    --border: rgba(240,237,232,0.08);
    --border-hover: rgba(232,244,184,0.3);
    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --cv-btn-bg: transparent;
    --cv-btn-text: #e8f4b8;
    --cv-btn-border: rgba(232,244,184,0.5);
    --cv-btn-hover-bg: #e8f4b8;
    --cv-btn-hover-text: #0a0a0a;
    --cv-btn-hover-border: #e8f4b8;
  }

  .pf-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .pf-root { background: var(--bg); color: var(--text); font-family: var(--font-body); font-weight: 300; line-height: 1.6; }
  .pf-root a { text-decoration: none; color: inherit; }

  /* NAV */
  .pf-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.5rem 3rem;
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .pf-nav-logo { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
  .pf-nav-logo span { color: var(--accent); }
  .pf-nav-links { display: flex; gap: 2.5rem; }
  .pf-nav-links a { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); transition: color 0.2s; }
  .pf-nav-links a:hover { color: var(--accent); }
  .pf-toggle-btn { background: none; border: 1px solid var(--border); color: var(--text-muted); padding: 0.4rem 0.9rem; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: all 0.2s; font-family: var(--font-body); }
  .pf-toggle-btn:hover { border-color: var(--accent); color: var(--accent); }

  /* HERO */
  .pf-hero {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 3rem 5rem;
    position: relative;
    overflow: hidden;
  }
  .pf-hero-counter {
    position: absolute; top: 50%; right: 3rem; transform: translateY(-50%);
    font-family: var(--font-display); font-size: clamp(10rem, 18vw, 18rem);
    font-weight: 800; color: transparent;
    -webkit-text-stroke: 1px rgba(232,244,184,0.06);
    pointer-events: none; user-select: none; line-height: 1;
    letter-spacing: -0.04em;
  }
  .pf-hero-label { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; }
  .pf-hero-title { font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 5rem); font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; max-width: 800px; }
  .pf-hero-divider { width: 100%; height: 1px; background: var(--border); margin: 3rem 0 2rem; }
  .pf-hero-meta { display: flex; gap: 4rem; align-items: center; }
  .pf-hero-meta-item label { display: block; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.25rem; }
  .pf-hero-meta-item span { font-size: 0.9rem; font-weight: 400; }
  .pf-hero-scroll { margin-left: auto; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem; }
  .pf-hero-scroll::before { content: ''; display: block; width: 40px; height: 1px; background: var(--text-muted); }

  /* SECTION */
  .pf-section { padding: 7rem 3rem; border-top: 1px solid var(--border); }
  .pf-section-header { display: flex; align-items: baseline; gap: 2rem; margin-bottom: 4rem; }
  .pf-section-num { font-family: var(--font-display); font-size: 0.75rem; color: var(--accent); font-weight: 700; letter-spacing: 0.1em; }
  .pf-section-title { font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; }

  /* ABOUT */
  .pf-about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; align-items: start; }
  .pf-about-photo-wrap { position: relative; }
  .pf-about-photo { width: 100%; aspect-ratio: 3/4; object-fit: cover; filter: grayscale(30%) contrast(1.05); border: 1px solid var(--border); transition: filter 0.4s; }
  .pf-about-photo:hover { filter: grayscale(0%) contrast(1.05); }
  .pf-about-photo-label { position: absolute; bottom: -1rem; right: -1rem; background: var(--accent); color: #0a0a0a; font-family: var(--font-display); font-weight: 700; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.5rem 0.9rem; }
  .pf-about-text { font-size: 1.15rem; line-height: 1.8; color: var(--text-body); margin-bottom: 2.5rem; }
  .pf-about-text strong { color: var(--accent); font-weight: 500; }
  .pf-about-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
  .pf-tag { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.35rem 0.8rem; border: 1px solid var(--border); color: var(--text-muted); border-radius: 2px; transition: all 0.2s; }
  .pf-tag:hover { border-color: var(--accent); color: var(--accent); }
  .pf-cv-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--cv-btn-bg); color: var(--cv-btn-text); font-family: var(--font-display); font-weight: 700; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.85rem 1.75rem; border: 2px solid var(--cv-btn-border); cursor: pointer; transition: all 0.2s; border-radius: 2px; text-decoration: none; }
  .pf-cv-btn:hover { background: var(--cv-btn-hover-bg); color: var(--cv-btn-hover-text); border-color: var(--cv-btn-hover-border); }

  /* EXPERIENCE TABS */
  .pf-exp-tabs { display: flex; gap: 0; margin-bottom: 3rem; border-bottom: 1px solid var(--border); }
  .pf-exp-tab { font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.9rem 1.75rem; background: none; border: none; color: var(--text-muted); cursor: pointer; transition: all 0.2s; position: relative; border-bottom: 2px solid transparent; margin-bottom: -1px; }
  .pf-exp-tab:hover { color: var(--text); }
  .pf-exp-tab.active { color: var(--accent); border-bottom-color: var(--accent); }

  /* EXPERIENCE LIST */
  .pf-exp-list { display: flex; flex-direction: column; gap: 0; }
  .pf-exp-item { display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start; padding: 2rem 0; border-bottom: 1px solid var(--border); }
  .pf-exp-item:last-child { border-bottom: none; }
  .pf-exp-img { width: 120px; height: 120px; object-fit: cover; border: 1px solid var(--border); filter: grayscale(60%); transition: filter 0.3s; border-radius: 4px; flex-shrink: 0; }
  .pf-exp-item:hover .pf-exp-img { filter: grayscale(0%); }
  .pf-exp-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1.5rem; margin-bottom: 0.35rem; }
  .pf-exp-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; line-height: 1.3; }
  .pf-exp-duration { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); white-space: nowrap; padding-top: 0.2rem; flex-shrink: 0; }
  .pf-exp-org { font-size: 0.8rem; color: var(--accent); font-weight: 500; margin-bottom: 0.75rem; }
  .pf-exp-points { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
  .pf-exp-points li { font-size: 0.845rem; color: var(--text-muted); line-height: 1.55; padding-left: 1rem; position: relative; }
  .pf-exp-points li::before { content: '—'; position: absolute; left: 0; color: var(--accent); font-size: 0.75rem; top: 0.05rem; }

  /* PROJECTS — FEATURED + GRID */
  .pf-proj-container { position: relative; }
  .pf-proj-nav { display: flex; align-items: center; gap: 0.5rem; }
  .pf-proj-nav-btn { background: none; border: 1px solid var(--border); color: var(--text-muted); width: 38px; height: 38px; border-radius: 2px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
  .pf-proj-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
  .pf-proj-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }
  .pf-proj-counter { font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.08em; min-width: 40px; text-align: center; }

  .pf-proj-featured { display: grid; grid-template-columns: 1.4fr 1fr; gap: 0; border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-bottom: 1.5rem; }
  .pf-proj-featured-img-wrap { overflow: hidden; aspect-ratio: 16/10; }
  .pf-proj-featured-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); transition: transform 0.6s, filter 0.4s; }
  .pf-proj-featured:hover .pf-proj-featured-img { transform: scale(1.04); filter: grayscale(0%); }
  .pf-proj-featured-body { padding: 2.5rem; background: var(--bg-2); display: flex; flex-direction: column; justify-content: space-between; }
  .pf-proj-featured-idx { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 1rem; }
  .pf-proj-featured-title { font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
  .pf-proj-featured-desc { font-size: 0.875rem; color: var(--text-muted); line-height: 1.65; flex: 1; margin-bottom: 2rem; }
  .pf-proj-link { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--font-display); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); border-bottom: 1px solid var(--border-hover); padding-bottom: 2px; transition: gap 0.2s; align-self: flex-start; }
  .pf-proj-link:hover { gap: 0.7rem; }

  .pf-proj-thumbs { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  .pf-proj-thumb { cursor: pointer; border-radius: 3px; overflow: hidden; aspect-ratio: 3/2; border: 2px solid transparent; transition: border-color 0.2s, opacity 0.2s; opacity: 0.45; }
  .pf-proj-thumb:hover { opacity: 0.75; }
  .pf-proj-thumb.active { border-color: var(--accent); opacity: 1; }
  .pf-proj-thumb img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); transition: filter 0.3s; display: block; }
  .pf-proj-thumb.active img { filter: grayscale(0%); }

  /* CERTS */
  .pf-cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
  .pf-cert-item { overflow: hidden; border: 1px solid var(--border); border-radius: 4px; transition: border-color 0.25s, transform 0.25s; }
  .pf-cert-item:hover { border-color: var(--border-hover); transform: scale(1.02); }
  .pf-cert-item img { width: 100%; display: block; filter: grayscale(20%); transition: filter 0.3s; }
  .pf-cert-item:hover img { filter: grayscale(0%); }

  /* CONTACT */
  .pf-contact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
  .pf-contact-item { background: var(--bg); padding: 2.5rem 2rem; display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; transition: background 0.2s; }
  .pf-contact-item:hover { background: var(--bg-3); }
  .pf-contact-icon { color: var(--accent); }
  .pf-contact-label { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; }
  .pf-contact-arrow { margin-left: auto; color: var(--text-muted); transition: transform 0.2s, color 0.2s; }
  .pf-contact-item:hover .pf-contact-arrow { transform: translate(3px,-3px); color: var(--accent); }

  /* CTA */
  .pf-cta { padding: 7rem 3rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 3rem; }
  .pf-cta-text { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; max-width: 500px; line-height: 1.1; }
  .pf-cta-text em { color: var(--accent); font-style: normal; }
  .pf-cta-btn { display: inline-flex; align-items: center; gap: 0.6rem; background: transparent; border: 1px solid var(--border-hover); color: var(--accent); font-family: var(--font-display); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 1rem 2rem; cursor: pointer; transition: all 0.2s; border-radius: 2px; white-space: nowrap; text-decoration: none; }
  .pf-cta-btn:hover { background: var(--accent); color: #0a0a0a; }

  /* FOOTER */
  .pf-footer { padding: 2rem 3rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); }

  /* LIGHT MODE */
  .pf-light {
    --bg: #f7f5f0; --bg-2: #eeece7; --bg-3: #e6e3dc;
    --accent: #3d6b22; --accent-dim: #5a8f35;
    --text: #1a1a17; --text-body: rgba(26,26,23,0.75); --text-muted: #888880;
    --border: rgba(26,26,23,0.12); --border-hover: rgba(61,107,34,0.4);
    --cv-btn-bg: #3d6b22;
    --cv-btn-text: #f7f5f0;
    --cv-btn-border: #3d6b22;
    --cv-btn-hover-bg: #1a1a17;
    --cv-btn-hover-text: #f7f5f0;
    --cv-btn-hover-border: #1a1a17;
  }
  .pf-light .pf-nav { background: rgba(247,245,240,0.92); }
  .pf-light .pf-about-photo-label { color: #f7f5f0; }
  .pf-light .pf-toggle-btn { border-color: rgba(26,26,23,0.25); }

  @media (max-width: 900px) {
    .pf-proj-featured { grid-template-columns: 1fr; }
    .pf-proj-featured-img-wrap { aspect-ratio: 16/9; }
    .pf-proj-thumbs { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 768px) {
    .pf-nav { padding: 1rem 1.25rem; }
    .pf-nav-links { display: none; }
    .pf-hero { padding: 0 1.25rem 3.5rem; min-height: 100svh; }
    .pf-hero-divider { margin: 2rem 0 1.5rem; }
    .pf-section { padding: 4rem 1.25rem; }
    .pf-section-header { margin-bottom: 2.5rem; gap: 1rem; }
    .pf-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .pf-about-photo { aspect-ratio: 4/3; }
    .pf-about-photo-label { bottom: -0.75rem; right: -0.75rem; }
    .pf-about-text { font-size: 1rem; }
    .pf-exp-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .pf-exp-tab { padding: 0.75rem 1.1rem; font-size: 0.72rem; white-space: nowrap; }
    .pf-exp-item { grid-template-columns: 64px 1fr; gap: 1rem; padding: 1.5rem 0; }
    .pf-exp-img { width: 64px; height: 64px; }
    .pf-exp-header { flex-direction: column; gap: 0.25rem; }
    .pf-exp-duration { white-space: normal; }
    .pf-exp-title { font-size: 0.9rem; }
    .pf-section-header.projects-header { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
    .pf-proj-featured-body { padding: 1.5rem; }
    .pf-proj-featured-title { font-size: 1.1rem; }
    .pf-proj-thumbs { grid-template-columns: repeat(4, 1fr); gap: 5px; }
    .pf-cert-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
    .pf-contact-grid { grid-template-columns: repeat(2, 1fr); }
    .pf-contact-item { padding: 1.5rem 1.25rem; }
    .pf-cta { flex-direction: column; align-items: flex-start; padding: 4rem 1.25rem; gap: 2rem; }
    .pf-footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem 1.25rem; }
    .pf-hero-counter { font-size: 5.5rem; right: 0.75rem; opacity: 0.6; }
    .pf-hero-meta { flex-wrap: wrap; gap: 1.5rem; }
    .pf-hero-scroll { display: none; }
    .pf-cv-btn { width: 100%; justify-content: center; }
  }
  @media (max-width: 480px) {
    .pf-hero-title { font-size: 2.2rem; }
    .pf-section-title { font-size: 1.6rem; }
    .pf-exp-item { grid-template-columns: 1fr; }
    .pf-exp-img { width: 56px; height: 56px; }
    .pf-contact-grid { grid-template-columns: 1fr 1fr; }
    .pf-proj-thumbs { grid-template-columns: repeat(4, 1fr); }
    .pf-about-tags { gap: 0.4rem; }
    .pf-tag { font-size: 0.65rem; padding: 0.3rem 0.6rem; }
  }
`;

export default function MainPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("work");
  const [activeProject, setActiveProject] = useState(0);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Ivan Yuantama.", "a builder.", "an engineer."],
      typeSpeed: 60,
      backSpeed: 35,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "_",
    });
    return () => typed.destroy();
  }, []);

  const workExperiences = [
    {
      img: "https://i.imghippo.com/files/Io2370xi.png",
      title: "Junior iOS Developer",
      org: "Apple Developer Academy @BINUS Bali — Kuta, Bali",
      duration: "Mar 2026 – Present",
      points: [
        "Developed an iOS To Do List app with spontaneous activity feature that checks schedule availability automatically.",
        "Built Phoof, a photo management app that auto-deletes photos based on user-defined time settings.",
        "Developed a digital assistance tool for parents during emergencies, contributing to feature development and UI design.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/XAT9642ok.png",
      title: "Risk Control Unit – Technology (Cybersecurity)",
      org: "CIMB Niaga — Tangerang, Banten",
      duration: "Sep 2025 – Jan 2026",
      points: [
        "Analyzed activity frequency of 50+ Standard Operating Procedures (SOPs) to support audit readiness.",
        "Created an Audit Monitoring Dashboard using Power BI to visualize cybersecurity activities and compliance status.",
        "Reviewed and analyzed 10+ Working Instructions to ensure alignment with cybersecurity standards.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/UMG4325YI.png",
      title: "IoT & Blockchain System Intern",
      org: "Pusat Data dan Informasi Kementrian PU — Jakarta Selatan",
      duration: "Jul 2025",
      points: [
        "Built a Web 3.0 app for issuing and verifying digital certificates via blockchain, improving transparency in admin workflows.",
        "Developed an AI-based facial recognition system for employee room access, enhancing security and automation.",
        "Designed an IoT-powered automatic lighting system that adjusts based on presence for energy efficiency.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/eDS6496IiQ.png",
      title: "Fullstack Developer",
      org: "PT Winnicode Garuda Indonesia — Kota Bandung, Jawa Barat",
      duration: "Mar 2025 – Jul 2025",
      points: [
        "Built a responsive dynamic news portal with real-time updates, personalized content, comments, and social sharing.",
        "Implemented full-stack using ReactJS, Tailwind CSS, Node.js, Express.js, and PostgreSQL.",
        "Integrated a CMS for efficient news publishing and administration.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/fh3763PgM.png",
      title: "Assistant Laboratory",
      org: "Digital Laboratory FTUI — Depok, Jawa Barat",
      duration: "Aug 2024 – Jul 2025",
      points: [
        "Designed questions and practical modules for Digital Systems, Digital System Design, and Algorithm Programming courses.",
        "Guided 100+ students through practicum sessions ensuring practical understanding of course modules.",
        "Reviewed student answers and reports, providing structured feedback to improve skills.",
      ],
    },
  ];

  const educationExperiences = [
    {
      img: "https://i.imghippo.com/files/Ykab4390ctY.png",
      title: "Undergraduate Computer Engineering",
      org: "Universitas Indonesia — Depok, Jawa Barat",
      duration: "Aug 2022 – Aug 2026 (Expected)",
      points: [
        "GPA: 3.75 / 4.00",
        "Developed JBus-android, an Android bus rental app using Java and OOP with payment and scheduling features.",
        "Created RentLab, a web app for managing lab equipment rentals at the Faculty of Engineering.",
        "Designed an IoT-based Attendance System with Smart Access using RFID, PIN, and RTOS for real-time automation.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/fUe6028ek.png",
      title: "Science Track",
      org: "SMAN 47 Jakarta",
      duration: "Graduated",
      points: [
        "Focused on natural sciences curriculum.",
        "Active in extracurricular activities including band and choir.",
        "Developed creativity, teamwork, and communication skills beyond academics.",
      ],
    },
  ];

  const organizationExperiences = [
    {
      img: "https://i.imghippo.com/files/BkeP9732TY.png",
      title: "CoDirector – Training and Development",
      org: "Exercise FTUI — Depok, Jawa Barat",
      duration: "Feb 2024 – Dec 2024",
      points: [
        "Designed and implemented training programs to encourage skill development and continuous learning.",
        "Conducted Proteus Training, MATLAB Training, Competitive Programming, and CTF Training.",
        "Each training session attended by approximately 20 participants.",
      ],
    },
    {
      img: "https://i.imghippo.com/files/yGn5927hc.png",
      title: "Staff – Programming Computer Vision",
      org: "AUAV VTOL Tim Robotika Universitas Indonesia — Depok",
      duration: "Nov 2023 – Nov 2024",
      points: [
        "Designed and implemented a rectangle detection algorithm using OpenCV for drone marker tracking.",
        "Connected OpenCV with the ROS2 framework for seamless communication between vision and drone control systems.",
        "Enabled autonomous drone navigation via on-board computer vision integration.",
      ],
    },
  ];

  const projectExperiences = [
    {
      img: "https://i.imghippo.com/files/UE9618LuM.png",
      title: "Portfolio Website",
      link: "https://ivanyuantama-web.vercel.app",
      tag: "React · Tailwind",
      description:
        "A personal portfolio crafted with ReactJS and Tailwind CSS, featuring a dark editorial aesthetic, smooth interactions, dark/light mode toggle, and a fully responsive layout that showcases projects, experiences, and skills.",
    },
    {
      img: "https://i.imghippo.com/files/jQK4870ngM.png",
      title: "FriendTracker",
      link: "https://github.com/IvanYuantama/FriendTracker",
      tag: "iOS · Swift",
      description:
        "An iOS app that enables real-time bidirectional location sharing between friends. Users can see where their friends are on a live map while simultaneously sharing their own location — making meetups and safety checks effortless.",
    },
    {
      img: "https://i.imghippo.com/files/kU4583sTU.png",
      title: "FoodListPicker",
      link: "https://github.com/IvanYuantama/FoodListPicker",
      tag: "iOS · Swift",
      description:
        "An iOS app that takes the stress out of deciding what to eat. Add your favorite meals to a personal list, spin the roulette wheel, and let chance make the decision — perfect for indecisive food lovers.",
    },
    {
      img: "https://i.imghippo.com/files/pVKb9755BME.png",
      title: "Phoof",
      link: "https://github.com/IvanYuantama/Phoof",
      tag: "iOS · Swift",
      description:
        "A smart iOS photo manager that automatically deletes photos after a user-defined time period. Designed to keep your camera roll clean and your device storage light — without any manual effort.",
    },
    {
      img: "https://i.imghippo.com/files/R6705ekE.png",
      title: "Sertifikat Magang Pusdatin PU",
      link: "https://sertifikatmagang-pupr.vercel.app/",
      tag: "Web 3.0 · Blockchain",
      description:
        "A decentralized Web 3.0 platform for issuing and verifying internship certificates on-chain. Built with ReactJS, Hardhat, and NeonDB, deployed on Vercel with Alchemy Sepolia ensuring tamper-proof credential management.",
    },
    {
      img: "https://i.imghippo.com/files/LI7030zA.png",
      title: "AI ChatBot",
      link: "https://ivanyuantama-web.vercel.app/chatbot",
      tag: "AI · Web",
      description:
        "An AI-powered conversational chatbot leveraging the DeepSeek LLM to deliver fluid, context-aware responses. Integrated directly into my portfolio as a live demonstration of applied AI in modern web development.",
    },
    {
      img: "https://i.imghippo.com/files/GPc2799dNI.png",
      title: "VChat",
      link: "https://github.com/IvanYuantama/VChat",
      tag: "Fullstack · Messaging",
      description:
        "A real-time web messaging platform with secure user authentication, custom chat ID pairing, and instant messaging capabilities — built to connect people quickly without unnecessary friction.",
    },
    {
      img: "https://i.imghippo.com/files/hJ4331Cu.png",
      title: "RentLab",
      link: "https://github.com/IvanYuantama/RentLab-SBD",
      tag: "Web · Database",
      description:
        "A dual-role web system for managing laboratory equipment loans at UI's Faculty of Engineering. Students can browse and request items while lab assistants oversee inventory and approval workflows in real time.",
    },
    {
      img: "https://i.imghippo.com/files/HFNK4505XP.png",
      title: "JBus – Android",
      link: "https://github.com/IvanYuantama/JBus-android",
      tag: "Android · Java",
      description:
        "A fully-featured Android bus reservation app built with Java and OOP principles. Supports seat booking, flexible scheduling, integrated payments, and user reviews — designed for a seamless commuter experience.",
    },
    {
      img: "https://i.imghippo.com/files/BVBf8298oZI.png",
      title: "Smart Room – IoT",
      link: "https://www.linkedin.com/posts/ivanyuantama_i-made-my-first-simple-iot-project-with-blynk-activity-7096087098776047616-Ev0u",
      tag: "IoT · Blynk",
      description:
        "A smart home IoT project that enables remote control of room electronics via the Blynk platform. Accessible from any phone or browser, with built-in scheduling for automated on/off routines.",
    },
    {
      img: "https://i.imghippo.com/files/FIG6175IoM.png",
      title: "FIM – Smart Farming IoT",
      link: "https://github.com/IvanYuantama/FarmIntegratedMonitoring",
      tag: "IoT · Web · Fullstack",
      description:
        "A full-stack IoT dashboard for smart farming management. Monitor real-time soil humidity and temperature, trigger water pumps automatically based on sensor thresholds, and manage your farm remotely from a clean web interface.",
    },
    {
      img: "https://i.imghippo.com/files/FwG8603rm.png",
      title: "DGiftCard",
      link: "https://dgiftcard.vercel.app",
      tag: "Web · Payment Gateway",
      description:
        "A web application for creating and sending digital gift cards, allowing recipients to redeem codes through banks, e-wallets, and other supported payment methods using Xendit integration.",
    },
    {
      img: "https://i.imghippo.com/files/ySV4354oU.png",
      title: "CloudStack Installation",
      link: "https://github.com/patuyyy/cloudstack-installation",
      tag: "Cloud Infrastructure · Virtualization",
      description:
        "An Apache CloudStack deployment project on an Ubuntu-based all-in-one node, featuring cloud infrastructure provisioning, virtualization setup, storage configuration, and VM lifecycle management.",
    },
  ];

  const certificate = [
    "https://i.imghippo.com/files/xK3273OEE.png",
    "https://i.imghippo.com/files/imr6020Ao.png",
    "https://i.imghippo.com/files/YN9588MUM.png",
    "https://i.imghippo.com/files/xfE5746cI.png",
    "https://i.imghippo.com/files/sKB4943oNM.png",
    "https://i.imghippo.com/files/CwW7547EjQ.png",
    "https://i.imghippo.com/files/bzw5598DkQ.png",
    "https://i.imghippo.com/files/rNXd2706bc.png",
    "https://i.imghippo.com/files/ZmeF6867GoM.png",
    "https://i.imghippo.com/files/DJjn9473bE.png",
    "https://i.imghippo.com/files/SWP8439ijU.png",
  ];

  const tabData = {
    work: workExperiences,
    education: educationExperiences,
    organization: organizationExperiences,
  };
  const tabLabels = [
    { key: "work", label: "Work" },
    { key: "education", label: "Education" },
    { key: "organization", label: "Organization" },
  ];
  const navLinks = ["home", "about", "experience", "projects", "contact"];
  const proj = projectExperiences[activeProject];

  return (
    <div className={`pf-root ${darkMode ? "" : "pf-light"}`}>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="pf-nav">
        <div className="pf-nav-logo">Porto</div>
        <div className="pf-nav-links">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`}>
              {link}
            </a>
          ))}
        </div>
        <button
          className="pf-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="pf-hero">
        <div className="pf-hero-counter" aria-hidden>
          01
        </div>
        <p className="pf-hero-label">Portfolio — 2026</p>
        <h1 className="pf-hero-title">
          <span ref={typedRef} />
        </h1>
        <div className="pf-hero-divider" />
        <div className="pf-hero-meta">
          <div className="pf-hero-meta-item">
            <label>Location</label>
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="pf-hero-meta-item">
            <label>Focus</label>
            <span>IoT · Blockchain · Fullstack · AI</span>
          </div>
          <div className="pf-hero-meta-item">
            <label>Status</label>
            <span style={{ color: "var(--accent)" }}>Open to Work</span>
          </div>
          <div className="pf-hero-scroll">Scroll</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pf-section">
        <div className="pf-section-header">
          <span className="pf-section-num">02 —</span>
          <h2 className="pf-section-title">About</h2>
        </div>
        <div className="pf-about-grid">
          <div className="pf-about-photo-wrap">
            <img
              src={FotoIvan}
              alt="Ivan Yuantama Pradipta"
              className="pf-about-photo"
            />
            <div className="pf-about-photo-label">Comp. Engineering</div>
          </div>
          <div>
            <p className="pf-about-text">
              I'm <strong>Ivan Yuantama Pradipta</strong>, a Computer
              Engineering student at University of Indonesia. I build real-world
              systems at the intersection of <strong>blockchain</strong>,{" "}
              <strong>AI</strong>, <strong>IoT</strong>, and{" "}
              <strong>full-stack development</strong>.
            </p>
            <p className="pf-about-text">
              From deploying on-chain certificate systems to training computer
              vision models for autonomous drones — I care about shipping things
              that matter.
            </p>
            <div className="pf-about-tags">
              {[
                "React",
                "Node.js",
                "IoT",
                "Blockchain",
                "Python",
                "Computer Vision",
                "iOS / Swift",
                "PostgreSQL",
                "ROS2",
                "Solidity",
                "C/C++",
                "Java",
              ].map((t) => (
                <span key={t} className="pf-tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1XdfIW2ZGI0Ecu7d4GoA7oJYrpSK-3O7d/view?usp=sharing"
              className="pf-cv-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — TABBED */}
      <section id="experience" className="pf-section">
        <div className="pf-section-header">
          <span className="pf-section-num">03 —</span>
          <h2 className="pf-section-title">Experience</h2>
        </div>

        <div className="pf-exp-tabs">
          {tabLabels.map(({ key, label }) => (
            <button
              key={key}
              className={`pf-exp-tab${activeTab === key ? " active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pf-exp-list">
          {tabData[activeTab].map((exp, i) => (
            <div key={i} className="pf-exp-item">
              <img src={exp.img} alt={exp.org} className="pf-exp-img" />
              <div className="pf-exp-body">
                <div className="pf-exp-header">
                  <div className="pf-exp-title">{exp.title}</div>
                  <div className="pf-exp-duration">{exp.duration}</div>
                </div>
                <div className="pf-exp-org">{exp.org}</div>
                <ul className="pf-exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS — FEATURED VIEWER */}
      <section id="projects" className="pf-section">
        <div
          className="pf-section-header projects-header"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "2rem" }}>
            <span className="pf-section-num">04 —</span>
            <h2 className="pf-section-title">Projects</h2>
          </div>
          <div className="pf-proj-nav">
            <button
              className="pf-proj-nav-btn"
              onClick={() => setActiveProject((p) => Math.max(0, p - 1))}
              disabled={activeProject === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <span className="pf-proj-counter">
              {String(activeProject + 1).padStart(2, "0")} /{" "}
              {String(projectExperiences.length).padStart(2, "0")}
            </span>
            <button
              className="pf-proj-nav-btn"
              onClick={() =>
                setActiveProject((p) =>
                  Math.min(projectExperiences.length - 1, p + 1),
                )
              }
              disabled={activeProject === projectExperiences.length - 1}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="pf-proj-container">
          <div className="pf-proj-featured">
            <div className="pf-proj-featured-img-wrap">
              <img
                src={proj.img}
                alt={proj.title}
                className="pf-proj-featured-img"
                key={activeProject}
              />
            </div>
            <div className="pf-proj-featured-body">
              <div>
                <div className="pf-proj-featured-idx">{proj.tag}</div>
                <div className="pf-proj-featured-title">{proj.title}</div>
                <p className="pf-proj-featured-desc">{proj.description}</p>
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="pf-proj-link"
              >
                View project <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="pf-proj-thumbs">
            {projectExperiences.map((p, i) => (
              <div
                key={i}
                className={`pf-proj-thumb${activeProject === i ? " active" : ""}`}
                onClick={() => setActiveProject(i)}
                title={p.title}
              >
                <img src={p.img} alt={p.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="pf-section">
        <div className="pf-section-header">
          <span className="pf-section-num">05 —</span>
          <h2 className="pf-section-title">Certificates</h2>
        </div>
        <div className="pf-cert-grid">
          {certificate.map((src, i) => (
            <div key={i} className="pf-cert-item">
              <img src={src} alt={`Certificate ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pf-section">
        <div className="pf-section-header">
          <span className="pf-section-num">06 —</span>
          <h2 className="pf-section-title">Contact</h2>
        </div>
        <div className="pf-contact-grid">
          {[
            {
              href: "mailto:ivanyuantama.work@gmail.com",
              icon: <Mail size={22} />,
              label: "Email",
            },
            {
              href: "https://linkedin.com/in/ivanyuantama",
              icon: <Linkedin size={22} />,
              label: "LinkedIn",
            },
            {
              href: "https://instagram.com/ivan_yuantama",
              icon: <Instagram size={22} />,
              label: "Instagram",
            },
            {
              href: "https://github.com/IvanYuantama",
              icon: <Github size={22} />,
              label: "GitHub",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="pf-contact-item"
            >
              <span className="pf-contact-icon">{icon}</span>
              <span className="pf-contact-label">{label}</span>
              <ArrowUpRight size={16} className="pf-contact-arrow" />
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="chatbot" className="pf-cta">
        <div className="pf-cta-text">
          Got a question? Try my <em>AI chatbot</em>.
        </div>
        <a href="/chatbot" className="pf-cta-btn">
          Open ChatBot <ArrowUpRight size={14} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <span>© 2026 Ivan Yuantama Pradipta</span>
        <span>Computer Engineering · University of Indonesia</span>
      </footer>
    </div>
  );
}
