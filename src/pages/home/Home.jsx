import Banner from "../../components/banner/Banner";
import Navigation from "../../components/navBar/Navigation";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Navigation></Navigation>
      <Banner></Banner>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}

export default Home;
