import React, { Component }  from 'react';
import NavItem from "./NavItem";

import projects from "../images/projects.png";
import resume from "../images/resume.png";
import archive from "../images/archive.png";
import art from "../images/art.png";
import contact from "../images/contact.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <NavItem title="Projects" to="projects_container" />
        <NavItem title="Resume" to="resume_container" />
        <NavItem title="Archive" to="archive_container" />
        <NavItem title="Art" to="art_container" />
        <NavItem title="Contact" to="contact_container" />
    </div>
  );
};

export default Navbar;
