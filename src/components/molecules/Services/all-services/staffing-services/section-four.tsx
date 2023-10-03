import Overview from "../../../../../assets/overview5.png";
import ServicesSectionProcessHead from "../../../../molecules/Services/services-section-process-head";
import ServicesSectionFourCard from "../../../../molecules/Services/services-section-four-card";

const SectionFour = () => {
  return (
    <div className="section-four">
      <ServicesSectionProcessHead
        title="Our Process"
        desc="Getting you the right remote engineer with precision"
      />
      <div className="section-four-cards-img">
        <div className="section-four-cards">
          <ServicesSectionFourCard
            index="1"
            title="Strategic Needs Assessment"
            type="odd"
            desc="We start by conducting a thorough analysis of your tech staffing requirements, understanding your project goals, and defining the skills and expertise needed."
          />
          <ServicesSectionFourCard
            index="2"
            title="Talent Sourcing"
            type="even"
            desc=" Leveraging our extensive network, we identify and shortlist candidates with the right technical skills, experience, and cultural fit for your organization."
          />
          <ServicesSectionFourCard
            index="3"
            title="Rigorous Evaluation"
            type="odd"
            desc="Our experts conduct comprehensive interviews, technical assessments, and reference checks to ensure the selected candidates meet your quality standards."
          />
          <ServicesSectionFourCard
            index="4"
            title="Seamless Integration"
            type="even"
            desc="Once you've chosen your remote tech professionals, we facilitate a smooth onboarding process, ensuring they integrate seamlessly into your team and project."
          />
          <ServicesSectionFourCard
            index="5"
            title="Ongoing Support"
            type="odd"
            desc="Throughout the engagement, we provide continuous support, monitoring progress, ensuring your remote staff performs at their best."
          />
        </div>
        <div className="bannerImage">
          <img src={Overview} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
