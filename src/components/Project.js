import React, { Component }  from 'react';
import { BsGithub } from 'react-icons/bs';

const Project = ({ title, description, tags, githubLink, img }) => {

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
            <h2>{ title } <a href={ githubLink }><BsGithub size={25}/></a> </h2>
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


