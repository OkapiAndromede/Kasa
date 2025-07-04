import { useState } from "react";
import "./collapse.scss";
export default function Collapse() {
  return (
    <section className="quality">
      <div className="container">
        <Wrapper title={"Fiabilité"}>
          Les annonces postés sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et <br></br> toutes les
          informations sont régulièrement vérifiées par nos équipes.
        </Wrapper>
        <Wrapper title={"Respect"}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminiatoire ou de <br></br> perturbation du
          voisinage entraînera une exclusion de notre plateforme.
        </Wrapper>
        <Wrapper title={"Service"}>
          La qualité du service est au coeur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction,<br></br> que ce soit avec nos
          hôtes ou nos locataires, soit empreinte de respect et de
          bienveillance.
        </Wrapper>
        <Wrapper title={"Sécurité"}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement<br></br> correspond aux critères
          de sécurité établis par nos services. En laissant une note aussi bien
          à l'hôte qu'au<br></br> locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          <br></br> également des ateliers sur la sécurité domestique pour nos
          hôtes.
        </Wrapper>
      </div>
    </section>
  );
}

function Wrapper({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleContent = (event) => {
    event.stopPropagation();
    setIsActive((value) => !value);
  };
  return (
    <article className="quality__item">
      <div className="quality__item--header">
        <h3 className="quality__item--title">{title}</h3>
        <div className="quality__item--arrow" onClick={toggleContent}>
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {isActive ? (
        <div className="quality__item--content">
          <p>{children}</p>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}

function handleClick(setIsActive) {
  setIsActive((value) => !value);
}
