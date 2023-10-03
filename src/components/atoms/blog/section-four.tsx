import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

interface Values {
  img: string;
  desc: string;
  time: string;
}

const SectionFourLargeCard = (values: Values) => {
  return (
    <div className="large-card">
      <div className="img-desc">
        <img src={values.img} alt="card image" />
        <p>{values.desc}</p>
      </div>
      <div className="time-links">
        <p className="time">{values.time}</p>
        <div className="fav-share-chat">
          <FavoriteBorderIcon fontSize="small" className="fav icon" />
          <ShareIcon fontSize="small" className="share icon" />
          <ModeCommentOutlinedIcon fontSize="small" className="chat icon" />
        </div>
      </div>
    </div>
  );
};

export default SectionFourLargeCard;
