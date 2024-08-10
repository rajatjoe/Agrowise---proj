import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
  return (
    <div className={show ? 'sidenav active ' : 'sidenav '}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/feature'>Tracking Farm</Link></li>
        <li><Link to='/suggestion'>Suggestion</Link></li>
<<<<<<< HEAD
=======
        <li><Link to='/Diseasse'>Diseasse</Link></li>
>>>>>>> 25391c22eefe54048c640bba353272bb6a555c03
        <li><Link to='/scheme'>Schemes</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
