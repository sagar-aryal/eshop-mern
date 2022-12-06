import AllCategories from "../../components/allCategories/AllCategories";
import NavBar from "../../components/navbar/NavBar";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import OpeningInfo from "../../components/openingInfo/OpeningInfo";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <AllCategories />
      <NavBar />
      <SocialMedia />
      <OpeningInfo />
    </div>
  );
};

export default SubHeader;
