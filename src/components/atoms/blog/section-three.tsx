import { Link } from "react-router-dom";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

interface Values {
  img: string;
  desc: string;
  link: string;
  linkTitle: string;
}

const SectionThreeSmallCard = (values: Values) => {
  return (
    <div className="small-card">
      <img src={values.img} alt="card image" />
      <div className="content">
        <p>{values.desc}</p>
        <Link className="link" to={values.link}>{values.linkTitle}<EastOutlinedIcon /></Link>
      </div>
    </div>
  );
};

export default SectionThreeSmallCard;
