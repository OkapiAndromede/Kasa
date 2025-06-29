import { NavLink } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="../public/LOGO.svg"
        alt="Logo Kasa"
      ></img>
      <ul className="navbar__link">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "navbar__link--active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={(nav) => (nav.isActive ? "navbar__link--active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
