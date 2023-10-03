import ServicesSectionThreeCard from "../../../../molecules/Services/services-section-three-card";
import ServiceSectionOneHead from "../../../../molecules/Services/services-section-one-head";

const SectionThree = () => {
  return (
    <div className="section-three">
      <ServiceSectionOneHead
        title="Why You Should Partner With Us"
        desc="Our staffing solutions are meticulously designed to deliver transformative results for your workforce needs."
      />
      <div className="section-three-cards">
        <ServicesSectionThreeCard desc="We understand that one size doesn't fit all. Our staffing solutions are customized to your unique needs, ensuring you access talent that aligns perfectly with your business goals" />
        <ServicesSectionThreeCard desc="Your success hinges on the caliber of talent you bring on board. Our rigorous selection process ensures you receive professionals who not only meet but exceed your expectations." />
        <ServicesSectionThreeCard desc="Business landscapes evolve rapidly, and your staffing needs may change accordingly. Our solutions offer the flexibility to scale up or down swiftly, aligning with your changing requirements." />
        <ServicesSectionThreeCard desc="Beyond a transaction, we build lasting partnerships. We become an extension of your team, invested in your success, and dedicated to providing ongoing support." />
        <ServicesSectionThreeCard desc="Navigating the complexities of staffing can be overwhelming. We streamline the process, managing administrative tasks and allowing you to focus on core business operations." />
        <ServicesSectionThreeCard desc="Staffing isn't just about filling positions; it's about cultivating growth. Our solutions provide you with the tools and talent needed to elevate performance, achieve objectives, and drive success." />
      </div>
    </div>
  );
};

export default SectionThree;
