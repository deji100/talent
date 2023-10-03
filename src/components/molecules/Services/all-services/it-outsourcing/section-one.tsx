import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";
import ServicesSectionOneCard from "../../services-section-one-card";

const SectionOne = () => {
  return (
    <div className="section-one">
      <ServiceSectionOneHead
        title="Benefits of IT Outsourcing​"
        desc="IT project outsourcing is a proven catalyst to taking your projects to new heights."
      />
      <div className="section-cards">
        <ServicesSectionOneCard
          title="Access to Expertise"
          desc="IT project outsourcing grants access to specialized knowledge and skills not readily available in-house."
        />
        <ServicesSectionOneCard
          title="Cost Efficiency"
          desc="By outsourcing IT project functions, you eliminate the need for extensive investments in infrastructure, personnel, and training, leading to significant cost savings."
        />
        <ServicesSectionOneCard
          title="Focus on Core Competencies"
          desc="Outsourcing non-core IT tasks allows your team to concentrate on strategic initiatives, innovation, and areas that directly contribute to your business objectives."
        />
        <ServicesSectionOneCard
          title="Scalability and Flexibility"
          desc="IT outsourcing offers the flexibility to scale resources up or down according to project requirements, ensuring optimal allocation of resources."
        />
        <ServicesSectionOneCard
          title="Reduced Time-to-Market"
          desc="Leveraging external IT expertise speeds up project development and implementation, enabling you to bring products and services to market faster."
        />
        <ServicesSectionOneCard
          title="Risk Mitigation"
          desc="IT project outsourcing providers often have established protocols for risk management and security, helping to minimize potential vulnerabilities."
        />
      </div>
    </div>
  );
};

export default SectionOne;
