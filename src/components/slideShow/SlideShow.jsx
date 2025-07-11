import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./slideShow.scss";
function SlideShow() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [apartementImg, setApartmentImg] = useState([]);
  let [index, setIndex] = useState(0);
  const [nbrImage, setNbrImage] = useState(0);

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

  useEffect(() => {
    if (apartmentData) {
      //Si apartmentData est truthy alors je stock les images ds apartmentImg
      setApartmentImg(apartmentData.pictures);
      setNbrImage(apartmentData.pictures.length);
    }
  }, [apartmentData]);

  function sliderUpdtateLeft() {
    //lecture du state à partir de la valeur index en temps réel
    setIndex((prevIndex) => (prevIndex === 0 ? nbrImage - 1 : prevIndex - 1));
  }
  function sliderUpdtateRight() {
    setIndex((prevIndex) =>
      prevIndex < nbrImage - 1 ? prevIndex + 1 : (prevIndex = 0)
    );
  }

  return (
    <div className="slideShowContainer">
      <img
        className="slideShowContainer__img"
        src={apartementImg[index]}
        alt="Photo de l'appartement"
      />
      <svg
        onClick={sliderUpdtateRight}
        className="slideShowContainer__arrow--right"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
      <svg
        onClick={sliderUpdtateLeft}
        className="slideShowContainer__arrow--left"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
      <p className="slideShowContainer__txt">{`${index + 1}/${nbrImage}`}</p>
    </div>
  );
}

export default SlideShow;
