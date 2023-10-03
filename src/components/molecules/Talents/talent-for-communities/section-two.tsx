import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../General/section-heading";
import TalentCard from "../talent-card";
import TalentImage from "../../../../assets/talent-img1.png";
import TalentImage2 from "../../../../assets/talent-img2.png";
import TalentImage3 from "../../../../assets/talent-img3.png";

const SectionTwo = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(document.createElement("div"));

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  return (
    <div className="section-enterprise-two">
      <SectionHeading
        title="Many talents trusts us as their pathway to success"
        desc="Real Stories, Real Triumphs: Discover Inspiring Journeys from Our Talented Community."
      />
      <motion.div
        ref={carousel}
        className="carousel-cards"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <TalentCard
            img={TalentImage}
            position="CEO"
            rate="4.5"
            desc="AmorServ's remote talents injected dynamism into our projects. Their expertise aligned perfectly with our needs, delivering outcomes that truly impressed us."
          />
          <TalentCard
            img={TalentImage2}
            position="CEO"
            rate="4.5"
            desc="Collaborating with remote talents sourced by AmorServ was a game-changer. Their specialized skills added a fresh dimension to our initiatives. "
          />
          <TalentCard
            img={TalentImage3}
            position="CEO"
            rate="4.5"
            desc="AmorServ's remote talents were the missing piece to our projects. Their global insights and expertise amplified our outcomes."
          />
             <TalentCard
            img={TalentImage}
            position="CEO"
            rate="4.5"
            desc="AmorServ's remote talents injected dynamism into our projects. Their expertise aligned perfectly with our needs, delivering outcomes that truly impressed us."
          />
          <TalentCard
            img={TalentImage2}
            position="CEO"
            rate="4.5"
            desc="Collaborating with remote talents sourced by AmorServ was a game-changer. Their specialized skills added a fresh dimension to our initiatives. "
          />
          <TalentCard
            img={TalentImage3}
            position="CEO"
            rate="4.5"
            desc="AmorServ's remote talents were the missing piece to our projects. Their global insights and expertise amplified our outcomes."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionTwo;
