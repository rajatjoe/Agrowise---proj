import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/feature'>Tracking Farm</Link></li>
        <li><Link to='/suggestion'>Suggestion</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
