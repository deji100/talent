import CommunityCard from "../../../atoms/talents/community-card";

const SectionOne = () => {
  return (
    <div className="section-community-one">
      <div className="section-one-community-cards">
        <CommunityCard
          title="Networking Synergy"
          desc="Immerse yourself in a vibrant tapestry of professionals from diverse industries. Forge connections that transcend boundaries, opening doors to collaborations, insights, and new horizons, all while amplifying your career trajectory."
        />
        <CommunityCard
          title="Exclusive Insights"
          desc="Stay ahead of the curve with access to exclusive industry insights and trends. Harness the power of knowledge as you absorb expert wisdom, enabling you to navigate challenges with newfound prowess and maintain a competitive edge."
        />
        <CommunityCard
          title="Opportunities Amplified"
          desc="Unveil a realm of bespoke opportunities tailored to your unique skills and aspirations. Our community serves as a conduit to ventures that align perfectly with your ambitions, providing a gateway to elevate your professional journey."
        />
        <CommunityCard
          title="Skill Sharpening"
          desc=" Engage in immersive skill-sharing endeavors, workshops, and enriching discussions. Absorb the collective wisdom of peers and industry stalwarts, honing your skill set and expanding your horizons for continual growth."
        />
        <CommunityCard
          title="Showcase Your Talents"
          desc="Illuminate your talents on a stage of like-minded professionals and potential employers. Elevate your visibility as you spotlight your accomplishments, positioning yourself as a sought-after asset in a community that appreciates excellence."
        />
        <CommunityCard
          title="Impactful Mentorship"
          desc="Embark on a journey of impactful mentorship, connecting with seasoned professionals who navigate the landscape you aspire to conquer. Benefit from their insights, guidance, and encouragement as you navigate your own path toward success."
        />
      </div>
    </div>
  );
};

export default SectionOne;
