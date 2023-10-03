import TalentForCommunitiesContainer from "../../components/organisms/Talents/TalentForCommunitiesContainer";
import TalentCommunitiesImage from "../../assets/talent-community.png";
import HeroBg from "../../components/molecules/General/Hero-Bg";

const TalentCommunities = () => {
  return (
    <>
      <HeroBg
        title={"JOINING OUR TECH TALENT COMMUNITY IS ABSOLUTELY FREE".toUpperCase()}
        desc="Foster Connections by Joining Our Talent Community and Boost Opportunities for Collaboration, Growth, and Collective Success."
        link="/contact-us"
        linkTitle="Schedule a call"
        img={TalentCommunitiesImage}
      />
      <TalentForCommunitiesContainer />
    </>
  );
};

export default TalentCommunities;
