import ServicesSectionSixCard from "../../services-section-six-card";
import ServiceSectionOneHead from "../../services-section-one-head";

const SectionSix = () => {
  return (
    <div className="section-six">
      <ServiceSectionOneHead
        title="Frequently Asked Questions​"
        desc="Explore our frequently asked questions to discover how AmorServ Talents can optimize your talent acquisition journey."
      />
      <div className="services-section-six-cards">
        <ServicesSectionSixCard
          question="What does direct hire mean?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Does direct hire enhance employee retention?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What is another word for direct hire?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What is the advantage of Direct Hire over other recruitment methods?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Is direct hiring good for my business?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can AmorServ Talents assist with specialized or niche Direct Hires?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How long does the direct hire process take?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What factors can influence the timeline of the Direct Hire process?"
          answer=""
        />
      </div>
    </div>
  );
};

export default SectionSix;
