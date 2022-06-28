import React from "react";

import './styles/menu.css';

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-items">
        <div className="menu-item text">Home</div>
        <div className="menu-item text">Projects</div>
        <div className="menu-item text">About me</div>
        <div className="menu-item text">Contacts</div>
      </div>
    </div>
  )
}