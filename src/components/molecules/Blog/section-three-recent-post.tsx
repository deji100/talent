import PostImg1 from "../../../assets/blogpost1.png";
import PostImg2 from "../../../assets/blogpost2.png";
import PostImg3 from "../../../assets/blogpost3.png";
import SectionThreeSmallCard from "../../atoms/blog/section-three";

interface Value {
  title: string
}

const BlogSectionThreeRecentPost = (value: Value) => {
  return (
    <div className="recent-post">
      <h3>{value.title}</h3>
      <div className="cards">
        <SectionThreeSmallCard
          img={PostImg1}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
        <SectionThreeSmallCard
          img={PostImg2}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
        <SectionThreeSmallCard
          img={PostImg3}
          desc="Lorem ipsum dolor sit amet consectetur. Cras in orci duis mauris magna. Nec bibendum at ut turpis cras."
          link=""
          linkTitle="Learn More"
        />
      </div>
    </div>
  );
};

export default BlogSectionThreeRecentPost;
