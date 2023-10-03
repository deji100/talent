import "./how-we-work.css"
import HeroBg from "../../components/molecules/General/Hero-Bg";
import HomePageHeroImage from "../../assets/talent.png";
import SectionOne from "../../components/organisms/How-We-Work/SectionOne";
import SectionTwo from "../../components/organisms/How-We-Work/SectionTwo";


const HowWeWork = () => {
  return (
    <>
      <HeroBg
        title={"We’ll provide you with pre-vetted african talents for hiring.".toUpperCase()}
        desc="Stay on your business growth track while we manage the intricacies of hiring remote talent. Our dedicated sourcing team will also backfill roles in case of unexpected talent departures."
        link=""
        linkTitle="Explore Talents"
        img={HomePageHeroImage}
      />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default HowWeWork;
