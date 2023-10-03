import "./home.css";
import HomePageHeroImage from "../../assets/homepageHero.png";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import FirstSection from "../../components/molecules/Home/FirstSection";
import SecondSection from "../../components/organisms/Home/SecondSection";
import ThirdSection from "../../components/organisms/Home/ThirdSection";
// import ForthSection from "../../components/organisms/Home/ForthSection";
import FifthSection from "../../components/organisms/Home/FifthSection";
import SixthSection from "../../components/organisms/Home/SixthSection";
import SeventhSection from "../../components/organisms/Home/SeventhSection";
import EightSection from "../../components/organisms/Home/EightSection";

const Home = () => {
  return (
    <>
      <HeroBg
        title={"Behind every outstanding business aRE exceptional professionals.".toUpperCase()}
        desc="Discover, recruit, and oversee top-tier remote African talent, rigorously assessed for both technical expertise and interpersonal skills."
        link=""
        linkTitle="Get Started"
        img={HomePageHeroImage}
      />
      <FirstSection title="Some of Our Clients" />
      <SecondSection />
      <ThirdSection />
      {/* <ForthSection /> */}
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
    </>
  );
};

export default Home;
