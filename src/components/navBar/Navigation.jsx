import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <ul>
        <NavLink to={"/"}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
