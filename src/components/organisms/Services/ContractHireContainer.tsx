import SectionHeading from "../../molecules/General/section-heading";
import SectionOne from "../../molecules/Services/all-services/contract-hire/section-one";
import SectionTwo from "../../molecules/Services/all-services/contract-hire/section-two";
import SectionThree from "../../molecules/Services/all-services/contract-hire/section-three";
import SectionFour from "../../molecules/Services/all-services/contract-hire/section-four";
import SectionFive from "../../molecules/Services/all-services/contract-hire/section-five";
import SectionSix from "../../molecules/Services/all-services/contract-hire/section-six";

const ContractHireContainer = () => {
  return (
    <div className="container">
      <SectionHeading
        title="What is Contract Hire?"
        desc='Contract hire, often referred to as "contract staffing," is a strategic staffing solution designed to bolster workforce capabilities with agility and efficiency. In this arrangement, businesses collaborate with specialized staffing agencies to secure professionals for specific project-based or time-bound assignments. Contract hire serves as a flexible and responsive method for organizations to meet fluctuating demands without committing to long-term employment contracts. Professionals engaged through contract hire bring targeted expertise, enabling businesses to tap into specialized skill sets for precise project requirements.;'
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  )
}

export default ContractHireContainer