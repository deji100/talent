import Phone from "../../../assets/phone.png"
import Email from "../../../assets/email.png"
import Locate from "../../../assets/locate.png"

const SectionOne = () => {
  return (
    <div className="contact-one-section">
      <h4>Let’s Answer Your Queries</h4>
      <form>
        <div className="inputs">
          <fieldset>
            <label className="label" htmlFor="first-name">FIRST NAME</label>
            <input type="text" id="first-name" />
          </fieldset>
          <fieldset>
            <label className="label" htmlFor="last-name">LAST NAME</label>
            <input type="text" id="last-name" />
          </fieldset>
          <fieldset>
            <label className="label" htmlFor="email">EMAIL</label>
            <input type="text" id="email"/>
          </fieldset>
          <fieldset>
            <label className="label" htmlFor="phone">PHONE NUMBER</label>
            <input type="tel" id="phone" />
          </fieldset>
        </div>
        <div className="text-but">
          <textarea name="message" placeholder="LEAVE A MESSAGE FOR US"></textarea>
          <button type="button">Submit</button>
        </div>
      </form>
      <div className="address">
        <div className="addr">
          <h5>Come Visit Us</h5>
          <div className="image-address">
            <img src={Locate} alt="Location" />
            <p>2340 West Touhy Avenue, Suite B, Chicago, Illinois 60645</p>
          </div>
        </div>
        <div className="phone-email">
          <div className="phone">
            <img src={Phone} alt="Phone" />
            <p>+1 (866) 236-3090</p>
          </div>
          <div className="email">
            <img src={Email} alt="Email" />
            <p>info@amorservconsulting.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
