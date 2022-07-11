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
                <Tooltip title='Github' arrow placement="top">{<a href={ githubLink } target="_blank"><BsGithub size={25}/></a>}</Tooltip>
                {liveLink ? <Tooltip arrow title='Live' placement="top">{<a href={ liveLink } target="_blank"><BsGlobe size={25} /></a>}</Tooltip>: null}
            </div>
        </div>
    )
}

export default ArchiveItem