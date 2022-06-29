import React from "react";
import Divider from "../components/divider";
import Marquee from 'react-fast-marquee';
import Project from '../components/project';

import './styles/projectsScreen.css'

export default function ProjectsScreen() {
  return (
    <div className="projects-screen-wrapper">
      <div className="header projects-header">
        <Marquee>My projects</Marquee>
      </div>
      <div className="projects-wrapper">
        <Project prettyName="Monopoly Assistant" name="monopoly-assistant" />
        <Divider vertical/>
        <Project prettyName="Monopoly Server" name="monopoly-assistant-server" />
        <Divider vertical/>
        <Project prettyName="txtnt" name="txtnt" />
      </div>
    </div>
  )
}