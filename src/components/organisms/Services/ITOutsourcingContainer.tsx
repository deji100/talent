import SectionHeading from "../../molecules/General/section-heading";
import SectionOne from "../../molecules/Services/all-services/it-outsourcing/section-one";
import SectionThree from "../../molecules/Services/all-services/it-outsourcing/section-three";
import SectionFour from "../../molecules/Services/all-services/it-outsourcing/section-four";
import SectionFive from "../../molecules/Services/all-services/it-outsourcing/section-five";
import SectionSix from "../../molecules/Services/all-services/it-outsourcing/section-six";

const ITOutsourcingContainer = () => {
  return (
    <div className="container">
      <SectionHeading
        title="What is IT Outsourcing?"
        desc="IT outsourcing is the strategic practice of delegating specific technology-related tasks, projects, or processes to external experts or service providers. This approach allows businesses to leverage external expertise, resources, and specialized skills to efficiently manage and execute their IT initiatives. By partnering with IT outsourcing providers, organizations can tap into a broader pool of knowledge, stay updated with the latest technological trends, and achieve their goals while optimizing costs and enhancing operational efficiency. Whether it's software development, system maintenance, cloud computing, or other IT functions, IT outsourcing offers a flexible and tailored solution that enables businesses to focus on their core competencies while driving innovation and achieving successful outcomes."
      />
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  )
}

export default ITOutsourcingContainer