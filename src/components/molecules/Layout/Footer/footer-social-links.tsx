import FooterSocialLink from "../../../atoms/layout/Footer/footer-social-link";
import NavLogo from "../../../atoms/layout/Navbar/nav-logo";
import footerLogo from "../../../../assets/footerlogo.png";
import facebook from "../../../../assets/facebook.png";
import twitter from "../../../../assets/twitter.png";
import instagram from "../../../../assets/instagram.png";

const FooterSocialLinks = () => {
  return (
    <div className="logo-social">
      <NavLogo img={footerLogo} />
      <div className="social-links">
        <FooterSocialLink
          link="https://facebook.com"
          icon={<img src={facebook} alt="facebook" />}
        />
        <FooterSocialLink
          link="https://twitter.com"
          icon={<img src={twitter} alt="facebook" />}
        />
        <FooterSocialLink
          link="https://instagram.com"
          icon={<img src={instagram} alt="facebook" />}
        />
      </div>
    </div>
  );
};

export default FooterSocialLinks;
