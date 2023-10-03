import { useDispatch } from "react-redux";
import TalentStaffYearChecker from "../../atoms/talent-modal/talent-staff-year-checker";
import { useContext, useEffect } from "react";
import { Assign_Staffing_Type } from "../../../state-manager/talent-reducer";
import { TalentModalContext } from "../../../Layout";

const TalentStaffYearInputs = () => {
  const dispatch = useDispatch();
  const { staffEmpty, setStaffEmpty, staffingType, setStaffingType, staffChecked, setStaffChecked } = useContext(TalentModalContext);

  const handleChange = (e: { target: HTMLInputElement; }) => {
    const new_staffing_type = { name: e.target.name, value: e.target.value };

    const special = staffingType.find((item) => {
      if (item.name === new_staffing_type.name) {
        return true;
      }
      return false;
    });

    if (staffingType.length === 0) {
      setStaffingType([...staffingType, new_staffing_type]);
      setStaffEmpty(false);
    } else if (special) {
      const filteredList = staffingType.filter(
        (item) => item.name != new_staffing_type.name
      );
      setStaffingType([...filteredList]);
      setStaffEmpty(false);
    } else {
      setStaffingType([...staffingType, new_staffing_type]);
      setStaffEmpty(false);
    }

    if (e.target.name === "permanent-staff") {
      setStaffChecked({ ...staffChecked, permanent: !staffChecked.permanent });
    } else if (e.target.name === "medium-term") {
      setStaffChecked({ ...staffChecked, medium: !staffChecked.medium });
    } else {
      setStaffChecked({ ...staffChecked, short: !staffChecked.short });
    }
  };

  useEffect(() => {
    dispatch(Assign_Staffing_Type(staffingType));

  }, [dispatch, staffingType]);

  return (
    <>
      <div className="staff-checker">
        <label className="staff-label">
          What type of staffing do you need?
        </label>
        <div className="staff-checkers">
          <TalentStaffYearChecker
            type="checkbox"
            name="permanent-staff"
            value="Permanent Staff"
            placeholder="Long term staffing/permanent team member"
            label="Long term staffing/permanent team member"
            handleChange={handleChange}
            checked={staffChecked.permanent}
          />

          <TalentStaffYearChecker
            type="checkbox"
            name="medium-term"
            value="Medium term (6-12 months)"
            placeholder="Medium term (6-12 months)"
            label="Medium term (6-12 months)"
            handleChange={handleChange}
            checked={staffChecked.medium}
          />

          <TalentStaffYearChecker
            type="checkbox"
            name="short-term"
            value="Short term (less than 6 months)"
            placeholder="Short term (less than 6 months)"
            label="Short term (less than 6 months)"
            handleChange={handleChange}
            checked={staffChecked.short}
          />
        </div>
      </div>
      {staffEmpty && (
        <p className="invalid">
          Required to select at least one type of staffing.
        </p>
      )}
    </>
  );
};

export default TalentStaffYearInputs;
