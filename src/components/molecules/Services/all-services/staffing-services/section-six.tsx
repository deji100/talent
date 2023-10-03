import ServicesSectionSixCard from "../../services-section-six-card";
import ServiceSectionOneHead from "../../services-section-one-head";

const SectionSix = () => {
  return (
    <div className="section-six">
      <ServiceSectionOneHead
        title="Frequently Asked Questions​"
        desc="Your questions answered. Explore our staffing solutions and find the right tech talent for your projects."
      />
      <div className="services-section-six-cards">
        <ServicesSectionSixCard
          question="What is staffing in business?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How do you ensure the quality of sourced talent?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does staffing benefit my business?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How can I get started with your staffing services?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What staffing solutions do you offer?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What types of roles can you fill?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can you help with specialized roles?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What sets your staffing services apart from others?"
          answer=""
        />
      </div>
    </div>
  );
};

export default SectionSix;
