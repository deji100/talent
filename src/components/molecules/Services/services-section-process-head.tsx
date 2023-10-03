interface Values {
  title: string;
  desc?: string;
}
const ServicesSectionProcessHead = (values: Values) => {
  return (
    <div className="services-section-process">
      <h6>{values.title}</h6>
      <p>{values.desc}</p>
    </div>
  );
};

export default ServicesSectionProcessHead;
