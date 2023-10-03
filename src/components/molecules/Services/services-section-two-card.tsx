interface Values {
  img: string;
  title: string;
  desc: string;
}
const ServicesSectionTwoCard = (values: Values) => {
  return (
    <div className="services-section-two-card">
      <img src={values.img} alt="Image" />
      <div className="content">
        <h6>{values.title}</h6>
        <p>{values.desc}</p>
      </div>
    </div>
  );
};

export default ServicesSectionTwoCard;
