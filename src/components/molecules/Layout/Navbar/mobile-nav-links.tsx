import NavBarLink from "../../../atoms/layout/Navbar/nav-link";
import NavLogo from "../../../atoms/layout/Navbar/nav-logo";
import Logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

interface Value {
  toggle: boolean;
}

const MobileNavLinks = (value: Value) => {
  return (
    <div
      className={value.toggle ? "mobile-nav-links active" : "mobile-nav-links"}
    >
      <div className="m-logo">
        <NavLogo img={Logo} />
      </div>
      <div className="m-links">
        <NavBarLink link="/how-we-work" linkTitle="How We Work" />
        <NavBarLink link="/about-us" linkTitle="About Us" />
        <NavBarLink link="/contact-us" linkTitle="Contact Us" />
        <NavBarLink link="/talents" linkTitle="Talents" />
        {/* <NavBarLink link="/blog" linkTitle="Blog" /> */}
      </div>
      <Link to="" style={{textDecoration: "none"}}>
        <button className="consult">Book a consultation</button>
      </Link>
    </div>
  );
};

export default MobileNavLinks;
