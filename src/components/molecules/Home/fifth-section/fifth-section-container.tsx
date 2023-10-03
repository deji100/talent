import SectionHeading from "../../General/section-heading";
import { Link } from "react-scroll";
import FifthSectionCard from "./fifth-section-card";
import Harry from "../../../../assets/harry.png";
import Peter from "../../../../assets/peter.png";
import Henry from "../../../../assets/henry.png";
import Grace from "../../../../assets/grace.png";
import Andrew from "../../../../assets/andrew.png";
import Anita from "../../../../assets/anita.png";
import Jude from "../../../../assets/jude.png";
import Maxwell from "../../../../assets/maxwel.png";
// import HeroBut from "../../../atoms/general/hero-but";
import { useContext } from "react";
import { TalentModalContext } from "../../../../Layout";

const FifthSectionContainer = () => {
  const {setModalToggle} = useContext(TalentModalContext)
  
  return (
    <div className="forth-section-container fifth">
      <SectionHeading
        title="Explore Top Talents"
        desc="Simplify your path to success with our pre-vetted remote talents from Africa. We’ll take full responsibility of the talents; payroll, remunerations, taxes, and compliance."
      />
      <div className="forth-section-cards">
        <FifthSectionCard
          img={Harry}
          name="Harry Doe"
          profession="Project Manager"
          type="Freelancer"
          stack={{ first: "Asana", second: "Jira", third: "Agile", count: 8 }}
          desc="Harry has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified."
        />
        <FifthSectionCard
          img={Peter}
          name="Peter John"
          profession="Mobile Developer"
          type="Freelancer"
          stack={{ first: "PHP", second: "iOS", third: "JAVA", count: 5 }}
          desc="Peter is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
        <FifthSectionCard
          img={Henry}
          name="John Henry"
          profession="UX/UI Designer"
          type="Freelancer"
          stack={{ first: "UX", second: "iOS", third: "JAVA", count: 5 }}
          desc="John has over 6 years experience in UI/UX design and Visual design, and also has skills in front end web development"
        />
        <FifthSectionCard
          img={Grace}
          name="Grace John"
          profession="Software Developer"
          type="Freelancer"
          stack={{ first: "Python", second: "SQL", third: "Linux", count: 5 }}
          desc="Crace is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
        <FifthSectionCard
          img={Andrew}
          name="Andrew Mata"
          profession="Mobile Developer"
          type="Freelancer"
          stack={{ first: "PHP", second: "IOS", third: "JAVA", count: 5 }}
          desc="Crace is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
        <FifthSectionCard
          img={Anita}
          name="Anita"
          profession="Mobile Developer"
          type="Freelancer"
          stack={{ first: "PHP", second: "IOS", third: "JAVA", count: 5 }}
          desc="Crace is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
        <FifthSectionCard
          img={Jude}
          name="Grace John"
          profession="Software Developer"
          type="Freelancer"
          stack={{ first: "UX", second: "IOS", third: "JAVA", count: 5 }}
          desc="Crace is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
        <FifthSectionCard
          img={Maxwell}
          name="Grace John"
          profession="Software Developer"
          type="Freelancer"
          stack={{ first: "Python", second: "SQL", third: "Linux", count: 5 }}
          desc="Crace is a highly experienced developer who has helped develop innovative products for the likes of Apple, Trello and Tingo"
        />
      </div>
      <Link
        to=""
        onClick={() => setModalToggle(prev => !prev)}
        className="hero-button"
        smooth={true}
        offset={50}
        duration={1000}
      >
        Hire Talents
      </Link>
    </div>
  );
};

export default FifthSectionContainer;
