import SectionTitle from "../../atoms/general/section-title";
import HeroDescription from "../../atoms/general/hero-desc";

interface Value {
  title: string,
  desc?: string
}
const SectionHeading = (values: Value) => {
  return (
    <div className="section-heading">
      <SectionTitle title={values.title} />
      <HeroDescription desc={values.desc} />
    </div>
  );
};

export default SectionHeading;
