import "./talents.css";
import TalentForEnterprisesContainer from "../../components/organisms/Talents/TalentForEnterprisesContainer";
import TalentEnterpriseImage from "../../assets/talent-enterprise.png";
import HeroBg from "../../components/molecules/General/Hero-Bg";

const TalentLayout = () => {
  return (
    <>
      <HeroBg
        title={"Explore Our Pre-vetted african TECH talent".toUpperCase()}
        desc="Dive into a world of innovation and expertise as you explore our curated pre-vetted African tech talent. We've done the hard work to bring you the best, so you can focus on building a winning team.
        "
        link=""
        linkTitle="Explore Talents"
        img={TalentEnterpriseImage}
      />
      <TalentForEnterprisesContainer />
    </>
  );
};

export default TalentLayout;
