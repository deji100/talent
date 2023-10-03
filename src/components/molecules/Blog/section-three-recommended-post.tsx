import PostImg4 from "../../../assets/blogpost4.png";
import PostImg5 from "../../../assets/blogpost5.png";
import PostImg6 from "../../../assets/blogpost6.png";
import SectionThreeSmallCard from "../../atoms/blog/section-three";

interface Value {
  title: string;
}

const BlogSectionThreeRecommendedPost = (value: Value) => {
  return (
    <div className="recommended-post">
      <h3>{value.title}</h3>
      <div className="cards">
        <SectionThreeSmallCard
          img={PostImg4}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
        <SectionThreeSmallCard
          img={PostImg5}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
        <SectionThreeSmallCard
          img={PostImg6}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
      </div>
    </div>
  );
};

export default BlogSectionThreeRecommendedPost;
