import { useDispatch } from "react-redux";
import TalentStaffYearChecker from "../../atoms/talent-modal/talent-staff-year-checker";
import { Assign_Experiences } from "../../../state-manager/talent-reducer.js";
import { useContext, useEffect } from "react";
import { TalentModalContext } from "../../../Layout.js";

const TalentExperienceChecker = () => {
  const dispatch = useDispatch();
 

  const { experienceEmpty, setExperienceEmpty, experiences, setExperiences, expChecked, setExpChecked } =
    useContext(TalentModalContext);

  const handleChange = (e: { target: HTMLInputElement }) => {
    const new_experience = { name: e.target.name, value: e.target.value };

    const special = experiences.find((item) => {
      if (item.name === new_experience.name) {
        return true;
      }
      return false;
    });

    if (experiences.length === 0) {
      setExperiences([...experiences, new_experience]);
      setExperienceEmpty(false);
    } else if (special) {
      const filteredList = experiences.filter(
        (item) => item.name != new_experience.name
      );
      setExperiences([...filteredList]);
      setExperienceEmpty(false);
    } else {
      setExperiences([...experiences, new_experience]);
      setExperienceEmpty(false);
    }

    if (e.target.name === "1-2-years") {
      setExpChecked({ ...expChecked, short: !expChecked.short });
    } else if (e.target.name === "3-5-Years") {
      setExpChecked({ ...expChecked, medium: !expChecked.medium });
    } else {
      setExpChecked({ ...expChecked, large: !expChecked.large });
    }
  };

  useEffect(() => {
    dispatch(Assign_Experiences(experiences));

  }, [dispatch, experiences]);

  return (
    <>
      <div className="staff-checker">
        <label className="staff-label">
          {"What's the experience level you’re looking for?"}
        </label>
        <div className="staff-checkers">
          <TalentStaffYearChecker
            type="checkbox"
            name="1-2-years"
            value="1-2 Years"
            placeholder="1-2 Years"
            label="1-2 Years"
            handleChange={handleChange}
            checked={expChecked.short}
          />

          <TalentStaffYearChecker
            type="checkbox"
            name="3-5-Years"
            value="3-5 Years"
            placeholder="3-5 Years"
            label="3-5 Years"
            handleChange={handleChange}
            checked={expChecked.medium}
          />

          <TalentStaffYearChecker
            type="checkbox"
            name="above-5-years"
            value="Above 5 Years"
            placeholder="Above 5 Years"
            label="Above 5 Years"
            handleChange={handleChange}
            checked={expChecked.large}
          />
        </div>
      </div>
      {experienceEmpty && (
        <p className="invalid">
          Required to select at least one experience level.
        </p>
      )}
    </>
  );
};

export default TalentExperienceChecker;
