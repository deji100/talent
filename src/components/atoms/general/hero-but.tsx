import { Link } from "react-router-dom";
import { useContext } from "react";
import { TalentModalContext } from "../../../Layout";

interface Value {
  text: string;
  link: string;
}

const HeroBut = (value: Value) => {
  const {setModalToggle} = useContext(TalentModalContext)

  return value.link ? (
    <Link to={value.link} className="hero-but">
      <button>{value.text}</button>
    </Link>
  ) : (
    <Link to={value.link} onClick={() => setModalToggle(prev => !prev)} className="hero-but">
      <button>{value.text}</button>
    </Link>
  );
};

export default HeroBut;
