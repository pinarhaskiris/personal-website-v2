import React, { Component }  from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tooltip } from '@mui/material';


const ArchiveItem = ({ title, description, tags = [], githubLink, liveLink }) => {


    return (
        <div className="archive_item">
            <h3>{ title }</h3>
            <p>{ description }</p>
            <ul className="tags">
                { tags }
            </ul>
            <div>
                <Tooltip title={<h1 style={{ margin: "5px" }}>Github</h1>} arrow placement="top">{<a href={ githubLink } target="_blank"><BsGithub size={40}/></a>}</Tooltip>
                {liveLink ? <Tooltip arrow title={<h1 style={{ margin: "5px" }}>Live</h1>} placement="top">{<a href={ liveLink } target="_blank"><BsGlobe size={40} /></a>}</Tooltip>: null}
            </div>
        </div>
    )
}

export default ArchiveItem