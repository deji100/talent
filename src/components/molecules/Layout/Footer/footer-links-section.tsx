import FooterLinks from "./footer-links";
import FooterLinkHead from "../../../atoms/layout/Footer/footer-link-head";
import FooterGetInTouch from "../../../atoms/layout/Footer/footer-in-touch";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import MobileFooterLinks from "./mobile-footer-links";
import Phone from "../../../../assets/foot-icon.png";
import Mail from "../../../../assets/foot-icon2.png";
import Location from "../../../../assets/foot-icon3.png";
import { useState, useEffect } from "react";

const FooterLinkSection = () => {
  const [aboutToggle, setAboutToggle] = useState(false);
  const [resourcesToggle, setResourcesToggle] = useState(false);
  const [inTouchToggle, setInTouchToggle] = useState(false);

  const handleToggles = (type: string) => {
    if (type === "About") {
      setAboutToggle((prev) => !prev);
      setResourcesToggle(false);
      setInTouchToggle(false);
    } else if (type === "Resources") {
      setResourcesToggle((prev) => !prev);
      setAboutToggle(false);
      setInTouchToggle(false);
    } else {
      setInTouchToggle((prev) => !prev);
      setAboutToggle(false);
      setResourcesToggle(false);
    }
  };

  useEffect(() => {
    const listener = (e: any) => {
      if (
        !e.target.closest(".footer-toggles") ||
        e.target.closest(".footer-toggles")
      ) {
        setAboutToggle(false);
        setResourcesToggle(false);
        setInTouchToggle(false);
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  return (
    <div className="footer-links-section">
      <div className="web-footer">
        <FooterLinkHead linkTitle="About" />
        <FooterLinks
          links={[
            { link: "/", linkTitle: "Home" },
            { link: "", linkTitle: "Projects" },
            { link: "/how-we-work", linkTitle: "How We Work" },
            { link: "contact-us", linkTitle: "Case Studies" },
            { link: "", linkTitle: "" },
          ]}
        />
      </div>

      <div className="web-footer">
        <FooterLinkHead linkTitle="Resources" />
        <FooterLinks
          links={[
            { link: "/blog", linkTitle: "Blog" },
            { link: "", linkTitle: "Partnerships" },
            { link: "", linkTitle: "" },
            { link: "", linkTitle: "" },
            { link: "", linkTitle: "" },
          ]}
        />
      </div>

      <div className="in-touch web-footer">
        <FooterLinkHead linkTitle="Get In Touch" />
        <div className="get">
          <FooterGetInTouch text="+1 (866) 217-3333" img={Phone} />
          <FooterGetInTouch text="support@amorservtalents.com" img={Mail} />
          <FooterGetInTouch
            text="2340 West Touhy Avenue, Suite B, Chicago, Illinois 60645, United States"
            img={Location}
          />
        </div>
      </div>

      <div className="foot-mobile">
        <MobileFooterLinks
          toggle={aboutToggle}
          handleToggle={handleToggles}
          title="About"
          links={[
            { link: "/", linkTitle: "Home" },
            { link: "", linkTitle: "Projects" },
            { link: "/how-we-work", linkTitle: "How We Work" },
            { link: "contact-us", linkTitle: "Case Studies" },
            { link: "", linkTitle: "" },
          ]}
        />

        <MobileFooterLinks
          toggle={resourcesToggle}
          handleToggle={handleToggles}
          height={"height"}
          title="Resources"
          links={[
            { link: "/blog", linkTitle: "Blog" },
            { link: "", linkTitle: "Partnerships" },
            { link: "/faq", linkTitle: "FAQ" },
            { link: "", linkTitle: "" },
            { link: "", linkTitle: "" },
          ]}
        />

        <div className="mobile-link-container in-touch">
          <div className="mobile-foot-title">
            <FooterLinkHead linkTitle="Get In Touch" />
            <ExpandMoreOutlinedIcon
              className={
                inTouchToggle ? "footer-toggle active footer-toggles" : "footer-toggle footer-toggles"
              }
              onClick={(e) => {
                e.stopPropagation()
                handleToggles("Get In Touch")}}
            />
          </div>
          <div
            className={
              inTouchToggle
                ? "get mobile-footer-links active"
                : "mobile-footer-links get"
            }
          >
            <FooterGetInTouch text="+1 (866) 217-3333" img={Phone} />
            <FooterGetInTouch text="support@amorservtalents.com" img={Mail} />
            <FooterGetInTouch
              text="2340 West Touhy Avenue, Suite B, Chicago, Illinois 60645, United States"
              img={Location}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinkSection;
