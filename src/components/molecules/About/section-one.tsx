import SectionTitle from "../../atoms/general/section-title";
import AboutImage from "../../../assets/about.png";

const SectionOneContainer = () => {
  return (
    <div className="section-one-container">
      <SectionTitle title="Who We Are" />
      <div className="content">
        <img src={AboutImage} alt="About Image" />
        <p>
          We're more than a talent solutions company; we're an outsourcing
          company providing businesses with pre-vetted tech talents from Africa.
          We seek to to unite the best talents with visionary companies, forging
          partnerships that propel businesses to unprecedented success. Our
          skilled human resources and talent acquisition experts with years of
          working experience have all it takes to connect companies with the
          best remote-talents. With a steadfast commitment to excellence, we
          take full responsibility for the talents we source, ensuring they
          seamlessly integrate into your projects.
        </p>
      </div>
    </div>
  );
};

export default SectionOneContainer;
