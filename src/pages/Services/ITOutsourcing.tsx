import ITOutsourcingContainer from "../../components/organisms/Services/ITOutsourcingContainer";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import ITOutsourcingImage from "../../assets/it-outsourcing.png"

const ITOutsourcing = () => {
  return (
    <>
    <HeroBg
        title={"Optimize Your Technology Landscape with Expert IT Project Outsourcing".toUpperCase()}
        desc="Fuel Your Vision with Strategic IT Outsourcing Solutions, Tailored for Success"
        link="talent-list"
        linkTitle="Schedule a call"
        img={ITOutsourcingImage}
      />
      <ITOutsourcingContainer />
    </>
  );
};

export default ITOutsourcing;
