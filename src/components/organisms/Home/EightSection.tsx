import EightSectionContainer from "../../molecules/Home/eight-section";
import ContactBG from "../../../assets/contact-bg.png";


const EightSection = () => {
  return (
    <div className="eight-section" id="home-form">
      <div className="eight-img">
        <img className="contactbg" src={ContactBG} alt="Contact-BG" />
        <div className="section-eight-layer"></div>
      </div>
      <EightSectionContainer />
    </div>
  );
};

export default EightSection;
