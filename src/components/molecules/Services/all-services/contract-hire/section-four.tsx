import Overview from "../../../../../assets/overview2.png";
import ServicesSectionProcessHead from "../../../../molecules/Services/services-section-process-head";
import ServicesSectionFourCard from "../../../../molecules/Services/services-section-four-card";

const SectionFour = () => {
  return (
    <div className="section-four">
        <ServicesSectionProcessHead
          title="Our Process"
          desc=""
        />
        <div className="section-four-cards-img">
          <div className="section-four-cards">
            <ServicesSectionFourCard
              index="1"
              title="Customized Consultation"
              type="odd"
              desc="We embark on this journey by delving deep into your requirements. Through insightful discussions, we gather a comprehensive understanding of your needs and objectives."
            />
            <ServicesSectionFourCard
              index="2"
              title="Precision Talent Sourcing"
              type="even"
              desc="Our expert team scours our vast network to identify professionals whose skills and expertise align perfectly with your project's demands."
            />
            <ServicesSectionFourCard
              index="3"
              title="Thoughtful Presentation"
              type="odd"
              desc="We present you with a curated selection of contract professionals who possess the prowess required for your project's success."
            />
            <ServicesSectionFourCard
              index="4"
              title="Transparent Engagement"
              type="even"
              desc="Throughout the process, we foster open communication and facilitate interactions between you and the chosen professionals."
            />
            <ServicesSectionFourCard
              index="5"
              title="Seamlessness in Onboarding"
              type="odd"
              desc="As you finalize your selections, we manage the intricate details of onboarding, allowing the professionals to integrate effortlessly into your team and project environment"
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