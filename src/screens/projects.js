import React from "react";
import Project from "../components/project";
import './styles/projects.css';

export default function Projects() {
  return(
    <div className="projects-wrapper">
      <h1 className="projects-title">My projects</h1>
      <Project />
      <Project />
      <Project />
    </div>
  )
}