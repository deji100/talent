import ServicesSectionSixCard from "../../services-section-six-card";
import ServiceSectionOneHead from "../../services-section-one-head";

const SectionSix = () => {
  return (
    <div className="section-six">
      <ServiceSectionOneHead
        title="Frequently Asked Questions​"
        desc="Get Answers to Your Questions"
      />
      <div className="services-section-six-cards">
        <ServicesSectionSixCard
          question="What is staff augmentation?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How do I monitor the progress of augmented professionals in my team?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does AmorServ Talents select professionals for staff augmentation?"
          answer=""
        />
        <ServicesSectionSixCard
          question="How does AmorServ Talents ensure the quality of augmented staff?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can I adjust my team's size during different project phases?"
          answer=""
        />
        <ServicesSectionSixCard
          question="Can I scale the augmented team according to my project's changing needs?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What industries do your staff augmentation services cater to?"
          answer=""
        />
        <ServicesSectionSixCard
          question="What is the difference between staff augmentation and consulting services?"
          answer=""
        />
      </div>
    </div>
  );
};

export default SectionSix;
