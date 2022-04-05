import React, { Component }  from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tooltip } from '@mui/material';

const Project = ({ title, description, tags, githubLink, img, liveLink }) => {

  const tag_list = tags.map((tag, index) =>
    <li key={index}>{tag}</li>
  );

  const desc_list = description.map((desc, index) =>
      <li key={index}>{desc}</li>
  );
  
  return (
    <div className="project">
      <img src={ img }/>
      <div>
          <h2>{ title } <Tooltip arrow placement="top" title="Github">{<a href={ githubLink } target="_blank"><BsGithub size={25} /></a>}</Tooltip>
          {liveLink ? <Tooltip arrow placement="top" title="Live">{<a href={ liveLink } target="_blank"><BsGlobe size={25} /></a>}</Tooltip> : null}</h2>
          <ul className="desc_list">
            { desc_list }
          </ul>
          <ul className="tag_list">
              { tag_list }
          </ul>
      </div>
        
    </div>
  )
}

export default Project


