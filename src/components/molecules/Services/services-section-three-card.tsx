import HandShake from "../../../assets/hand.png"

interface Values {
  desc: string;
}
const ServicesSectionThreeCard = (values: Values) => {
  return (
    <div className="services-section-three-card">
      <img src={HandShake} alt="" />
      <p>{values.desc}</p>
    </div>
  );
};

export default ServicesSectionThreeCard;
