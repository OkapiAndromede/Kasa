import Banner from "../../components/banner/Banner";
import Navigation from "../../components/navBar/Navigation";
import Gallery from "../../components/gallery/Gallery";

function Home() {
  return (
    <>
      <Navigation></Navigation>
      <Banner></Banner>
      <Gallery></Gallery>
      <h1>Page d'accueil</h1>
    </>
  );
}

export default Home;
