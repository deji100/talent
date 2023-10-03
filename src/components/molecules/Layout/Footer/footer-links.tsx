import FooterLink from "../../../atoms/layout/Footer/footer-link";

interface FooterLinks {
    toggle?: boolean,
    links: [
        {link: string, linkTitle: string},
        {link: string, linkTitle: string},
        {link: string, linkTitle: string},
        {link: string, linkTitle: string},
        {link: string, linkTitle: string},
    ]
}

const FooterLinks = (values: FooterLinks) => {
  return (
    <div className={values.toggle ? "footer-navLinks mobile-foot active" : "footer-navLinks mobile-foot"}>
      <FooterLink link={values.links[0].link} linkTitle={values.links[0].linkTitle} />
      <FooterLink link={values.links[1].link} linkTitle={values.links[1].linkTitle} />
      <FooterLink link={values.links[2].link} linkTitle={values.links[2].linkTitle} />
      <FooterLink link={values.links[3].link} linkTitle={values.links[3].linkTitle} />
      <FooterLink link={values.links[4].link} linkTitle={values.links[4].linkTitle} />
    </div>
  );
};

export default FooterLinks;
