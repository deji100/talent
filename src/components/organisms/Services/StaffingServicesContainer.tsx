import SectionOne from "../../molecules/Services/all-services/staffing-services/section-one";
import SectionTwo from "../../molecules/Services/all-services/staffing-services/section-two";
import SectionThree from "../../molecules/Services/all-services/staffing-services/section-three";
import SectionFour from "../../molecules/Services/all-services/staffing-services/section-four";
import SectionFive from "../../molecules/Services/all-services/staffing-services/section-five";
import SectionSix from "../../molecules/Services/all-services/staffing-services/section-six";

const StaffingServicesContainer = () => {
  return (
    <div className="container">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  )
}

export default StaffingServicesContainer