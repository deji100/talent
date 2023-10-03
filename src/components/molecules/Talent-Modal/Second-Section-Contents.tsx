import TalentHeader from "../../atoms/talent-modal/talent-header";
import Indicators from "../../atoms/talent-modal/indicators";
import TalentForm from "./Talent-Form";
import { TalentModalContext } from "../../../Layout";
import { useContext } from "react";
import { useAppSelector } from "../../utils";

const SecondSectionContents = () => {
  const {talentFormData}  = useAppSelector((state) => state.talent);

  const {
    setNameEmpty,
    setWorkEmailEmpty,
    setCompanyNameEmpty,
    setSpecializationEmpty,
    setSkillsEmpty,
    setStaffEmpty,
    setBudgetEmpty,
    setExperienceEmpty,
  } = useContext(TalentModalContext);

  const {
    work_email,
    full_name,
    company_name,
    specializations,
    skills,
    staffing_types,
    budget,
    experience_levels,
  } = talentFormData;
  
  const handleClick = () => {
    if (full_name.length === 0) {
      setNameEmpty(true);
    }

    if (work_email.length === 0) {
      setWorkEmailEmpty(true);
    }

    if (company_name.length === 0) {
      setCompanyNameEmpty(true);
    }

    if (specializations.length === 0) {
      setSpecializationEmpty(true);
    }

    if (skills.length === 0) {
      setSkillsEmpty(true);
    }

    if (staffing_types.length === 0) {
      setStaffEmpty(true);
    }

    if (budget.length === 0) {
      setBudgetEmpty(true);
    }

    if (experience_levels.length === 0) {
      setExperienceEmpty(true);
    }
  };
  return (
    <div className="second-section-contents">
      <TalentHeader
        title={
          <h3 className="second-section-title">
            Let’s Help You Find Your{" "}
            <span className="second-section-styled-title">Best Talent fit</span>
          </h3>
        }
      />
      <Indicators />
      <TalentForm handleClick={handleClick} />
    </div>
  );
};

export default SecondSectionContents;
