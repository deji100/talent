interface Image {
  img: string;
}

const SectionLogo = (image: Image) => {
  return (
    <div className="section-logo">
      <img
        src={image.img}
        className="logo-img"
        alt="Client Logo"
        aria-label="Our Client's Logo"
      />
    </div>
  );
};

export default SectionLogo;
