import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";
import ServicesSectionOneCard from "../../services-section-one-card";

const SectionOne = () => {
  return (
    <div className="section-one">
      <ServiceSectionOneHead
        title="Benefits of Our Staffing Services​"
        desc="Experience the Transformational Impact"
      />
      <div className="section-cards">
        <ServicesSectionOneCard
          title="Access to Top Talent"
          desc="Our staffing services connect you with a pool of skilled professionals from Africa, allowing you to tap into the expertise needed for your projects."
        />
        <ServicesSectionOneCard
          title="Flexible Workforce Scaling"
          desc="Scale your team as needed without the complexities of permanent hiring. Our staffing solutions offer agility and adaptability."
        />
        <ServicesSectionOneCard
          title="Enhanced Productivity"
          desc="With the right professionals in place, you can boost productivity, tackle tasks efficiently, and meet project deadlines with confidence."
        />
        <ServicesSectionOneCard
          title="Cost-Efficiency"
          desc="Save on recruitment costs, training, and benefits by utilizing our staffing services, optimizing your budget allocation."
        />
        <ServicesSectionOneCard
          title="Expertise Diversity"
          desc="Benefit from a diverse range of skills and experiences that our professionals bring, enriching your team's capabilities and perspectives."
        />
        <ServicesSectionOneCard
          title="Reduced HR Burden"
          desc="We handle the complexities of talent acquisition, onboarding, and administrative tasks, allowing you to focus on core business operations."
        />
      </div>
    </div>
  );
};

export default SectionOne;
