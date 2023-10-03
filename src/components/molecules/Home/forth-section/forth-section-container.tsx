import SectionHeading from "../../General/section-heading";
import ForthSectionCard from "./forth-section-card";
import JobOne from "../../../../assets/jobone.png";
import JobTwo from "../../../../assets/jobtwo.png";
import JobThree from "../../../../assets/jobthree.png";
import JobFour from "../../../../assets/jobfour.png";
import JobFive from "../../../../assets/jobfive.png";
import JobSix from "../../../../assets/jobsix.png";
import JobSeven from "../../../../assets/jobseven.png";
import JobEight from "../../../../assets/jobeight.png";
import HeroBut from "../../../atoms/general/hero-but";


const ForthSectionContainer = () => {
  return (
    <div className="forth-section-container">
      <SectionHeading
        title="Featured Jobs"
        desc="We pre-vet remote talents in Africa like you across various expertise and skills. Our vetting process is rigorous, but at the end it will worth all your effort."
      />
      <div className="forth-section-cards">
        <ForthSectionCard
          img={JobOne}
          title="Developer"
          location="Muscat"
          badge="Full-Time"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobTwo}
          title="Graphics Designer"
          location="Dubai"
          badge="Remote"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobThree}
          title="UX Designer"
          location="Chicago"
          badge="Part Time"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobFour}
          title="Product Manager"
          location="Job Location"
          badge="Remote"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
      </div>
      <div className="forth-section-cards">
        <ForthSectionCard
          img={JobFive}
          title="Developer"
          location="Muscat"
          badge="Full-Time"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobSix}
          title="Graphics Designer"
          location="Dubai"
          badge="Remote"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobSeven}
          title="UX Designer"
          location="Chicago"
          badge="Part Time"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
        <ForthSectionCard
          img={JobEight}
          title="Product Manager"
          location="Job Location"
          badge="Remote"
          desc="Are you an experienced and highly skilled Developer?, join our team to build and ship exciting and innovative products"
        />
      </div>
      <HeroBut link="talent-list" text="Get Started" />
    </div>
  );
};

export default ForthSectionContainer;
