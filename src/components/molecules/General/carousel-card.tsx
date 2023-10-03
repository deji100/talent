interface Values {
  img: string;
  name: string;
  position: string;
  desc: string;
}
const CarouselCard = (values: Values) => {
  return (
    <div className="carousel-card">
      <div className="info">
        <img src={values.img} alt="Customer Image" draggable="false" />
        <div className="name-position">
          <h5>{values.name}</h5>
          <h6>{values.position}</h6>
        </div>
      </div>
      <p className="desc">{values.desc}</p>
    </div>
  );
};

export default CarouselCard;
