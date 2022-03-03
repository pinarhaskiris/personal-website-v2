import NavItem from "./NavItem";

import projects from "../images/projects.png";
import resume from "../images/resume.png";
import archive from "../images/archive.png";
import art from "../images/art.png";
import contact from "../images/contact.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <NavItem title="Projects" />
        <NavItem title="Resume" />
        <NavItem title="Archive" />
        <NavItem title="Art" />
        <NavItem title="Contact" />
    </div>
  );
};

export default Navbar;
