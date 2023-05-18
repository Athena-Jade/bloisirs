import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <header>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h3 className="nom-site">Mont Merveilleux</h3>
        </Link>
        <nav className="navbar">
          <div className="navbar-container"></div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/packages"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Formules
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </>
  );
}

export default Navbar;
