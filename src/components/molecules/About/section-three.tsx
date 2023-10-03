import SectionHeading from "../General/section-heading";
import AboutMemberCard from "./about-card";
import Joseph from "../../../assets/joseph.png"
import Sarah from "../../../assets/sarah.png"
import Victoria from "../../../assets/victoria.png"
import Osas from "../../../assets/osas.png"
import Vivian from "../../../assets/vivian.png"
import Lilian from "../../../assets/lilian.png"
import Idris from "../../../assets/idris.png"
import John from "../../../assets/john.png"

const SectionThreeContainer = () => {
  return (
    <div className="section-three-container">
      <SectionHeading
        title="Meet Our Team"
        desc="Your success is our dedicated team’s mission."
      />
      <div className="members">
        <AboutMemberCard
          img={Joseph}
          name="Joseph Deen"
          position="CEO"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Sarah}
          name="Sarah Smith"
          position="Marketing Manager"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Victoria}
          name="Victoria Olamide"
          position="Creative Lead"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Osas}
          name="Osas Joseph"
          position="Recruitment Specialist"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Vivian}
          name="Vivian Stone"
          position="Business Strategist"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Lilian}
          name="Lilian Mann"
          position="Content Planner"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={Idris}
          name="Idris Lamar"
          position="Developer"
          twitterLink=""
          linkedInLink=""
        />
        <AboutMemberCard
          img={John}
          name="John Harry"
          position="Designer"
          twitterLink=""
          linkedInLink=""
        />
      </div>
    </div>
  );
};

export default SectionThreeContainer;
