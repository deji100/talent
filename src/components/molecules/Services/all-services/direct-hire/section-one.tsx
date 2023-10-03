import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";
import ServicesSectionOneCard from "../../services-section-one-card";

const SectionOne = () => {
  return (
    <div className="section-one">
      <ServiceSectionOneHead
        title="Benefits of Direct Hire​"
        desc="Discover the Strength of Direct Talent Solutions"
      />
      <div className="section-cards">
        <ServicesSectionOneCard
          title="Attract Qualified Candidates"
          desc="Direct hire opens the door to a wider pool of qualified candidates who are seeking stable, long-term employment."
        />
        <ServicesSectionOneCard
          title="Sources Full-Time Candidates for Employees"
          desc="Direct hire focuses on finding candidates who are not just filling a role temporarily but are eager to become integral members of your team."
        />
        <ServicesSectionOneCard
          title="Save Time"
          desc="The direct hire process is designed for efficiency. By leveraging our expertise, you can bypass time-consuming stages of recruitment and quickly access a shortlist of qualified candidates."
        />
        <ServicesSectionOneCard
          title="Full Integration"
          desc="Unlike temporary employees who may need time to adjust, direct hires are onboarded with the intention of seamlessly integrating into their roles."
        />
        <ServicesSectionOneCard
          title="Easily Source for Technical Positions"
          desc="When it comes to technical or specialized roles, direct hire proves invaluable. You can tap into our extensive network to locate professionals"
        />
        <ServicesSectionOneCard
          title="Streamlined Onboarding"
          desc="Direct hire services include comprehensive onboarding processes. This ensures that candidates are perfect for your organization. "
        />
      </div>
    </div>
  );
};

export default SectionOne;
