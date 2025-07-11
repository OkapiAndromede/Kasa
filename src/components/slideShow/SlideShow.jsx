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
  //Bloque le rendu principal tant que les données ne sont pas prêtes
  if (!apartmentData) {
    return <div>Chargement...</div>;
  }
  return (
    <>
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
      <article className="descriptionContainer">
        <div className="descriptionContainer__content">
          <h2 className="descriptionContainer__content--title">
            {apartmentData.title}
          </h2>
          <p className="descriptionContainer__content--location">
            {apartmentData.location}
          </p>
          <ul className="descriptionContainer__content--tags">
            {apartmentData.tags.map((tag, index) => (
              <li className="item" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="descriptionContainer__info">
          <div className="descriptionContainer__info--owner">
            <p>{apartmentData.host.name}</p>
            <img
              src={apartmentData.host.picture}
              alt="Photo du propriétaire"
            ></img>
          </div>
          <div className="descriptionContainer__info--rating">
            {/* Création d'un tableau de 5 élements undefined et on map dessus */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
                  fill={i < apartmentData.rating ? "#FF6060" : "#E3E3E3"}
                />
              </svg>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

export default SlideShow;
