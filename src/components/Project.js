import React, { Component }  from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tooltip } from '@mui/material';

const Project = ({ title, description, tags, githubLink, img, liveLink }) => {
  
  return (
    <div className="project">
      <img src={ img }/>
      <div className="content">
          <h2>{ title } <Tooltip arrow placement="top" title={<h1 style={{ margin: "5px" }}>Github</h1>}>{<a href={ githubLink } target="_blank"><BsGithub size={40} /></a>}</Tooltip>
          {liveLink ? <Tooltip arrow placement="top" title={<h1 style={{ margin: "5px" }}>Live</h1>}>{<a href={ liveLink } target="_blank"><BsGlobe size={40} /></a>}</Tooltip> : null}</h2>
          <div className="description">
            { description }
          </div>
          <div className="tags">
            { tags }
          </div>
      </div>
        
    </div>
  )
}

export default Project


