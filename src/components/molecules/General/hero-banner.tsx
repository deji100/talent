interface Values {
  title: string;
  desc: string;
  img: string;
}

const HeroBanner = (values: Values) => {
  return (
    <div className="hero-banner">
      <div className="details">
        <div className="content">
          <h2>{values.title}</h2>
          <p>{values.desc}</p>
        </div>
        <div className="img">
          <img src={values.img} alt="Hero Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
