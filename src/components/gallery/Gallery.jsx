/*const responseData = await fetch("../../data/logements.json");
const apartmentData = await responseData.json();
*/

import { useEffect, useState } from "react";

function Gallery() {
  const [apartmentData, setApartmentData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/logements.json");
        const data = await response.json();

        setApartmentData(data);
        const aptTitle = data.map((apartment) => apartment.title);
        console.log(aptTitle);
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="apartmentContainer"></div>
    </>
  );
}
export default Gallery;
