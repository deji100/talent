interface Value {
  img: string
}

const HeroImage = (value: Value) => {
  return (
    <div className="image">
      <img src={value.img} className="img-fluid" alt="hero-image" />
    </div>
  );
};

export default HeroImage;
