import React, { Component }  from 'react';
import {Link} from 'react-scroll'

const NavItem = ({ title, to }) => {
  return (
    <div className="navItem">
        <Link  to={ to } spy={true} smooth={true}> { title }</Link>
    </div>
  );
};

export default NavItem;
