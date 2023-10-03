import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CarouselCard from "../General/carousel-card";
import CustomerOne from "../../../assets/custone.png";
import CustomerTwo from "../../../assets/custtwo.png";
import CustomerThree from "../../../assets/custthree.png";
import CustomerFour from "../../../assets/custfour.png";
import CustomerFive from "../../../assets/custfive.png";
import CustomerSix from "../../../assets/custsix.png";
import SectionTitle from "../../atoms/general/section-title";

const SeventhSectionProfContainer = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(document.createElement("div"));

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  return (
    <div className="seventh-section-container prof">
      <SectionTitle title="Talented Professional Testimonials " />
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
          <CarouselCard
            img={CustomerFour}
            name="Adam Benjamin"
            position="CEO Bread talks"
            desc="“AmorServ Talents guided me to the sotware engineering role that perfectly matched my skills and aspirations. The support I received throughout the process was unparalleled. I'm now working with a company that values and rewards my expertise.”"
          />
          <CarouselCard
            img={CustomerFive}
            name="Lesley Bradley"
            position="CEO Stripe"
            desc="“Signing up with AmorServ Talents was a turning point in my career. They connected me with a company that aligns with my values, and I'm now part of a dynamic team driving innovation as a data scientist.”"
          />
          <CarouselCard
            img={CustomerSix}
            name="John Addams"
            position="CEO Teeno"
            desc="“AmorServ Talents helped me explore opportunities that matched my technical prowess. Their personalized approach and attention to my preferences led me to the UIUX  role that challenges and rewards me every day.”"
          />
          <CarouselCard
            img={CustomerOne}
            name="Adam Benjamin"
            position="CEO Bread talks"
            desc="“AmorServ Talents revolutionized our hiring process. Their dedication to finding the right fit for our team was exceptional.The engineers they sourced have been instrumental in our recent successes.”"
          />
          <CarouselCard
            img={CustomerTwo}
            name="Lesley Bradley"
            position="CEO Stripe"
            desc="“Partnering with AmorServ Talents was a game-changer. They understood our unique needs and presented us with candidates who exceeded our expectations. We're now working with a skilled remote team that has transformed our productivity.”"
          />
          <CarouselCard
            img={CustomerThree}
            name="John Addams"
            position="CEO Teeno"
            desc="“Partnering Efficiency and quality define AmorServ Talents. Their team not only helped us find the perfect engineers but also saved us valuable time. We're impressed with their commitment to delivering top-notch talent.”"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SeventhSectionProfContainer;
