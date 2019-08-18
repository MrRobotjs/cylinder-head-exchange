import React from "react";
import { slide as Menu } from "react-burger-menu";
import 'src/components/sidebar.css'
import { Link } from 'gatsby'

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link 
      className="menu-item" 
      to="/" 
      activeClassName="active">
        Home
      </Link>

      <Link 
      className="menu-item" 
      to="/page-2" 
      activeClassName="active">
        Page 2
      </Link>

      <a href="mailto:contact@cylinderheadexchangeshop.com" target="_blank" className="contact">Contact Us</a>
    </Menu>
  );
};