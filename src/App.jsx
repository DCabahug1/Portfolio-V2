import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./App.css";
// Import Swiper Styles
import "./styles/Swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import Project from "./components/Project";
import LightBlob from "./components/LightBlob";

function App() {
  const [projects, setProjects] = useState([
    {
      imgURL: "/assets/Project Imgs/DailyPlanner.png",
      title: "To-Do List",
      content: ["HTML", "CSS", "JavaScript", "React"],
      projectURL: "https://dcabahug-to-do-list.netlify.app/",
    },
    {
      imgURL: "/assets/Project Imgs/ChatLink.png",
      title: "ChatLink",
      content: ["HTML", "CSS", "JavaScript", "React"],
      projectURL: "https://dcabahug1-chatlinkv2.netlify.app",
    },
  ]);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [projectsPerView, setProjectsPerView] = useState(1);

  // Listen for viewport width changes
  useEffect(() => {
    console.log(projectsPerView);
    if (window.innerWidth >= 950) {
      console.log("2 slides per view");
      if (projects.length >= 3) {
        setProjectsPerView(3);
        document.querySelector(".swiper").style.maxWidth = "1290px";
        document.querySelector(".swiper-wrapper").style.maxWidth = "1290px";
        const swiperSlide = document.querySelector(".swiper-slide");

        if (swiperSlide) {
        }
      }
    } else if (window.innerWidth >= 700) {
      if (projects.length >= 2) {
        setProjectsPerView(2);
      }
    } else {
      setProjectsPerView(1);
    }
  }, [window.innerWidth]);

  // Listen for viewport height changes
  useEffect(() => {
    const rotateAlert = document.getElementById("rotate-alert");

    if (viewportHeight < 500) {
      // Disable scroll
      document.querySelector("#app").style.overflowY = "hidden";
      document.querySelector("body").style.backgroundColor = "rgb(20,20,20)";
      rotateAlert.style.display = "flex";
      rotateAlert.style.opacity = "1";
    } else {
      setTimeout(() => {
        document.querySelector("#app").style.overflowY = "scroll";
        document.querySelector("body").style.backgroundColor =
          "rgba(16, 6, 20, 1)";
        rotateAlert.style.opacity = "0";
        setTimeout(() => {
          rotateAlert.style.display = "none";
        }, 400);
      }, 1000);
    }
  }, [viewportHeight]);

  // On mount
  useEffect(() => {
    // Mobile intro animation
    const introPhoto = document.getElementById("intro-photo");
    const introName = document.getElementById("intro-name");
    const introMajor = document.getElementById("intro-major");
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const scrollIndicatorDesktop = document.querySelector(
      "#scroll-indicator-desktop"
    );

    setTimeout(() => {
      introName.style.opacity = "1";
      introName.style.top = "0";

      introMajor.style.opacity = "1";
      introMajor.style.top = "0";

      introPhoto.style.opacity = "1";
      introPhoto.style.top = "0";

      setTimeout(() => {
        scrollIndicator.style.opacity = "1";
        scrollIndicatorDesktop.style.opacity = "1";
      }, 500);
    }, 1000);
    // Desktop intro animation
    const introNameAndMajor = document.getElementById("intro-name-and-major");
    const introText = document.getElementById("intro-text");

    setTimeout(() => {
      introNameAndMajor.style.opacity = "1";
      introNameAndMajor.style.right = "0";

      introText.style.opacity = "1";
      introText.style.left = "0";
    }, 1000);

    // Event listeners
    // Listen for app scroll
    const app = document.getElementById("app");

    // Update viewport width on resize
    window.addEventListener("resize", () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    });

    // Scroll animations
    app.addEventListener("scroll", () => {
      // Adjust scroll indicator
      const scrollIndicators = document.querySelectorAll(".scroll-indicator");

      // About slide in animation
      if (app.scrollTop >= 200) {
        const aboutTitle = document.getElementById("about-title");
        const aboutText = document.getElementById("about-text");

        aboutTitle.style.left = "0";
        aboutText.style.right = "0";

        aboutTitle.style.opacity = "1";
        aboutText.style.opacity = "1";

        // Remove scroll indicators
        scrollIndicators.forEach((scrollInd) => {
          scrollInd.style.opacity = 0;
        });
      }

      if (app.scrollTop >= 300 && viewportWidth >= 1200) {
        // Desktop
        const projectsContainer = document.getElementById("projects-container");

        projectsContainer.style.opacity = "1";
        projectsContainer.style.top = "0";
      } else if (app.scrollTop >= 800 && viewportWidth < 1200) {
        // Mobile
        const projectsContainer = document.getElementById("projects-container");

        projectsContainer.style.opacity = "1";
        projectsContainer.style.top = "0";
      }
    });
  }, []);

  return (
    <div id="app">
      <LightBlob />
      <div id="rotate-alert">
        <img src="/assets/RotateDevice.png" alt="" />
      </div>
      {/* Mobile intro & about */}
      <div className="content-container mobile" id="intro-container">
        <img src="/assets/Portrait.png" alt="" id="intro-photo" />
        <h1 id="intro-name">Duane Cabahug</h1>
        <h2 id="intro-major">Computer Science</h2>
        <div className="scroll-indicator">
          <img src="/assets/Scroll indicator.png" alt="" />
        </div>
      </div>
      <div className="content-container mobile" id="mobile-about-container">
        <h2 id="about-title">About Me</h2>
        <p id="about-text">
          As a <span> Computer Science major</span> at{" "}
          <span>California State University, Northridge</span>, I bring a
          dynamic skill set including <span>proficiency</span> in{" "}
          <span>Java, JavaScript, React JS, HTML, CSS, LuaU, and Python.</span>{" "}
          I am actively seeking <span>internships</span> to gain hands-on
          experience, apply my knowledge in <span>real-world projects</span>,
          and contribute to impactful <span>technological advancements</span>.
        </p>
      </div>
      {/* Desktop intro & about */}
      <div className="content-container" id="intro-desktop-container">
        <div id="intro-name-and-major">
          <img src="/assets/Portrait.png" alt="" />
          <h1>Duane Cabahug</h1>
          <h2>Computer Science</h2>
        </div>
        <p id="intro-text">
          As a <span> Computer Science major</span> at{" "}
          <span>California State University, Northridge</span>, I bring a
          dynamic skill set including <span>proficiency</span> in{" "}
          <span>Java, JavaScript, React JS, HTML, CSS, LuaU, and Python.</span>{" "}
          I am actively seeking <span>internships</span> to gain hands-on
          experience, apply my knowledge in <span>real-world projects</span>,
          and contribute to impactful <span>technological advancements</span>.
        </p>
        <div className="scroll-indicator" id="scroll-indicator-desktop">
          <img src="/assets/Scroll indicator.png" alt="" />
        </div>
      </div>
      <div className="content-container" id="projects-container">
        <h2 id="projects-title">Projects</h2>
        <div id="swiper-container">
          <Swiper
            slidesPerView={projectsPerView}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.map((project, i) => {
              return (
                <SwiperSlide key={"project_" + i}>
                  <Project
                    imgURL={project.imgURL}
                    title={project.title}
                    content={project.content}
                    projectURL={project.projectURL}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="content-container" id="links-container">
        <div id="links-buttons-container">
          <a
            id="github-button"
            className="links-button"
            href="https://github.com/DCabahug1"
          >
            <img src="/assets/GitHub.png" alt="" />
          </a>
          <a
            id="linkedin-button"
            className="links-button"
            href="https://linkedin.com/in/duane-cabahug"
          >
            <img src="/assets/LinkedIn.png" alt="" />
          </a>
          <a
            id="email-button"
            className="links-button"
            href="mailto:duanecabahug6@gmail.com"
          >
            <img src="/assets/Email.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
