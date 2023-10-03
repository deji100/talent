import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SectionOne from "../../atoms/home/section-one";
import Nike from "../../../assets/nike.png";
import Coke from "../../../assets/cocacola.png";
import Amazon from "../../../assets/amaz.png";
import CVS from "../../../assets/cvs.png";
import Cisco from "../../../assets/cisco.png";
import PayPal from "../../../assets/paypal.png";
import Master from "../../../assets/master.png";
import SectionLogo from "../../atoms/general/section-logo";

interface Value {
  title: string;
}
const FirstSection = (value: Value) => {
  return (
    <div className="first-section">
      <SectionOne title={value.title} />
      <div className="sliding">
        <Slide
          canSwipe={true}
          infinite={true}
          duration={2000}
          autoplay={true}
          cssClass="slide-show"
          defaultIndex={1}
          responsive={[
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <SectionLogo img={Nike} />
          <SectionLogo img={Coke} />
          <SectionLogo img={Amazon} />
          <SectionLogo img={CVS} />
          <SectionLogo img={Cisco} />
          <SectionLogo img={PayPal} />
          <SectionLogo img={Master} />
          <SectionLogo img={Nike} />
          <SectionLogo img={Coke} />
          <SectionLogo img={Amazon} />
          <SectionLogo img={CVS} />
          <SectionLogo img={Cisco} />
          <SectionLogo img={PayPal} />
          <SectionLogo img={Master} />
        </Slide>
      </div>
    </div>
  );
};

export default FirstSection;
