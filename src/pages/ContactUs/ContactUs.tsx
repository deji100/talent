import "./contact.css"
import ContactUsPageHeroImage from "../../assets/contact.png"
import HeroBg from "../../components/molecules/General/Hero-Bg";
import SectionOneContainer from "../../components/organisms/Contact/SectionOne";
import SectionTwoMap from "../../components/molecules/Contact/section-two";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <HeroBg
        title={"Your direct line to reaching us.".toUpperCase()}
        desc=""
        p={"Connect with us to find the best remote African talents fitting your requirements."}
        link=""
        linkTitle="Contact Us"
        img={ContactUsPageHeroImage}
      />
      <SectionOneContainer />
      <SectionTwoMap />
    </div>
  );
};

export default ContactUs;
