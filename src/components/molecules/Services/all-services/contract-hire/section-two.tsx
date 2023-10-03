import ImageOne from "../../../../../assets/staff-aug-img1.png";
import ImageTwo from "../../../../../assets/staff-aug-img2.png";
import ImageThree from "../../../../../assets/staff-aug-img3.png";
import ImageFour from "../../../../../assets/staff-aug-img4.png";
import ImageFive from "../../../../../assets/staff-aug-img5.png";
import ImageSix from "../../../../../assets/staff-aug-img6.png";
import ImageSeven from "../../../../../assets/staff-aug-img7.png";
import ImageEight from "../../../../../assets/staff-aug-img8.png";
import HeroBut from "../../../../atoms/general/hero-but";
import ServicesSectionTwoCard from "../../../../molecules/Services/services-section-two-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionTwo = () => {
  return (
    <div className="section-two">
        <ServiceSectionOneHead title="Our Contract Hire Services​" />
        <div className="services-section-two-cards">
          <ServicesSectionTwoCard
            img={ImageOne}
            title="Project-Specific Professionals"
            desc="Access skilled professionals for short-term assignments aligned with your project's scope and requirements."
          />
          <ServicesSectionTwoCard
            img={ImageTwo}
            title="Seasonal Support"
            desc="Enhance your team during busy seasons without the commitment of permanent hires. Our contract services provide the flexibility to manage workload fluctuations effectively."
          />
          <ServicesSectionTwoCard
            img={ImageThree}
            title="Specialized Skill Sets"
            desc="Leverage experts in niche fields to address specific challenges. Our contract professionals bring targeted skills that may not be readily available within your core team."
          />
          <ServicesSectionTwoCard
            img={ImageFour}
            title="Temporary Replacement"
            desc="When employees go on leave or require temporary replacements, our contract services ensure a seamless transition, maintaining project continuity."
          />
          <ServicesSectionTwoCard
            img={ImageFive}
            title="Short-Term Initiatives"
            desc="Execute short-term projects efficiently with dedicated professionals. Our contract hire services enable you to assemble a team that's tailored to the project's objectives."
          />
          <ServicesSectionTwoCard
            img={ImageSix}
            title="IT Infrastructure Service Hire"
            desc="Access IT infrastructure experts, including network engineers, system administrators, and cybersecurity specialists, on a contract basis."
          />
          <ServicesSectionTwoCard
            img={ImageSeven}
            title="Dev. Contract Hire"
            desc="Access skilled software developers, programmers, and coders on a contract basis for your software development projects."
          />
          <ServicesSectionTwoCard
            img={ImageEight}
            title="Cybersecurity Contract Hire"
            desc="Augment your cybersecurity team with experts in ethical hacking, threat detection, and security analysis."
          />
        </div>
        <HeroBut text="Schedule a call" link="/contact-us" />
    </div>
  )
}

export default SectionTwo