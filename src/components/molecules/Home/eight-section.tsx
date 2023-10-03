import { useState, useEffect, ChangeEvent } from "react";

const EightSectionContainer = () => {
  const [invalidError, setInValidError] = useState(false);
  const [info, setInfo] = useState({
    full_name: "",
    company_name: "",
    email: "",
    role: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e: { target: HTMLInputElement; }) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInfo({...info, ["message"]: e.target.value})
  }

  const handleSubmit = (e: {preventDefault : () => void}) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (
      info.email.includes("gmail") ||
      info.email.includes("yahoo" || info.email.includes("outlook"))
    ) {
      setInValidError(true);
    } else {
      setInValidError(false);
    }
  }, [info, invalidError]);

  return (
    <div className="eight-section-container">
      <div className="eight-section-heading">
        <h4>How Can We Help</h4>
        <p>
          {
            "Let's make the right match. Fill out the form to inform us of the talent specifications you want."
          }
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="full-name">Your Full Name</label>
          <input
            type="text"
            name="full_name"
            id="full-name"
            onChange={handleChange}
            required
            placeholder="Enter your first and last name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="company-name">Your Company Name</label>
          <input
            type="text"
            name="company_name"
            id="company-name"
            onChange={handleChange}
            required
            placeholder="Enter your company name"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Your Work Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
            placeholder="Enter your work email"
          />
          {invalidError && <span className="invalid-email">Invalid work email. Please kindly enter a valid work email.</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="role">Your Role</label>
          <input
            type="text"
            name="role"
            id="role"
            onChange={handleChange}
            required
            placeholder="What's your role?"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            id="phone-number"
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </fieldset>
        <textarea
          name="message"
          onChange={handleTextAreaChange}
          required
          placeholder="Your message"
        ></textarea>
        <button
          disabled={invalidError}
          className={invalidError ? "but-disabled" : ""}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EightSectionContainer;
