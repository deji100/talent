import Overview from "../../../../../assets/overview4.png";
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
              title="Assessment"
              type="odd"
              desc="We begin by understanding your specific IT talent requirements. Through detailed discussions, we identify the skills, expertise, and experience needed to match your project's objectives."
            />
            <ServicesSectionFourCard
              index="2"
              title="Talent Identification"
              type="even"
              desc="Leveraging our extensive network and resources, we identify IT professionals who align with your needs. Rigorous screening ensures that only the most qualified candidates are considered."
            />
            <ServicesSectionFourCard
              index="3"
              title="Candidate Presentation"
              type="odd"
              desc="We present you with a curated selection of IT professionals whose profiles match your criteria. This enables you to review and choose individuals who align best with your project's vision."
            />
            <ServicesSectionFourCard
              index="4"
              title="Collaboration"
              type="even"
              desc="We facilitate open communication between you and the candidates, enabling interviews and discussions that lead to informed decisions."
            />
            <ServicesSectionFourCard
              index="5"
              title="Expert Integration"
              type="odd"
              desc="Our sourced IT professionals integrate seamlessly into your existing team."
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