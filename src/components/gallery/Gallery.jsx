import { useEffect, useState } from "react";
import "./gallery.scss";

function Gallery() {
  const [apartmentData, setApartmentData] = useState([]);
  // exécute le code après que le composant est rendu dans la page
  useEffect(() => {
    async function fetchData() {
      try {
        // Récupération des données sous forme d'objet JS
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        // Mise à jour de l'état de la variable apartmentData
        setApartmentData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="apartmentContainer">
        {apartmentData.map((apartment) => (
          <article key={apartment.id} className="apartmentContainer__card">
            <div className="apartmentContainer__card--shadow">
              <img
                className="apartmentContainer__card--img"
                src={apartment.cover}
                alt={apartment.title}
              ></img>
              <h3 className="apartmentContainer__card--title">
                {apartment.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
export default Gallery;
