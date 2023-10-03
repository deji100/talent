import Adots from "../../../assets/adots.png";
import Color from "../../../assets/col.png";
import Mark from "../../../assets/mark.png";

const SectionOne = () => {
  return (
    <div className="thanks">
      <img className="dots" src={Adots} alt="Dots" />
      <div className="board">
        <div className="content">
          <h3>THANK YOU!</h3>
          <p>
            We're here to answer your questions and discuss how we can help.
            Feel free to reach out today.
          </p>
        </div>
        <img src={Mark} alt="" />
        <p className="us">Contact Us</p>
      </div>
      <img className="col" src={Color} alt="Color" />
    </div>
  );
};

export default SectionOne;
