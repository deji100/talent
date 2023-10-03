import { Link } from "react-router-dom";
import twitter from "../../../assets/twit.png"
import linkedIn from "../../../assets/linkin.png"

interface Values {
  img: string;
  name: string;
  position: string;
  twitterLink: string;
  linkedInLink: string;
}
const AboutMemberCard = (values: Values) => {
  return (
    <div className="member">
      <div className="image">
        <img src={values.img} alt="Member Image" />
      </div>
      <div className="detail">
        <h6>{values.name}</h6>
        <p>{values.position}</p>
        <div className="links">
          <Link to={values.twitterLink}>
            <img src={twitter} alt="Twitter Image" />
          </Link>
          <Link to={values.linkedInLink}>
            <img src={linkedIn} alt="LinkedIn Image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMemberCard;
