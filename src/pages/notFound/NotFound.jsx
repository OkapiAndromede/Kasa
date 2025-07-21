import Navigation from "../../components/navBar/Navigation";
import Redirection from "../../components/redirection/Redirection";
import Footer from "../../components/footer/Footer";

function NotFound() {
  return (
    <>
      <div className="notFound__container">
        <Navigation></Navigation>
        <Redirection></Redirection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default NotFound;
