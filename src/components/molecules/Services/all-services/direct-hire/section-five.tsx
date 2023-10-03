import ServicesSectionFiveForm from "../../services-section-five-form";
import upper from "../../../../../assets/up.png";
import down from "../../../../../assets/down.png";

const SectionFive = () => {
  return (
    <div className="section-five">
      <img className="upperImage" src={upper} alt="Upper" />
      <ServicesSectionFiveForm
        desc="Hiring the best talents can be daunting"
        title="Let’s Help you Simplify the process."
      />
      <img className="downImage" src={down} alt="Down" />
    </div>
  );
};

export default SectionFive;
