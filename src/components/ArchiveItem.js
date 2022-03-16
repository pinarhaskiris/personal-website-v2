import React, { Component }  from 'react';
import { BsGithub } from 'react-icons/bs';

const ArchiveItem = ({ title, description, tags = [], githubLink }) => {

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
            <a href={ githubLink }><BsGithub size={20}/></a>
        </div>
    )
}

export default ArchiveItem