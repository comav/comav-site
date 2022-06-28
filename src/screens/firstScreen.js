import React from "react";

import Divider from "../components/divider";

import './styles/firstScreen.css';

export default function FirstScreen() {
  return (
    <div className="first-screen-wrapper">
      <main>
        <div className="intro-text header">
          <h1>comav</h1>
          <Divider />
          <p className="highlighted">Building the next-gen web</p>
        </div>
        
      </main>
    </div>
  )
}