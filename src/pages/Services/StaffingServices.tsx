import StaffingServicesContainer from "../../components/organisms/Services/StaffingServicesContainer";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import StaffingServicesImage from "../../assets/staffing-service.png"

const StaffingServices = () => {
  return (
    <>
    <HeroBg
        title={"Top-notch staffing process is your success pathway".toUpperCase()}
        desc="Amplify your business performance and accelerate growth through staffing of  world-class remote talents from Africa with distinctive skill sets."
        link="talent-list"
        linkTitle="Schedule a call"
        img={StaffingServicesImage}
      />
      <StaffingServicesContainer />
    </>
  );
};

export default StaffingServices;


