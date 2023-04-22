import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="header__navbar navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) => {
              let baseClassName = "navbar__link ";
              return isActive ? baseClassName + "active" : isPending ? baseClassName + "pending" : baseClassName;
            }}>
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to={`/projects`}
            className={({ isActive, isPending }) => {
              let baseClassName = "navbar__link ";
              return isActive ? baseClassName + "active" : isPending ? baseClassName + "pending" : baseClassName;
            }}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
