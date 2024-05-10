import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./App.css";
// Import Swiper Styles
import './styles/Swiper.css';
import "swiper/css";
import "swiper/css/pagination";

import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([
    {
      imgURL: "/assets/Project Imgs/DailyPlanner.png",
      title: "To-Do List",
      content: ["HTML", "CSS", "JavaScript", "React"],
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
    app.addEventListener("scroll", () => {
      const scrollIndicator = document.getElementById("scroll-indicator");

      let scrollIndOpacity = 1 - app.scrollTop / 200;

      if (scrollIndOpacity >= 0) {
        scrollIndicator.style.opacity = scrollIndOpacity;
      }
    });
  }, []);

  return (
    <div id="app">
      <div className="content-container mobile" id="intro-container">
        <img src="src\assets\Portrait.png" alt="" id="intro-photo" />
        <h1 id="intro-name">Duane Cabahug</h1>
        <h2 id="intro-major">Computer Science</h2>
        <div id="scroll-indicator">
          <img src="src\assets\Scroll indicator.png" alt="" />
        </div>
      </div>
      <div className="content-container mobile" id="mobile-about-container">
        <h2 id="about-title">About Me</h2>
        <p id="about-text">
          I am a Computer Science student at California State University,
          Northridge. I am passionate about technology and its applications in
          the real world. I am currently seeking internships and opportunities
          to grow my skills and knowledge in the field of software development.
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
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
    </div>
  );
}

export default App;
