import ServicesSectionFiveForm from "../../services-section-five-form";
import upper from "../../../../../assets/up.png";
import down from "../../../../../assets/down.png";

const SectionFive = () => {
  return (
    <div className="section-five">
      <img className="upperImage" src={upper} alt="Upper" />
      <ServicesSectionFiveForm
        desc="You’re in need of skilled contract experts?"
        title="Get in Touch with Us Today"
      />
      <img className="downImage" src={down} alt="Down" />
    </div>
  );
};

export default SectionFive;
