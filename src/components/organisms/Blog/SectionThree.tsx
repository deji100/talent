import BlogSectionThreeRecentPost from "../../molecules/Blog/section-three-recent-post";
import BlogSectionThreeRecommendedPost from "../../molecules/Blog/section-three-recommended-post";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const SectionThree = () => {
  return (
    <div className="blog-section-three">
      <div className="blog-side-nav">
        Recents/Recommended Posts <EastOutlinedIcon />
      </div>
      <BlogSectionThreeRecentPost title="Recent Posts" />
      <BlogSectionThreeRecommendedPost title="Recommended Posts" />
    </div>
  );
};

export default SectionThree;
