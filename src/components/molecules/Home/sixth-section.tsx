import Banner from "../../../assets/banner.png";
import SectionHeading from "../General/section-heading";

const SixthSectionBanner = () => {
  return (
    <div className="sixth-section-banner">
      <div className="layer"></div>
      <img src={Banner} alt="Banner" />
      <div>
        <SectionHeading
          title="Why We Hire from Africa?"
          desc="We hire from Africa for three compelling reasons. Africa's talent pool is both abundant and growing, with diverse skill sets emerging from a dynamic landscape. Also, we believe that talent knows no geographical boundaries, and African professionals bring exceptional expertise to the global stage. In addition, African talent offers a cost-effective solution without compromising quality, allowing businesses to thrive while contributing to growth and fostering a more inclusive global workforce."
        />
      </div>
    </div>
  );
};

export default SixthSectionBanner;
