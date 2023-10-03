import Overview from "../../../../../assets/overview1.png";
import ServicesSectionProcessHead from "../../../../molecules/Services/services-section-process-head";
import ServicesSectionFourCard from "../../../../molecules/Services/services-section-four-card";

const SectionFour = () => {
  return (
    <div className="section-four">
        <ServicesSectionProcessHead
          title="Our Process"
          desc="We've refined our process to ensure your projects are driven to success from inception to completion"
        />
        <div className="section-four-cards-img">
          <div className="section-four-cards">
            <ServicesSectionFourCard
              index="1"
              title="Discovery and Analysis"
              type="odd"
              desc="We kick off by understanding your project's unique requirements. This thorough analysis sets the foundation for a tailored strategy that aligns with your vision."
            />
            <ServicesSectionFourCard
              index="2"
              title="Discovery and Analysis"
              type="even"
              desc="We kick off by understanding your project's unique requirements. This thorough analysis sets the foundation for a tailored strategy that aligns with your vision."
            />
            <ServicesSectionFourCard
              index="3"
              title="Discovery and Analysis"
              type="odd"
              desc="We kick off by understanding your project's unique requirements. This thorough analysis sets the foundation for a tailored strategy that aligns with your vision."
            />
            <ServicesSectionFourCard
              index="4"
              title="Discovery and Analysis"
              type="even"
              desc="We kick off by understanding your project's unique requirements. This thorough analysis sets the foundation for a tailored strategy that aligns with your vision."
            />
            <ServicesSectionFourCard
              index="5"
              title="Discovery and Analysis"
              type="odd"
              desc="We kick off by understanding your project's unique requirements. This thorough analysis sets the foundation for a tailored strategy that aligns with your vision."
            />
          </div>
          <div className="bannerImage">
            <img src={Overview} alt="Image" />
          </div>
        </div>
      </div>
  )
}

export default SectionFour