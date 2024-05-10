import React from "react";
import "../styles/Project.css";

function Project(props) {
  return (
    <div className="project-container">
      <a className="project" href={props.projectURL}>
        <img
          src={props.imgURL}
          alt=""
          className="project-image"
        />
        <div className="project-text">
          <h2 className="project-title">{props.title}</h2>
          <div className="project-content-container">
            {props.content.map((content, i) => {
              return (
                <div
                  key={props.title + "_content_" + i}
                  className="project-content"
                >
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
