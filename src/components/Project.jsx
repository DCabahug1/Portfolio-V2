import React from 'react'
import '../styles/Project.css'

function Project(props) {
  return (
    <div className="project-container">
      <div className="project">
        <img src="" alt="" id="project-image" />
        <h2 id="project-title">{props.title}</h2>
      </div>
    </div>
  )
}

export default Project