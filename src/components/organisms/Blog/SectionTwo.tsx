import SectionHeading from "../../molecules/General/section-heading"

const SectionTwo = () => {
  return (
    <div className="blog-section-two">
      <SectionHeading
        title={"Talent blog".toUpperCase()}
        desc="Stay Informed, Stay Inspired: Explore the Latest Trends, Insights, and Career Tips in Our Talent Blog."
      />
      <button>Read More</button>
    </div>
  )
}

export default SectionTwo