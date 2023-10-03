import TalentCardImg from "../../../assets/how-we-work.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TalentModalContext } from "../../../Layout";

interface Values {
  sn: string;
  title: string;
  desc: string;
  butText: string;
  img?: string;
  link: string;
  position: string;
}

const CardContent = (values: Values) => {
  const {setModalToggle} = useContext(TalentModalContext)

  return (
    <div
      className={
        values.position === "right" ? "card-content right" : "card-content left"
      }
    >
      <img
        className={values.position === "right" ? "how-dots" : "how-dots left"}
        src={TalentCardImg}
        alt=""
      />
      <div className="content">
        <div className="the-h">
          <h1 className="serial-no">{values.sn}</h1>
          <h3>{values.title}</h3>
        </div>
        <p className="desc">{values.desc}</p>
        <Link className="button" to={values.link} onClick={() => setModalToggle(prev => !prev)}>
          <button>{values.butText}</button>
        </Link>
      </div>
      <div className="img">
        <img src={values.img} alt="Talent Image" />
      </div>
    </div>
  );
};
export default CardContent;
