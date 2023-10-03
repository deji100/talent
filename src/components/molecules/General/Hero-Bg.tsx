import Hero from "./Hero";

interface Values {
  title: string,
  desc: string,
  p?: string,
  link: string,
  linkTitle: string
  img: string
}

const HeroBg = (values: Values) => {
  return (
    <div className="header-bg">
      <Hero
        title={values.title}
        description={values.desc}
        p={values.p}
        link={values.link}
        linkTitle={values.linkTitle}
        image={values.img}
      />
    </div>
  );
};

export default HeroBg;