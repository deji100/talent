import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";
import ServicesSectionOneCard from "../../services-section-one-card";

const SectionOne = () => {
  return (
    <div className="section-one">
      <ServiceSectionOneHead
        title="Benefits of Contract Hire​"
        desc="Drive Excellence with Agile Workforce Solutions through Contract Hiring"
      />
      <div className="section-cards">
        <ServicesSectionOneCard
          title="Targeted Expertise"
          desc="Contract hire provides the agility your business needs to scale up or down according to project demands."
        />
        <ServicesSectionOneCard
          title="Focused Project Delivery"
          desc="Tap into a diverse talent pool of specialized professionals who bring specific skills and experience to address your project's unique requirements."
        />
        <ServicesSectionOneCard
          title="Cost-Efficiency"
          desc="Contract hire eliminates the costs associated with traditional recruitment and onboarding. By partnering with specialized staffing agencies, you streamline the process and reduce overhead expenses."
        />
        <ServicesSectionOneCard
          title="Swift Deployment"
          desc="Contract professionals are ready to contribute from day one. This accelerates project timelines, allowing you to swiftly execute tasks without lengthy onboarding periods."
        />
        <ServicesSectionOneCard
          title="Reduced Risk"
          desc="Contract hire mitigates the risks associated with permanent employment commitments. If a project concludes or priorities shift, you can seamlessly end the engagement without long-term obligations."
        />
        <ServicesSectionOneCard
          title="Versatile Adaptability"
          desc="With contract hire, you can adjust your team's composition as projects evolve. Easily bring in new expertise or skill sets when project requirements change, ensuring your team remains responsive and well-equipped."
        />
      </div>
    </div>
  );
};

export default SectionOne;
