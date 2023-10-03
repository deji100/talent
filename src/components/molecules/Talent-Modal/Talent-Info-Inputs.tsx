import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TalentInput from "../../atoms/talent-modal/talent-input";
import { useDispatch } from "react-redux";
import { useEffect, useContext } from "react";
import { Assign_Info_Values } from "../../../state-manager/talent-reducer";
import { TalentModalContext } from "../../../Layout";

const TalentInfoInputs = () => {
  const dispatch = useDispatch();
  const {
    info,
    emailInvalid,
    setEmailInvalid,
    nameEmpty,
    workEmailEmpty,
    companyNameEmpty,
    setInfo,
    setNameEmpty,
    setWorkEmailEmpty,
    setCompanyNameEmpty,
  } = useContext(TalentModalContext);

  const handleChange = (e: { target: HTMLInputElement }) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
    if (name === "full_name") {
      setNameEmpty(false);
    } else if (name === "work_email") {
      setWorkEmailEmpty(false);
    } else {
      setCompanyNameEmpty(false);
    }
  };

  useEffect(() => {
    if (
      info.work_email.includes("gmail") ||
      info.work_email.includes("yahoo") ||
      info.work_email.includes("outlook")
    ) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }

    dispatch(Assign_Info_Values({ ...info }));

  }, [dispatch, info, setEmailInvalid]);

  return (
    <>
      <TalentInput
        id="work-email"
        label="Your Work Email"
        type="email"
        placeholder="you@company.com"
        name="work_email"
        value={info.work_email}
        handleChange={handleChange}
        invalid={emailInvalid}
      />
      {emailInvalid && (
        <p className="invalid">
          Invalid Email, please enter a valid work email
        </p>
      )}
      {workEmailEmpty && (
        <p className="invalid">Required to provide a valid work email.</p>
      )}

      <TalentInput
        id="your-name"
        label="Your Name"
        type="text"
        placeholder="Your Name"
        name="full_name"
        value={info.full_name}
        handleChange={handleChange}
      />
      {nameEmpty && (
        <p className="invalid">Required to provide your full name.</p>
      )}

      <TalentInput
        id="company-name"
        label="Your Company's Name"
        type="text"
        placeholder="Company Name"
        name="company_name"
        value={info.company_name}
        handleChange={handleChange}
      />
      {companyNameEmpty && (
        <p className="invalid">Required to provide company name.</p>
      )}

      <fieldset>
        <label htmlFor="phone">Phone Number (Optional)</label>
        <PhoneInput
          inputProps={{
            name: "phone_number",
            id: "phone",
            required: true,
            autoFocus: false,
          }}
          countryCodeEditable={true}
          placeholder="+1 (555) 000-0000"
          country={"us"}
          value={info.phone_number}
          onChange={(phone) => setInfo({ ...info, phone_number: phone })}
        />
      </fieldset>
    </>
  );
};

export default TalentInfoInputs;
