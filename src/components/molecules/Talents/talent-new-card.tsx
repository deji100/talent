interface Values {
  img: string;
  stackLogo: string;
  desc: string;
  skills: string;
}

const TalentNewCard = (values: Values) => {
  return (
    <div className="new-talent-card">
      <img src={values.img} alt="Card Image" />
      <div className="content">
        <div className="info">
          <div className="img">
            <img
              className="stack-logo"
              src={values.stackLogo}
              alt="Stack Logo"
            />
          </div>
          <p className="desc">{values.desc}</p>
        </div>
        <div className="skills">
          <h6>Skills:</h6>
          <p>{values.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default TalentNewCard;
