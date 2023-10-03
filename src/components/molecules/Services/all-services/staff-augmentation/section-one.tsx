import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";
import ServicesSectionOneCard from "../../services-section-one-card";

const SectionOne = () => {
  return (
    <div className="section-one">
      <ServiceSectionOneHead
        title="Benefits of Staff Augmentation​"
        desc="Check out why you should consider IT staff augmentation."
      />
      <div className="section-cards">
        <ServicesSectionOneCard
          title="Strategic Expertise Injection"
          desc="Enhance your projects with targeted skills by seamlessly integrating professionals who bring specialized knowledge and fresh perspectives. These experts become a force multiplier, elevating your team's performance and infusing innovation into your endeavours."
        />
        <ServicesSectionOneCard
          title="Adaptive Scalability"
          desc="Experience dynamic workforce management that matches the ebb and flow of your projects. Whether you're facing rapid expansion or streamlined operation, staff augmentation enables you to scale your team precisely to project demands."
        />
        <ServicesSectionOneCard
          title="Cost-Efficient Agility"
          desc="Unleash cost savings without compromising quality. Staff augmentation offers a budget-friendly alternative to traditional hiring, reducing the financial burden of full-time employees while providing access to skilled talent."
        />
        <ServicesSectionOneCard
          title="Rapid Resource Availability"
          desc="Swiftly access a diverse pool of talent that suits your project's unique requirements. With staff augmentation, you can bypass lengthy recruitment processes and swiftly onboard professionals who are ready to contribute from day one."
        />
        <ServicesSectionOneCard
          title="Enhanced Versatility"
          desc="Tailor your team's skillet like never before. Staff augmentation empowers you to hand-pick professionals with the precise skills needed for a project's success. This customized approach allows your team to adapt various project demands."
        />
        <ServicesSectionOneCard
          title="Focused Project Delivery"
          desc="Forge a seamless connection between augmented professionals and your existing team, resulting in cohesive collaboration that drives project success. With staff augmentation, there's no compromise in alignment, communication, or goal achievement."
        />
      </div>
    </div>
  );
};

export default SectionOne;
