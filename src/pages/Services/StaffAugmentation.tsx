import StaffAugmentationContainer from "../../components/organisms/Services/StaffAugmentationContainer";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import HomePageHeroImage from "../../assets/staff-augmentation.png";


const StaffAugmentation = () => {
  return (
    <>
      <HeroBg
        title={"Maximize your team capabilities with the power of staff augmentation".toUpperCase()}
        desc="Boost the efficiency of your team with our readily vetted remote tech talents from Africa to accelerate your projects and enhance productivity."
        link="talent-list"
        linkTitle="Schedule a call"
        img={HomePageHeroImage}
      />
      <StaffAugmentationContainer />
    </>
  );
};

export default StaffAugmentation;
