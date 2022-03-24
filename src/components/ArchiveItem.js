import React, { Component }  from 'react';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tooltip } from '@mui/material';


const ArchiveItem = ({ title, description, tags = [], githubLink, liveLink }) => {

    const tag_list = tags.map((tag, index) =>
        <li key={index}>{tag}</li>
    );

    return (
        <div className="archive_item">
            <h3>{ title }</h3>
            <p>{ description }</p>
            <ul className="tag_list">
                { tag_list }
            </ul>
            <div>
                <Tooltip title="GitHub" arrow placement="top">{<a href={ githubLink }><BsGithub size={20}/></a>}</Tooltip>
                {liveLink ? <Tooltip arrow title="Live" placement="top">{<a href={ liveLink }><BsGlobe size={20} /></a>}</Tooltip>: null}
            </div>
        </div>
    )
}

export default ArchiveItem