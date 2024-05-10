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

function App() {
  const [projects, setProjects] = useState([
    {
      imgURL: "/assets/Project Imgs/DailyPlanner.png",
      title: "To-Do List",
      content: ["HTML", "CSS", "JavaScript", "React"],
      projectURL: "https://dcabahug-dailyplanner.netlify.app/my-planner",
    },
    {
      imgURL: "",
      title: "ChatLink",
      content: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    },
  ]);

  // On mount
  useEffect(() => {
    // Event listeners
    // Listen for app scroll
    const app = document.getElementById("app");
    let viewportHeight = window.innerHeight;

    // Update viewport height on resize
    window.addEventListener("resize", () => {
      viewportHeight = window.innerHeight;
    });

    app.addEventListener("scroll", () => {
      console.log(app.scrollTop);

      // Adjust scroll indicator
      const scrollIndicator = document.getElementById("scroll-indicator");
      let scrollIndOpacity = 1 - app.scrollTop / 500;

      scrollIndicator.style.opacity = scrollIndOpacity;

      // Slide in animation
      if (app.scrollTop >= 200) {
        const aboutTitle = document.getElementById("about-title");
        const aboutText = document.getElementById("about-text");

        aboutTitle.style.left = "0";
        aboutText.style.right = "0";
      }

      if (app.scrollTop >= 600) {
        const projectsContainer = document.getElementById("projects-container");

        projectsContainer.style.opacity = "1";
        projectsContainer.style.top = "0";
        
      }
    });
  }, []);

  return (
    <div id="app">
      <div className="content-container mobile" id="intro-container">
        <img src="/assets/Portrait.png" alt="" id="intro-photo" />
        <h1 id="intro-name">Duane Cabahug</h1>
        <h2 id="intro-major">Computer Science</h2>
        <div id="scroll-indicator">
          <img src="/assets/Scroll indicator.png" alt="" />
        </div>
      </div>
      <div className="content-container mobile" id="mobile-about-container">
        <h2 id="about-title">About Me</h2>
        <p id="about-text">
          As a <span> Computer Science major</span> at California State
          University, Northridge, I bring a dynamic skill set including
          proficiency in{" "}
          <span>Java, JavaScript, React JS, HTML, CSS, LuaU, and Python.</span>{" "}
          My passion for technology and coding drives my continual pursuit of
          innovative solutions and learning.
        </p>
      </div>
      <div className="content-container" id="projects-container">
        <h2 id="projects-title">Projects</h2>
        <Swiper
          slidesPerView={1}
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
