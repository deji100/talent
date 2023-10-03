import "./about.css"
import HeroBg from '../../components/molecules/General/Hero-Bg'
import AboutPageHeroImage from "../../assets/abouthero.png";
import SectionOne from '../../components/organisms/About/SectionOne';
import SectionTwo from '../../components/organisms/About/SectionTwo';
import SectionThree from '../../components/organisms/About/SectionThree';
import SectionFour from '../../components/organisms/About/SectionFour';


const About = () => {
  return (
    <>
      <HeroBg
        title={"We know that great talents are the CATALYST FOR SUCCESS.".toUpperCase()}
        desc="Talent plays pivotal role in shaping success. We're dedicated to seamlessly connecting businesses with the best remote African talents."
        link="/contact-us"
        linkTitle="Get In Touch"
        img={AboutPageHeroImage}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  )
}

export default About