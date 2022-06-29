import React, { useEffect, useState } from "react";

import { StarFillIcon, CpuIcon, LawIcon } from "@primer/octicons-react";
import axios from "axios";

import './styles/project.css';

export default function Project(props) {
  const [projectInfo, setProjectInfo] = useState({
    name: 'Loading...',
    license: {
      spdx_id: 'LOAD...'
    }
  });

  const projectPhoto = require(`../assets/images/${props.name}-photo.png`);

  useEffect(() => {
    axios
    .get(`https://api.github.com/repos/comav/${props.name}`)
    .then(res => setProjectInfo(res.data))
    .catch(err => console.log(err.message))
  }, [props.name])

  console.log(projectInfo)
  
  return (
    <div className="project-wrapper">
      <h3 className="highlighted project-name">{props.prettyName}</h3>
      <img src={projectPhoto.default} alt={`${props.prettyName}`} width={'95%'} />
      <p className="text project-description">{projectInfo.description}</p>
      <div className="project-bottom">
        <>
          <StarFillIcon size={26} />
          {projectInfo.stargazers_count}
        </>
        <>
          <CpuIcon size={26} />
          {projectInfo.language}
        </>
        <>
          <LawIcon size={26} />
          {projectInfo.license.spdx_id}
        </>
        <div onClick={() => window.open(`https://github.com/comav/${props.name}`)} style={{cursor: 'pointer'}}>
        🔗
        </div>
      </div>
    </div>
  )
}