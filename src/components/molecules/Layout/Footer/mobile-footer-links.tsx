import FooterLinkHead from "../../../atoms/layout/Footer/footer-link-head";
import FooterLinks from "./footer-links";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

interface Values {
  title: string;
  toggle: boolean;
  height?: string;
  handleToggle: (type: string) => void;
  links: [
    { link: string; linkTitle: string },
    { link: string; linkTitle: string },
    { link: string; linkTitle: string },
    { link: string; linkTitle: string },
    { link: string; linkTitle: string }
  ];
}

const MobileFooterLinks = (values: Values) => {

  return (
    <div className="mobile-link-container">
      <div className="mobile-foot-title">
        <FooterLinkHead linkTitle={values.title} />
        <ExpandMoreOutlinedIcon className={values.toggle ? "footer-toggle active footer-toggles" : "footer-toggle footer-toggles"} onClick={(e) => {
          e.stopPropagation()
          values.handleToggle(values.title)}} />
      </div>
      <div className={values.toggle ? `mobile-footer-links active ${values.height}` : "mobile-footer-links"}>
        <FooterLinks
          links={[
            {
              link: values.links[0].link,
              linkTitle: values.links[0].linkTitle,
            },
            {
              link: values.links[1].link,
              linkTitle: values.links[1].linkTitle,
            },
            {
              link: values.links[2].link,
              linkTitle: values.links[2].linkTitle,
            },
            {
              link: values.links[3].link,
              linkTitle: values.links[3].linkTitle,
            },
            {
              link: values.links[4].link,
              linkTitle: values.links[4].linkTitle,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MobileFooterLinks;
