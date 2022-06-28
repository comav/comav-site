import React, { useState } from "react";

export default function Divider(props) {
  const [color, setColor] = useState('white');
  return (
    <div style={{backgroundColor: color, width: '100%', height: 2}} />
  )
}