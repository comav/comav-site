import React from "react";

export default function Divider(props) {

  if (props.vertical) {
    return (
      <div style={{backgroundColor: 'white', width: 2, height: '84vh', marginTop: '8vh'}} />
    )
  } else {
    return (
      <div style={{backgroundColor: 'white', width: '100%', height: 2}} />
    )
  }
}