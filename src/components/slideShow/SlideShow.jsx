import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SlideShow() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Récupération des données sous forme d'objet JS
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        //Recherche de l'apartement avec l'id où l'on a cliqué précedemment
        const foundApartement = data.find((apartement) => apartement.id === id);
        setApartmentData(foundApartement);
      } catch {
        console.error("Erreur lors du chargement des données", error);
      }
    }
    fetchData();
  }, [id]);
}

export default SlideShow;
