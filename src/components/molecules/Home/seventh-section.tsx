import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SectionHeading from "../General/section-heading";
import CarouselCard from "../General/carousel-card";
import CustomerOne from "../../../assets/custone.png";
import CustomerTwo from "../../../assets/custtwo.png";
import CustomerThree from "../../../assets/custthree.png";
import CustomerFour from "../../../assets/custfour.png";
import CustomerFive from "../../../assets/custfive.png";
import CustomerSix from "../../../assets/custsix.png";

const SeventhSectionContainer = () => {

  return (
    <div className="seventh-section-container">
      <SectionHeading
        title="Trusted by Thousands of Happy Customers"
        desc="Discover what our clients and talented professionals have to say about their experience with us."
      />
      <Slide
      nextArrow={<p className="next"><ArrowForwardIosOutlinedIcon /></p>}
      prevArrow={<p className="prev"><ArrowBackIosNewOutlinedIcon /></p>}
        canSwipe={true}
        duration={15000}
        indicators={true}
        autoplay={true}
        cssClass="carousel-cards"
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
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
      </Slide>
    </div>
  );
};

export default SeventhSectionContainer;
