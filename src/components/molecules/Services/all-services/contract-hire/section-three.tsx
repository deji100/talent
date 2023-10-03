import ServicesSectionThreeCard from "../../../../molecules/Services/services-section-three-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionThree = () => {
  return (
    <div className="section-three">
      <ServiceSectionOneHead
        title="Why You Should Partner With Us​"
        desc="Experience Expertise and amplify your Success through cur contract hire solutions"
      />
      <div className="section-three-cards">
        <ServicesSectionThreeCard desc="Our contract hire services grant you access to a diverse pool of specialized professionals. Whether you require niche skills or specific project experience, we connect you with professionals who align precisely with your needs." />
        <ServicesSectionThreeCard
          desc="In the ever-evolving business landscape, adaptability is key. Partnering with us empowers you to swiftly assemble skilled teams for time-bound initiatives. This agility ensures you have the right talent at the right time, enhancing project efficiency."
        />
        <ServicesSectionThreeCard
          desc="Contract hire eliminates the costs associated with traditional recruitment, onboarding, and long-term commitments. You can optimize your budget while benefiting from top-tier talent that matches your project's requirements."
        />
        <ServicesSectionThreeCard
          desc="With our contract hire services, you can delegate the recruitment process to experts, allowing you to concentrate on business."
        />
        <ServicesSectionThreeCard
          desc="Our contract professionals seamlessly integrate into your existing team, leveraging their expertise to deliver immediate impact."
        />
        <ServicesSectionThreeCard
          desc="Benefit from our years of industry experience, ensuring you get the best tech talent solutions for your business."
        />
      </div>
    </div>
  );
};

export default SectionThree;
