import ThirdSectionContainer from "../../molecules/Home/third-section/section-container";
import Dots from "../../../assets/dots.png";

const ThirdSection = () => {
  return (
    <div className="third-section-board">
      <div className="third-section-container">
        <img className="upper-dots" src={Dots} alt="Dots" />
        <ThirdSectionContainer />
        <img className="lower-dots" src={Dots} alt="Dots" />
      </div>
    </div>
  );
};

export default ThirdSection;
