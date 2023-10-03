import SectionHeading from "../../molecules/General/section-heading";
import SectionOne from '../../molecules/Services/all-services/direct-hire/section-one';
import SectionThree from '../../molecules/Services/all-services/direct-hire/section-three';
import SectionFour from '../../molecules/Services/all-services/direct-hire/section-four';
import SectionFive from '../../molecules/Services/all-services/direct-hire/section-five';
import SectionSix from '../../molecules/Services/all-services/direct-hire/section-six';


const DirectHireContainer = () => {
  return (
    <div className="container">
      <SectionHeading
        title="What is a Direct Hire​?"
        desc="A direct hire is a strategic talent acquisition approach where businesses engage in a seamless process to attract and secure top-tier professionals for full-time positions within their organization. This method involves identifying, assessing, and onboarding candidates who possess the precise skills, experience, and cultural fit required to excel in specific roles. This approach ensures that businesses secure dedicated individuals who contribute to the organization's growth and success over an extended period."
      />
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  )
}

export default DirectHireContainer