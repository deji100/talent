import FooterSocialLinks from "../../molecules/Layout/Footer/footer-social-links";
import FooterLinkSection from "../../molecules/Layout/Footer/footer-links-section";
import FooterLink from "../../atoms/layout/Footer/footer-link";

const Footer = () => {
  return (
    <div className="footerBoard">
      <div className="social-and-links">
        <FooterSocialLinks />
        <FooterLinkSection />
      </div>
      <div className="privacy-terms">
        <p className="copy">
          &copy; 2023 Amorserv Talents. All rights reserved
        </p>
        <div className="terms-cond">
          <FooterLink link="privacy" linkTitle="Privacy & Policy" />
          <FooterLink
            link="terms-and-conditions"
            linkTitle="Terms & Condition"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
