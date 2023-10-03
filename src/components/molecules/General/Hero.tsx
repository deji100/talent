import HeroTitle from "../../atoms/general/hero-title";
import HeroImage from "../../atoms/general/hero-img";
import HeroDescription from "../../atoms/general/hero-desc";
import HeroBut from "../../atoms/general/hero-but";

interface HeroContext {
  title: string;
  description: string;
  p?: string;
  link: string;
  linkTitle: string;
  image: string;
}

const Hero = (values: HeroContext) => {
  return (
    <div className="header">
      <div className="content">
        <HeroTitle title={values.title} />
        <HeroDescription desc={values.description} />
        <p className="cont">{values.p}</p>
        <HeroBut text={values.linkTitle} link={values.link} />
      </div>
      <HeroImage img={values.image} />
    </div>
  );
};

export default Hero;
