import "./blog.css";
import SectionOne from "../../components/organisms/Blog/SectionOne";
import SectionTwo from "../../components/organisms/Blog/SectionTwo";
import SectionThree from "../../components/organisms/Blog/SectionThree";
import SectionFour from "../../components/organisms/Blog/sectionFour";

const Blog = () => {
  return (
    <>
      <div className="placeholder"></div>
      <SectionOne />
      <SectionTwo />
      <div className="post">
        <div className="post-container">
          <SectionThree />
          <SectionFour />
        </div>
      </div>
    </>
  );
};

export default Blog;
