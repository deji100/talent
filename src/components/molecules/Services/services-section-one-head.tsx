import SectionTwoTitle from "../../atoms/home/section-two-title";
import SectionTwoDesc from "../../atoms/home/section-two-desc";

interface Values {
  title: string;
  desc?: string;
}

const ServiceSectionOneHead = (values: Values) => {
  return (
    <div className="services-section-one-heading">
      <SectionTwoTitle title={values.title} />
      <SectionTwoDesc desc={values.desc} />
    </div>
  );
};

export default ServiceSectionOneHead;
