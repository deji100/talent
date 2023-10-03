import TalentPrivacy from "../../atoms/talent-modal/talent-privacy";
import { Link } from "react-router-dom";
import TalentInfoInputs from "./Talent-Info-Inputs";
import TalentSpecializationInput from "./Talent-Specialization-Input";
import TalentSkills from "./Talent-Skills";
import TalentStaffYearInputs from "./Talent-Staff-Year-inputs";
import TalentBudgetChecker from "./Talent-Budget-Checker";
import TalentExperienceChecker from "./Talent-Experience-Checker";
import TalentCommentInput from "./Talent-Comment-Input";
import { PostTalentFormData } from "../../../state-manager/talent-reducer";
import { useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../utils";
import { TalentModalContext } from "../../../Layout";

interface Value {
  handleClick: () => void
}

const TalentForm = (value: Value) => {
  const dispatch = useAppDispatch();
  const {talentFormData}  = useAppSelector((state) => state.talent);
  
  const {
    emailInvalid,
    phoneInvalid,
    nameEmpty,
    workEmailEmpty,
    companyNameEmpty,
    specializationEmpty,
    skillsEmpty,
    staffEmpty,
    experienceEmpty,
    setModalToggle,
    setLoadingModal,
  } = useContext(TalentModalContext);

  const {
    work_email,
    full_name,
    company_name,
    specializations,
    skills,
    staffing_types,
    experience_levels,
  } = talentFormData;

  const handleSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();

    if (
      full_name.length != 0 &&
      work_email.length != 0 &&
      company_name.length != 0 &&
      specializations.length != 0 &&
      skills.length != 0 &&
      staffing_types.length != 0 &&
      experience_levels.length != 0
    ) {
      dispatch(PostTalentFormData(talentFormData))
      .then(() => {
        console.log("")
      })
      .catch(() => {
        console.log("")
      });

      setModalToggle(prev => !prev);
      setLoadingModal(prev => !prev);
    }
  };

  return (
    <div className="talent-form">
      <form onSubmit={handleSubmit}>
        <TalentInfoInputs />

        <TalentSpecializationInput />

        <TalentSkills />

        <TalentStaffYearInputs />

        <TalentBudgetChecker />

        <TalentExperienceChecker />

        <TalentCommentInput />

        <div className="privacy-but">
          <TalentPrivacy
            desc={
              <p>
                By submitting this form, i agree to AmorServ Talents’{" "}
                <Link to="/privacy" className="talent-privacy">
                  Privacy Policy
                </Link>
                , I understand I can unsubscribe at any time.
              </p>
            }
          />
          
          <button
            className={
              emailInvalid ||
              phoneInvalid ||
              specializationEmpty ||
              skillsEmpty ||
              staffEmpty ||
              experienceEmpty ||
              nameEmpty ||
              workEmailEmpty ||
              companyNameEmpty
                ? "but-disabled"
                : ""
            }
            disabled={
              emailInvalid ||
              phoneInvalid ||
              specializationEmpty ||
              skillsEmpty ||
              staffEmpty ||
              experienceEmpty ||
              nameEmpty ||
              workEmailEmpty ||
              companyNameEmpty
            }
            type="submit"
            onClick={value.handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TalentForm;
