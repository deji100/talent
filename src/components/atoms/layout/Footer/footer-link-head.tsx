interface NavBarLinkTypes {
  linkTitle: string;
}

const FooterLinkHead = (values: NavBarLinkTypes) => {
  return <h6 className="navbarLink footerLinkHead">{values.linkTitle}</h6>;
};

export default FooterLinkHead;
