import ServicesSectionSixCard from "../../services-section-six-card";
import ServiceSectionOneHead from "../../services-section-one-head";

const SectionSix = () => {
  return (
    <div className="section-six">
      <ServiceSectionOneHead
        title="Frequently Asked Questions​"
        desc="Let’s tackle some of your questions. If your needed question is not answered here, contact us and we will be glad to attend to you."
      />
      <div className="services-section-six-cards">
        <ServicesSectionSixCard
          question="What is Contract Hire?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does the Contract Hire process work?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does Contract Hire differ from permanent hiring?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What types of tech talent does AmorServ Talents specialize in recruiting?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What are the advantages of Contract Hire?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does the contract hiring process work with AmorServ Talents?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What industries benefit from Contract Hire?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What industries does AmorServ Talents serve for tech talent recruitment?"
          answer=""
        />
      </div>
    </div>
  );
};

export default SectionSix;
