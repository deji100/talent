import { Link } from "react-router-dom";

interface Image {
  img: string;
}

const NavLogo = (image: Image) => {
  return (
    <div className="navbarLogo">
      <Link to={"/"}>
        <img
          src={image.img}
          className="navbarLogo-img"
          alt="AmorServ Logo"
          aria-label="AmorServ Logo"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
