import "./banner.scss";
function Banner({ text, backgroundImage }) {
  return (
    <div
      className="heroBanner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="heroBanner__box">
        <p className="heroBanner__txt"> {text} </p>
      </div>
    </div>
  );
}
export default Banner;
