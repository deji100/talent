import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface NavBarLinkTypes {
  link: string;
  linkTitle: string;
  type?: string;
  category?: string;
}

const NavBarLink = (values: NavBarLinkTypes) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const listener = (e:any) => {
      if (!e.target.closest("#drop-one") || e.target.closest("#drop-one")) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  return (
    <div className="navbarLink">
      {(values.type === "drop" && (
        <div className="dropping">
          <p
            className="link drop"
            id="drop-one"
            onClick={(e) => {
              e.stopPropagation();
              setToggle((prev) => !prev);
            }}
          >
            {values.linkTitle} <ExpandMoreIcon />
          </p>
          {toggle &&
            ((values.category === "services" && (
              <div className="dropdown">
                <NavLink
                  to={"/services/staff-augmentation"}
                  className="navigate"
                >
                  {"Staff Augmentation"}
                </NavLink>
                <NavLink to={"/services/contract-hires"} className="navigate">
                  {"Contract Hires"}
                </NavLink>
                <NavLink to={"/services/direct-hire"} className="navigate">
                  {"Direct Hire"}
                </NavLink>
                <NavLink to={"/services/IT-outsourcing"} className="navigate">
                  {"IT Outsourcing"}
                </NavLink>
                <NavLink
                  to={"/services/staffing-services"}
                  className="navigate"
                >
                  {"Staffing Services"}
                </NavLink>
              </div>
            )) || (
              <div className="dropdown">
                <NavLink
                  to={"/talents/talent-for-communities"}
                  className="navigate"
                >
                  {"Talent for communities"}
                </NavLink>
                <NavLink
                  to={"/talents/talent-for-enterprises"}
                  className="navigate"
                >
                  {"Talent for enterprises"}
                </NavLink>
              </div>
            ))}
        </div>
      )) || (
        <NavLink
          to={values.link}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {values.linkTitle}
        </NavLink>
      )}
    </div>
  );
};

export default NavBarLink;
