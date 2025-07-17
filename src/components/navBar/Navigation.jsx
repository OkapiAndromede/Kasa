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
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "navbar__link--active" : "")}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/about"}
            className={(nav) => (nav.isActive ? "navbar__link--active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
