import ServicesSectionSixCard from "../../services-section-six-card";
import ServiceSectionOneHead from "../../services-section-one-head";

const SectionSix = () => {
  return (
    <div className="section-six">
      <ServiceSectionOneHead
        title="Frequently Asked Questions​"
        desc="Discover seamless IT solutions through our expert project outsourcing services"
      />
      <div className="services-section-six-cards">
        <ServicesSectionSixCard
          question="What is IT outsourcing?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How do I choose the right IT outsourcing partner?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does IT outsourcing benefit businesses?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How do you ensure data security and confidentiality in outsourced projects?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What types of IT functions can be outsourced?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can you handle both short-term and long-term IT projects?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Is IT outsourcing suitable for businesses of all sizes?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can you manage multiple projects simultaneously?"
          answer=""
        />
      </div>
    </div>
  );
};

export default SectionSix;
