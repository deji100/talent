import "./faq.css"
import HeroBanner from "../../components/molecules/General/hero-banner"
import FaqImage from "../../assets/faq.png"
import FaqContainer from "../../components/organisms/Faq/Faq"

const Faq = () => {
  return (
    <>
      <HeroBanner
        title={"We are here to help you!".toUpperCase()}
        desc="Answers to Your Most Common Queries"
        img={FaqImage}
      />
      <FaqContainer />
    </>
  )
}

export default Faq