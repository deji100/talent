import { Link } from "react-router-dom";

interface FooterLinkTypes {
  link: string,
  linkTitle: string
}

const FooterLink = ( values: FooterLinkTypes) => {
  return (
    <div className="footerLink">
      <Link to={values.link} className="link">
        {values.linkTitle}
      </Link>
    </div>
  );
};

export default FooterLink;
