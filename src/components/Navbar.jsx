import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo Click → Home */}
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          PopScrupt
        </NavLink>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/" className="nav-item">Home</NavLink>
          </li>

          <li onClick={() => setOpen(false)}>
            <NavLink to="/services" className="nav-item">Services</NavLink>
          </li>

          <li onClick={() => setOpen(false)}>
            <NavLink to="/about" className="nav-item">About</NavLink>
          </li>

          <li onClick={() => setOpen(false)}>
            <NavLink to="/contact" className="nav-item">Contact</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
