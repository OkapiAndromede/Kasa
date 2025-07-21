import Navigation from "../../components/navBar/Navigation";
import SlideShow from "../../components/slideShow/SlideShow";
import Footer from "../../components/footer/Footer";
function House() {
  return (
    <>
      <div className="house__container">
        <Navigation></Navigation>
        <SlideShow></SlideShow>
      </div>
      <Footer></Footer>
    </>
  );
}
export default House;
