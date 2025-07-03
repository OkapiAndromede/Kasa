import Navigation from "../../components/navBar/Navigation";
import Banner from "../../components/banner/Banner";

import aboutImg from "../../assets/image_about.svg";

function About() {
  return (
    <>
      <Navigation></Navigation>
      <Banner text={""} backgroundImage={aboutImg}></Banner>
      <h1>Page à propos</h1>
    </>
  );
}

export default About;
