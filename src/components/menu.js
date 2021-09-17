import React, { useState } from 'react';

import { useScrollPosition } from '../hooks/useScrollPos';

import './styles/menu.css';

export default function Menu() {

  const [sticky, setSticky] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )

  return(
    <div className="menu-wrapper" 
    as="footer"
    mb="-1em"
    sx={{
      position: "sticky",
      transform: sticky ? "translateY(100%)" : "translateY(0)",
      transition: "transform 400ms ease-in",
      bottom: 0,
      left: 0,
    }}>
      <ul>
        <li>Me</li>
        <li>Projects</li>
        <li>Three</li>
        <li>Yuh yuh</li>
      </ul>
    </div>
  )
}