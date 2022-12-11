import "./HeroBanner.css";

import herobanner from "../../images/herobanner.avif";

const HeroBanner = () => {
  return (
    <div className="herobanner">
      <img src={herobanner} alt="herobanner" />
    </div>
  );
};

export default HeroBanner;
