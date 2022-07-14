import React, { useCallback, useEffect, useState } from "react";
import useScrollingUp from "../utilities/hooks/useScrollUp";

import './styles/menu.css';

export default function Menu(props) {

  const visible = useScrollingUp();
  
  return (
    <div className="menu-wrapper" style={{top: visible ? '0' : '-50px'}}>
      <div className="menu-items">
        <div className="menu-item text">Home</div>
        <div className="menu-item text">Projects</div>
        <div className="menu-item text">About me</div>
        <div className="menu-item text">Contacts</div>
      </div>
    </div>
  )
}