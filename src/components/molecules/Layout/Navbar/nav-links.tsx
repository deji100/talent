import NavBarLink from "../../../atoms/layout/Navbar/nav-link";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <NavBarLink link="/how-we-work" linkTitle="How We Work" />
      <NavBarLink link="/talents" linkTitle="Talents" />
      <NavBarLink link="/about-us" linkTitle="About Us" />
      <NavBarLink link="/faq" linkTitle="FAQ" />
      {/* <NavBarLink link="/blog" linkTitle="Blog" /> */}
      <NavBarLink link="/contact-us" linkTitle="Contact Us" />
    </div>
  );
};

export default NavLinks;
