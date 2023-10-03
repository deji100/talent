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
        <ServiceSectionOneHead title="Our Staff Augmentation Services​" />
        <div className="services-section-two-cards">
          <ServicesSectionTwoCard
            img={ImageOne}
            title="Traditional Staffing"
            desc="With our master vendor staffing service, we take on the role of a single point of contact for all your staffing needs."
          />
          <ServicesSectionTwoCard
            img={ImageTwo}
            title="Master Vendor Staffing"
            desc="Our traditional staffing service connects you with a diverse range of skilled professionals across various industries."
          />
          <ServicesSectionTwoCard
            img={ImageThree}
            title="Specialized Staffing"
            desc="Our specialized staffing service offers a tailored approach to sourcing professionals with niche skills."
          />
          <ServicesSectionTwoCard
            img={ImageFour}
            title="Gig Platforms"
            desc="Embrace the gig economy with our gig platform service. We connect you with on-demand professionals who excel in short-term, project-based engagements."
          />
          <ServicesSectionTwoCard
            img={ImageFive}
            title="Temp-to-Perm Staffing"
            desc="Seamlessly transition temporary professionals into permanent team members with our temporary-to-permanent staffing service."
          />
          <ServicesSectionTwoCard
            img={ImageSix}
            title="Global Staffing Solutions"
            desc="Explore global opportunities with our global staffing service. Connect with skilled professionals from around the world who can contribute to your projects remotely"
          />
          <ServicesSectionTwoCard
            img={ImageSeven}
            title="Project-Based Staffing"
            desc="With our project-based staffing service, you can quickly assemble a specialized team tailored to your project's unique requirements."
          />
          <ServicesSectionTwoCard
            img={ImageEight}
            title="Tech Talent in Africa"
            desc="Our African Tech Talent Recruitment service specializes in connecting businesses with skilled engineering professionals from the African continent."
          />
        </div>
        <HeroBut text="Schedule a call" link="/contact-us" />
    </div>
  )
}

export default SectionTwo