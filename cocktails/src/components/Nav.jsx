import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  
  const links = [
    {
      id: 1,
      path: "/home",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    }
  ]

  return (
    <nav className="navbar navbar-nav navbar-expand-lg navbar-dark bg-dark">
      <p className="navbar-brand">The<span>Cocktail</span>DB</p>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav custom">
          <li key={links[0].id} className="nav-item-right">
            <NavLink 
            className='nav-link-color custom-underline' 
            activeClassName="active-link" exact
            to={links[0].path}>{links[0].text}
            </NavLink>
          </li>
          <li key={links[1].id} className="nav-item-right">
            <NavLink 
            className='nav-link-color custom-underline' 
            activeClassName="active-link" exact
            to={links[1].path}>{links[1].text}
            </NavLink>
          </li>
          <li className="nav-item-right">
            <a className="nav-link-color custom-underline" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
