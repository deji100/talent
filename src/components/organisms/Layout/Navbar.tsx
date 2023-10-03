import NavLogo from "../../atoms/layout/Navbar/nav-logo";
import NavLinks from "../../molecules/Layout/Navbar/nav-links";
import MobileNavLinks from "../../molecules/Layout/Navbar/mobile-nav-links";
import NavButton from "../../atoms/layout/Navbar/nav-button";
import Logo from "../../../assets/logo.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    const listener = (e: any) => {
      if (!e.target.closest("#nav-burg") || e.target.closest("#nav-burg")) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  return (
    <div className="navbar">
      <NavLogo img={Logo} />
      <div className="linkBut">
        <NavLinks />
        <MenuOutlinedIcon
          id="nav-burg"
          className="nav-burger"
          fontSize="large"
          onClick={(e) => {
            e.stopPropagation();
            setToggle((prev) => !prev);
          }}
        />
        <MobileNavLinks toggle={toggle} />
        <NavButton title="Get Started" />
      </div>
    </div>
  );
};

export default Navbar;
