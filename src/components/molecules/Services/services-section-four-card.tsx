
interface Values {
  index: string;
  title: string;
  desc: string;
  type: string;
}
const ServicesSectionFourCard = (values: Values) => {
  return (
    <div className="services-section-four-card">
      <h4 className={values.type === "odd" ? "odd number" : "even number"}>
        {values.index}
      </h4>
      <div className="detail">
        <h6 className={values.type === "odd" ? "odd-title" : "even-title"}>
          {values.title}
        </h6>
        <p>{values.desc}</p>
      </div>
    </div>
  );
};

export default ServicesSectionFourCard;
