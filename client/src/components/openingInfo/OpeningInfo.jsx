import { FaPhoneVolume } from "react-icons/fa";

const openingInfo = () => {
  return (
    <div className="openingInfo">
      <FaPhoneVolume style={{ fontSize: "24px" }} />
      <div className="info">
        <span>(358) 400272727</span>
        <p>Mon-Fri 09:00-20:00</p>
      </div>
    </div>
  );
};

export default openingInfo;
