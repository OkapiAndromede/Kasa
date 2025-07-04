import Navigation from "../../components/navBar/Navigation";
import Banner from "../../components/banner/Banner";

import aboutImg from "../../assets/image_about.svg";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";

function About() {
  return (
    <>
      <Navigation></Navigation>
      <Banner text={""} backgroundImage={aboutImg}></Banner>
      <Collapse></Collapse>
      <Footer></Footer>
    </>
  );
}

export default About;
