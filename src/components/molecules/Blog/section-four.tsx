import SectionFourLargeCard from "../../atoms/blog/section-four";
import BlogImage1 from "../../../assets/blogImg1.png";
import BlogImage2 from "../../../assets/blogImg2.png";
import BlogImage3 from "../../../assets/blogImg3.png";
import BlogImage4 from "../../../assets/blogImg4.png";

const BlogSectionFour = () => {
  return (
    <div className="section-four-cards">
      <SectionFourLargeCard
        img={BlogImage1}
        desc="Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum orci a nisl sapien in. Justo eu bibendum sagittis condimentum volutpat faucibus pulvinar nunc. Pellentesque scelerisque mollis tellus molestie nec. Tellus commodo malesuada etiam mauris integer tincidunt magna. Id morbi vel ultricies quisque. Aliquam orci id commodo etiam cras facilisi. Elit arcu vulputate sed proin quam lorem eleifend. Lacinia nunc nunc."
        time="7th April 2023 9 mins ago."
      />
      <SectionFourLargeCard
        img={BlogImage2}
        desc="Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum orci a nisl sapien in. Justo eu bibendum sagittis condimentum volutpat faucibus pulvinar nunc. Pellentesque scelerisque mollis tellus molestie nec. Tellus commodo malesuada etiam mauris integer tincidunt magna. Id morbi vel ultricies quisque. Aliquam orci id commodo etiam cras facilisi. Elit arcu vulputate sed proin quam lorem eleifend. Lacinia nunc nunc."
        time="7th April 2023 9 mins ago."
      />
      <SectionFourLargeCard
        img={BlogImage3}
        desc="Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum orci a nisl sapien in. Justo eu bibendum sagittis condimentum volutpat faucibus pulvinar nunc. Pellentesque scelerisque mollis tellus molestie nec. Tellus commodo malesuada etiam mauris integer tincidunt magna. Id morbi vel ultricies quisque. Aliquam orci id commodo etiam cras facilisi. Elit arcu vulputate sed proin quam lorem eleifend. Lacinia nunc nunc."
        time="7th April 2023 9 mins ago."
      />
      <SectionFourLargeCard
        img={BlogImage4}
        desc="Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum orci a nisl sapien in. Justo eu bibendum sagittis condimentum volutpat faucibus pulvinar nunc. Pellentesque scelerisque mollis tellus molestie nec. Tellus commodo malesuada etiam mauris integer tincidunt magna. Id morbi vel ultricies quisque. Aliquam orci id commodo etiam cras facilisi. Elit arcu vulputate sed proin quam lorem eleifend. Lacinia nunc nunc."
        time="7th April 2023 9 mins ago."
      />
    </div>
  );
};

export default BlogSectionFour;
