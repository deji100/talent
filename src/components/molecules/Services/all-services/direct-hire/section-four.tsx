import Overview from "../../../../../assets/overview3.png";
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
              title="Needs Assessment"
              type="odd"
              desc="We begin by understanding your organization's goals, culture, and the specific skills you're seeking."
            />
            <ServicesSectionFourCard
              index="2"
              title="Talent Scouting and Selection"
              type="even"
              desc="Leveraging our extensive network and industry insights, we meticulously scout for candidates who align with your requirements."
            />
            <ServicesSectionFourCard
              index="3"
              title="Candidate Presentation"
              type="odd"
              desc="We present you with a shortlist of highly qualified candidates, complete with their profiles, skills, and experience."
            />
            <ServicesSectionFourCard
              index="4"
              title="Interview and Assessment"
              type="even"
              desc="We facilitate the interview process, allowing you to interact directly with the candidates. Our experts are available to ensure that you have a comprehensive understanding of each candidate's capabilities."
            />
            <ServicesSectionFourCard
              index="5"
              title="Smooth Onboarding"
              type="odd"
              desc="Once you've made your selection, we seamlessly onboard the chosen candidate into your team."
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