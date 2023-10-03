import DirectHireContainer from "../../components/organisms/Services/DirectHireContainer";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import DirectHireImage from "../../assets/direct-hire.png";

const DirectHire = () => {
  return (
    <>
      <HeroBg
        title={"Forge a Path to Success with Our Direct Hire Service".toUpperCase()}
        desc="Our strategic talent acquisition expertise will connect you with top-tier pre-vetted professionals who align with your team. Build a foundation for success with a workforce that drives your business forward."
        link="talent-list"
        linkTitle="Schedule a call"
        img={DirectHireImage}
      />
      <DirectHireContainer />
    </>
  );
};

export default DirectHire;
