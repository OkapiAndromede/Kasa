import { NavLink } from "react-router-dom";
import imageError from "../../assets/image_error.svg";
import "./redirection.scss";
function Redirection() {
  return (
    <div className="redirection">
      <img
        className="redirection__image"
        src={imageError}
        alt="Erreur 404"
      ></img>
      <p className="redirection__txt">
        Oups! La page que <br className="redirection__txt--break"></br> vous
        demandez n'existe pas.
      </p>
      <NavLink to={"/"}>
        <p className="redirection__cta">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
}
export default Redirection;
