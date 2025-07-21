import Banner from "../../components/banner/Banner";
import Navigation from "../../components/navBar/Navigation";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

//Import de l'image de la bannière
import heroBannerImg from "../../assets/image_heroBanner.svg";

function Home() {
  return (
    <>
      <div className="home__container">
        <Navigation></Navigation>
        <Banner
          text={"Chez vous, partout et ailleurs"}
          backgroundImage={heroBannerImg}
        ></Banner>
        <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
