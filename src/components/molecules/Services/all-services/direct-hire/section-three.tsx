import ServicesSectionThreeCard from "../../../../molecules/Services/services-section-three-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionThree = () => {
  return (
    <div className="section-three">
      <ServiceSectionOneHead
        title="Why You Should Partner With Us​"
        desc="Experience Excellence in Every Collaboration"
      />
      <div className="section-three-cards">
        <ServicesSectionThreeCard desc="With years of experience in talent acquisition, we possess in-depth knowledge of various industries. We understand the specific challenges you face and tailor our solutions to meet your unique needs." />
        <ServicesSectionThreeCard
          desc="Our extensive network grants you access to a diverse pool of top-tier professionals. Whether you're looking for specialized skills or versatile expertise, we have the talent you need to drive your projects forward."
        />
        <ServicesSectionThreeCard
          desc="We believe in working hand in hand with our clients. Your goals become our goals, and your success is our priority. Our collaborative approach ensures that every solution  meets your needs."
        />
        <ServicesSectionThreeCard
          desc="Our professionals seamlessly integrate into your team, bringing not only skills but also a fresh perspective. This integration enhances project efficiency and delivers results that surpass expectations."
        />
        <ServicesSectionThreeCard
          desc="Your business is unique, and your staffing needs may vary. Our flexible solutions adapt to your changing requirements, providing scalability, agility, and a competitive edge in a dynamic market."
        />
        <ServicesSectionThreeCard
          desc="At AmorServ Talents, excellence is our hallmark. With a proven track record, we're your go-to partner for top tech talent, ensuring your success."
        />
      </div>
    </div>
  );
};

export default SectionThree;
