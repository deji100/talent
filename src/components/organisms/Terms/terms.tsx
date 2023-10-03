import TermsImg from "../../../assets/terms.png"

const Terms = () => {
  return (
    <div className="terms">
      <div className="terms-banner">
        <img src={TermsImg} alt="Terms image" />
        <div className="terms-heading">
          <h2>TERMS AND CONDITIONS</h2>
          <p>Understanding Our Service Guidelines</p>
        </div>
      </div>
      <div className="detail">
        <h3>We have no hidden T & Cs</h3>
        <div className="content">
          <p>By using our services, you agree to these terms and conditions.</p>
          <p className="point">1. Our Recruitment Services</p>
          <p>
            AmorServ Talents specializes in exceptional talent acquisition and
            recruitment services. We connect skilled professionals with
            visionary companies seeking their expertise.
          </p>
          <p className="point">2. Your Privacy Matters</p>
          <p>
            Your privacy and data security are vital to us. Our Privacy Policy
            explains how we collect, store, and use your information while
            ensuring compliance with applicable regulations.
          </p>
          <p className="point">3. Respectful Use</p>
          <p>
            We encourage respectful and responsible use of our platform. Please
            refrain from any behavior that disrupts our services or impacts
            other users.
          </p>
          <p className="point">4. Respecting Intellectual Property</p>
          <p>
            All content on our platform, including text, graphics, logos, and
            software, is protected by intellectual property laws. Using,
            reproducing, or distributing this content without permission is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
