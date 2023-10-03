import ServicesSectionThreeCard from "../../../../molecules/Services/services-section-three-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionThree = () => {
  return (
    <div className="section-three">
      <ServiceSectionOneHead
        title="Why You Should Partner With Us​"
        desc="At AmorServ Talents, we redefine IT outsourcing through a comprehensive approach that aligns with your business objectives. Our commitment to delivering unparalleled value ensures that your IT initiatives are met with efficiency, expertise, and innovation."
      />
      <div className="section-three-cards">
        <ServicesSectionThreeCard
          desc="With a diverse team of seasoned IT professionals, we bring a wealth of knowledge across various domains"
        />
        <ServicesSectionThreeCard
          desc="We understand that every business is unique. Our IT outsourcing solutions are tailored to match your specific objectives"
        />
        <ServicesSectionThreeCard
          desc="Rapid technology advancements require nimble responses. Our agile approach to IT outsourcing ensures that we adapt swiftly to changing requirements."
        />
        <ServicesSectionThreeCard
          desc="Embracing IT project outsourcing with us allows you to harness innovative technologies without bearing the burden of extensive investments."
        />
        <ServicesSectionThreeCard
          desc="Beyond transactional engagements, we strive to build lasting partnerships."
        />
        <ServicesSectionThreeCard
          desc="Our IT project outsourcing seamlessly integrates with your existing operations. We align with your processes to maximize productivity and minimizes disruptions."
        />
      </div>
    </div>
  );
};

export default SectionThree;
