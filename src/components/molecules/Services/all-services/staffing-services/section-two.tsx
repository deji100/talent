import ImageOne from "../../../../../assets/staff-aug-img1.png";
import ImageTwo from "../../../../../assets/staff-aug-img2.png";
import ImageThree from "../../../../../assets/staff-aug-img3.png";
import ImageFour from "../../../../../assets/staff-aug-img4.png";
import ImageFive from "../../../../../assets/staff-aug-img5.png";
import ImageSix from "../../../../../assets/staff-aug-img6.png";
import ImageSeven from "../../../../../assets/staff-aug-img7.png";
import ImageEight from "../../../../../assets/staff-aug-img8.png";
import HeroBut from "../../../../atoms/general/hero-but";
import ServicesSectionTwoCard from "../../../../molecules/Services/services-section-two-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionTwo = () => {
  return (
    <div className="section-two">
        <ServiceSectionOneHead title="Our Staffing Services​​" />
        <div className="services-section-two-cards">
          <ServicesSectionTwoCard
            img={ImageOne}
            title="Temporary Staffing"
            desc="Quickly address short-term resource gaps with our temporary staffing service. We provide skilled African remote professionals who seamlessly integrate into your team."
          />
          <ServicesSectionTwoCard
            img={ImageTwo}
            title="Permanent Placement"
            desc="Boost your team's capabilities with our permanent placement service. Through our meticulous selection process, we identify top-tier remote African talent that aligns with your organization's long-term goals."
          />
          <ServicesSectionTwoCard
            img={ImageThree}
            title="Temp-to-Hire"
            desc="Make informed permanent hiring decisions through our temp-to-hire service. Evaluate candidates in action within your team's remote environment before making commitments, ensuring the perfect fit."
          />
          <ServicesSectionTwoCard
            img={ImageFour}
            title="Payroll Services"
            desc="Simplify payroll management with our comprehensive service. We handle the administrative tasks, allowing you to focus on your core business."
          />
          <ServicesSectionTwoCard
            img={ImageFive}
            title="Project-Based Staffing"
            desc="Assemble specialized teams for project success through our project-based staffing service. We tailor teams with the exact skills and expertise your project demands, ensuring efficient and effective execution."
          />
          <ServicesSectionTwoCard
            img={ImageSix}
            title="Managed Services Provider"
            desc="Optimize contingent workforce management with our Managed Services Provider solution. Streamline procurement, increase transparency, and ensure compliance"
          />
          <ServicesSectionTwoCard
            img={ImageSeven}
            title="Vendor Management System"
            desc="Gain control and insights into your workforce and procurement processes with our Vendor Management System. Monitor performance, expenses, and optimize resource allocation"
          />
          <ServicesSectionTwoCard
            img={ImageEight}
            title="Specialized Niche Recruitment"
            desc="Access top talent in niche tech domains, ensuring your projects are handled by experts with specific industry knowledge."
          />
        </div>
        <HeroBut text="Schedule a call" link="/contact-us" />
    </div>
  )
}

export default SectionTwo