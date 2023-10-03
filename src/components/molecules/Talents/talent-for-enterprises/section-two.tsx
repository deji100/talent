import { Link } from "react-router-dom";
import SectionHeading from "../../General/section-heading";
import TalentNewCard from "../talent-new-card";
import TalentImage1 from "../../../../assets/talent-new1.png";
import TalentImage2 from "../../../../assets/talent-new2.png";
import TalentImage3 from "../../../../assets/talent-new3.png";
import TalentImage4 from "../../../../assets/talent-new-4.png";
import TalentImage5 from "../../../../assets/talent-new-5.png";
import TalentImage6 from "../../../../assets/talent-new6.png";
import Logo from "../../../../assets/react.png";
import Logo2 from "../../../../assets/Php.png";
import Logo3 from "../../../../assets/flutter.png";
import Logo4 from "../../../../assets/prod-mng.png";
import Logo5 from "../../../../assets/ui.png";
import Logo6 from "../../../../assets/python.png";
import { useContext } from "react";
import { TalentModalContext } from "../../../../Layout";

const SectionTwo = () => {
  const {setModalToggle} = useContext(TalentModalContext);

  return (
    <div className="section-two-talent">
      <SectionHeading title="Some of Our Talents Key Skills" />
      <div className="new-cards">
        <TalentNewCard
          img={TalentImage1}
          stackLogo={Logo}
          desc="React.Js/Angular Developers"
          skills="React.Js, Angular, Typescript, Javascript, Node.Js, Vue.js"
        />
        <TalentNewCard
          img={TalentImage2}
          stackLogo={Logo2}
          desc="PHP Developers"
          skills="PHP, Docker, GIT, REST API, RabbitMQ, Symfony"
        />
        <TalentNewCard
          img={TalentImage3}
          stackLogo={Logo3}
          desc="React Native/Flutter/Swift Developers"
          skills="React Native, Flutter, Xamarin, Swift, Kotlin"
        />
        <TalentNewCard
          img={TalentImage4}
          stackLogo={Logo4}
          desc="Product Managers"
          skills="Agile, Scrum, Data Analysis, Research, Communication, Strategy"
        />
        <TalentNewCard
          img={TalentImage5}
          stackLogo={Logo5}
          desc="UI/UX Designers"
          skills="User Research, UI Design, Visual Design, Wireframing, Interaction Design, Prototyping"
        />
        <TalentNewCard
          img={TalentImage6}
          stackLogo={Logo6}
          desc="Java/Python Developers"
          skills="Java, Python, Node.Js, Laravel, Ruby on Rails, Django"
        />
      </div>
      <Link style={{margin: "auto"}} to="" onClick={() => setModalToggle(prev => !prev)}>
        <button type="button" style={{cursor: "pointer"}}>Let’s Help You Find Your Best Talent Fit</button>
      </Link>
    </div>
  );
};

export default SectionTwo;
