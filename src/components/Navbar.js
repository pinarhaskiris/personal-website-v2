import React, { Component }  from 'react';
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="navbar">
        <NavItem title="Experience" to="experience_container" />
        <NavItem title="Projects" to="projects_container" />
        <NavItem title="Resume" to="resume_container" />
        <NavItem title="Art" to="art_container" />
        <NavItem title="Contact" to="contact_container" />
    </div>
  );
};

export default Navbar;
