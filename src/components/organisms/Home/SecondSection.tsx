import SecondSectionHeading from "../../molecules/Home/second-section/SecondSectionHeading";
import SectionCard from "../../molecules/Home/second-section/section-card";
import SecOneImg from "../../../assets/secone.png";
import SecTwoImg from "../../../assets/sectwo.png";
import SecThreeImg from "../../../assets/secthree.png";
import SecFourImg from "../../../assets/secfour.png";

const SecondSection = () => {
  return (
    <div className="second-section">
      <SecondSectionHeading />
      <div className="section-card-container">
        <div className="cards-container">
          <SectionCard
            img={SecOneImg}
            title="Access Exceptional Talent"
            desc="Tap into a diverse pool of the best pre-vetted remote talents across Africa. We meticulously source candidates, ensuring you're connected with top-tier talent."
          />
          <SectionCard
            img={SecTwoImg}
            title="Cost Efficiency"
            desc="By partnering with us, you not only gain access to exceptional talent but also reduce the overhead of sourcing, hiring, and human resources management."
          />
          <SectionCard
            img={SecThreeImg}
            title="Hire for Any Role"
            desc="From senior experts to junior talent, we've got your hiring needs covered. Our vast network guarantees the perfect fit for every position. "
          />
          <SectionCard
            img={SecFourImg}
            title="Risk Mitigation"
            desc="Minimize hiring risks by relying on our rigorous vetting process, which includes thorough background checks and verifications."
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
