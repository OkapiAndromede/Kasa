import { useEffect, useState } from "react";

export default function useApartment(id) {
  const [apartmentData, setApartmentData] = useState(null);
  const [apartementImg, setApartmentImg] = useState([]);
  const [nbrImage, setNbrImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        const foundApartement = data.find((apartement) => apartement.id === id);
        if (foundApartement) {
          setApartmentData(foundApartement);
          setApartmentImg(foundApartement.pictures);
          setNbrImage(foundApartement.pictures.length);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { apartmentData, apartementImg, nbrImage, loading, notFound };
}
