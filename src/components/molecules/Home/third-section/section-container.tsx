import SectionHeading from "../../General/section-heading";
import ThirdSectionCard from "./third-section-card";
import CommImg from "../../../../assets/community.png";
import AvatarOne from "../../../../assets/avatar.png";
import AvatarTwo from "../../../../assets/avatar2.png";
import Clock from "../../../../assets/clock.png";
import Chat from "../../../../assets/chat.png";
import HeroBut from "../../../atoms/general/hero-but";

const ThirdSectionContainer = () => {
  return (
    <>
      <SectionHeading
        title="Why Us?"
        desc="As an outsourcing firm, we understand that hiring the best remote talent is the cornerstone of business success. We’ll assist you to simplify hiring of talents with our pre-vetted talents from Africa."
      />
      <div className="cards">
        <ThirdSectionCard
          icon={CommImg}
          title="Expertise in African Talent Landscape"
          desc="Navigating the African talent market requires insight and experience. Our team's deep understanding ensures we find the best-fit talent for your business needs. "
        />
        <ThirdSectionCard
          icon={AvatarOne}
          title="Rigorous Vetting Process"
          desc="Quality is non-negotiable. Our rigorous screening process guarantees that you're presented with candidates who are not just skilled, but also align with your values."
        />
        <ThirdSectionCard
          icon={Clock}
          title="Swift and Effective Solutions"
          desc="Time is of the essence. We've streamlined our process to ensure you're connected with top talent promptly, without compromising on quality. "
        />
        <ThirdSectionCard
          icon={AvatarTwo}
          title="Personalized Approach"
          desc="We're not just matching skills; we're building relationships. Our tailored approach ensures that your unique requirements are met, resulting in lasting partnerships."
        />
        <ThirdSectionCard
          icon={Chat}
          title="Transparent Communication"
          desc="Open communication builds trust. We keep you informed at every step, making sure you're in control and confident in your decisions. "
        />
      </div>
      <HeroBut link="talents" text="Learn more about amorserv talent" />
    </>
  );
};

export default ThirdSectionContainer;
