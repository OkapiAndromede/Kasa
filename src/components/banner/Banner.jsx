import "./banner.scss";
function Banner({ text, backgroundImage, className }) {
  return (
    <div
      className="heroBanner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`heroBanner__box ${className}`}>
        <p className="heroBanner__txt"> {text} </p>
      </div>
    </div>
  );
}
export default Banner;
