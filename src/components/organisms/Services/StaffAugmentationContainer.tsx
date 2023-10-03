import SectionHeading from "../../molecules/General/section-heading";
import SectionOne from "../../molecules/Services/all-services/staff-augmentation/section-one";
import SectionTwo from "../../molecules/Services/all-services/staff-augmentation/section-two";
import SectionThree from "../../molecules/Services/all-services/staff-augmentation/section-three";
import SectionFour from "../../molecules/Services/all-services/staff-augmentation/section-four";
import SectionFive from "../../molecules/Services/all-services/staff-augmentation/section-five";
import SectionSix from "../../molecules/Services/all-services/staff-augmentation/section-six";

const StaffAugmentationContainer = () => {
  return (
    <div className="container">
      <SectionHeading
        title="What is Staff Augmentation?"
        desc="Experience the transformational power of IT staff augmentation, where synergy meets expertise. Staff augmentation services offer a strategic infusion of specialized professionals into your existing team, enabling you to scale up swiftly, adapt effectively, and conquer challenges with precision. Move your projects to new heights by seamlessly integrating the exact skills you need, precisely when you need them. Harness the flexibility of staff augmentation to respond dynamically to business demands, secure in the knowledge that you're backed by a talent reservoir capable of propelling your success forward."
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
};

export default StaffAugmentationContainer;
