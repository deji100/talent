import SectionHeading from "../General/section-heading";
import CardContent from "./section-one-card-content";
import HowImg1 from "../../../assets/how-img1.png"
import HowImg2 from "../../../assets/how-img2.png"
import HowImg3 from "../../../assets/how-img3.png"
import HowImg4 from "../../../assets/how-img4.png"
import HowImg5 from "../../../assets/how-img5.png"

const HowWeWorkSectionOne = () => {
  return (
    <div className="how-section-one">
      <SectionHeading
        title="Our 5 Step Process To Ensure Your Hiring Success"
        desc="We're dedicated to transforming your hiring process and enhancing your team's capabilities. Our processes are thorough and result-oriented."
      />
      <div className="how-cards">
        <CardContent
          sn="1"
          title="Talent Pre-Vetting"
          desc="With us, excellence is non-negotiable. We go above and beyond to meticulously pre-vet every of our remote African talent, ensuring they meet and exceed your highest standards. Our stringent evaluation process covers technical prowess, soft skills, and remote-working culture alignment, guaranteeing you access to a pool of top-tier remote African talents."
          butText="Explore Talent"
          link=""
          position="right"
          img={HowImg1}
        />
        <CardContent
          sn="2"
          title="Talent Sourcing"
          desc="Our specialty is in the discovery of highly-skilled African Talents. With an expansive network and deep industry expertise, we source exceptional talent using the industry standard strategies. We leave no stone unturned to discover the best and the brightest, tailor-made talents to suit your specific needs. Trust us to bring the talent you need to your doorstep."
          butText="Explore Talent"
          link=""
          position="left"
          img={HowImg2}
        />
        <CardContent
          sn="3"
          title="Talent Matching"
          desc="Finding the perfect synergy between talent and your business is our ultimate goal. Our talent acquisition experts take the time to understand your unique requirements, company culture, and long-term objectives. We then meticulously provide you with pre-vetted remote African talents who not only possess the requisite skills but also align with your vision."
          butText="Explore Talent"
          link=""
          position="right"
          img={HowImg3}
        />
        <CardContent
          sn="4"
          title="Talent Hiring"
          desc="Simplify your hiring process with us. We shoulder the hiring complexities, from candidate outreach to negotiations and onboarding. With us at your side, you can dedicate your valuable time and resources to welcoming and integrating new remote African talent seamlessly into your organization, all while we handle the rest."
          butText="Explore Talent"
          link=""
          position="left"
          img={HowImg4}
        />
        <CardContent
          sn="5"
          title="Talent Management"
          desc="Our commitment to you goes beyond the hiring stage. We take charge of essential tasks like the vetted remote African talent’s compliance management, payroll administration, and more. We’ll ensure that our remote talents operates smoothly, remains compliant with regulations, while you focus on driving your business forward."
          butText="Explore Talent"
          link=""
          position="right"
          img={HowImg5}
        />
      </div>
    </div>
  );
};

export default HowWeWorkSectionOne;
