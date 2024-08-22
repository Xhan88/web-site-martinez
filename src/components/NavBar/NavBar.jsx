// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import '../NavBar/NavBar.css'

// const NavBar = () => {
//   return (
//     <div>
//       <ul className='NavBar'>

//         <Link to='/'>
//           <li>home</li>
//         </Link>
        
//         <NavLink to='/Works'>
//           <li>Works</li>
//         </NavLink>
        
//         <NavLink to='/AboutMe'>
//           <li>About Me</li>
//         </NavLink>
        
//         <NavLink to='/Contact'>
//           <li>Contact</li>
//         </NavLink>
        
//       </ul>
//     </div>
//   )
// }

// export default NavBar

import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de que este archivo esté correctamente vinculado

const NavBar = () => {
  const location = useLocation();
  const [navbarClass, setNavbarClass] = useState('navbar-home');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setNavbarClass('navbar-home');
        break;
      case '/Works':
        setNavbarClass('navbar-works');
        break;
      case '/AboutMe':
        setNavbarClass('navbar-about');
        break;
      case '/Contact':
        setNavbarClass('navbar-contact');
        break;
      default:
        setNavbarClass('navbar-home');
    }
  }, [location.pathname]);

  return (
    <div className={`NavBar ${navbarClass}`}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <NavLink to='/Works'>Works</NavLink>
        </li>
        <li>
          <NavLink to='/AboutMe'>About Me</NavLink>
        </li>
        <li>
          <NavLink to='/Contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

