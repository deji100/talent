import HowWeWorkImageBanner from "../../../assets/how-sect-img.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TalentModalContext } from "../../../Layout";

const HowWeWorkSectionTwo = () => {
  const {setModalToggle} = useContext(TalentModalContext)

  return (
    <div className="how-section-two">
      <img src={HowWeWorkImageBanner} alt="Image Banner" />
      <div className="content">
        <h2>Experience High Productivity With The Best Remote African Talents.</h2>
        <Link to="" onClick={() => setModalToggle(prev => !prev)}>
          <button type="button" style={{cursor: "pointer"}}>Explore Talents</button>
        </Link>
      </div>
    </div>
  );
};

export default HowWeWorkSectionTwo;
