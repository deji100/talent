import TalentForEnterprisesContainer from "../../components/organisms/Talents/TalentForEnterprisesContainer";
import TalentEnterpriseImage from "../../assets/talent-enterprise.png";
import HeroBg from "../../components/molecules/General/Hero-Bg";

const TalentEnterPrise = () => {
  return (
    <>
      <HeroBg
        title={"Talent for enterprise".toUpperCase()}
        desc="Empower your enterprise by harnessing the remarkable potential of exceptional pre-vetted remote talent. in Africa Our vetted professionals will drive growth and excellence to your business."
        link="/contact-us"
        linkTitle="Schedule a call"
        img={TalentEnterpriseImage}
      />
      <TalentForEnterprisesContainer />
    </>
  );
};

export default TalentEnterPrise;
