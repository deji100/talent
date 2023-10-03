import Personal from "../../../../assets/personal.png";

interface Values {
  img: string;
  name: string;
  profession: string;
  type: string;
  stack: {
    first: string;
    second: string;
    third: string;
    count: number;
  };
  desc: string;
}

const FifthSectionCard = (values: Values) => {
  return (
    <div className="fifth-section-card">
      <img src={values.img} alt="Card Image" />
      <div className="content">
        <div className="info">
          <h5 className="name">{values.name}</h5>
          <p className="profession">{values.profession}</p>
          <div className="personal">
            <img className="person" src={Personal} alt="Personal icon" />
            <p>{values.type}</p>
          </div>
        </div>
        <div className="stacks">
          <p className="stack">{values.stack.first}</p>
          <p className="stack">{values.stack.second}</p>
          <p className="stack">{values.stack.third}</p>
          <p className="count">+{values.stack.count}</p>
        </div>
        <p className="desc">{values.desc}</p>
        <div className="profile">
          <button>VIEW PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default FifthSectionCard;
