interface Values {
  img: string;
  position: string;
  rate: string;
  desc: string;
}

const TalentCard = (values: Values) => {
  return (
    <div className="talent-card">
      <div className="info">
        <img className="card-img" src={values.img} alt="" />
        <p className="position">{values.position}</p>
        <p className="rate">{values.rate}</p>
      </div>
      <p className="desc">{values.desc}</p>
    </div>
  );
};

export default TalentCard;
