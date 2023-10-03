import { useDispatch } from "react-redux";
import TalentStaffYearChecker from "../../atoms/talent-modal/talent-staff-year-checker";
import { useContext, useEffect } from "react";
import { Assign_Budget } from "../../../state-manager/talent-reducer";
import { TalentModalContext } from "../../../Layout";

const TalentBudgetChecker = () => {
  const dispatch = useDispatch();

  const { budget, budgetChecked, setBudget, setBudgetChecked} = useContext(TalentModalContext);

  const handleChange = (e: { target: HTMLInputElement; }) => {
    setBudget(e.target.value);
    if (e.target.value === "$5,000 - $10,000") {
      setBudgetChecked({ small: true, medium: false, large: false });
    } else if (e.target.value === "$10,000 - $20,000") {
      setBudgetChecked({ small: false, medium: true, large: false });
    } else {
      setBudgetChecked({ small: false, medium: false, large: true });
    }
  };

  useEffect(() => {
    dispatch(Assign_Budget(budget));

  }, [dispatch, budget]);

  return (
    <>
      <div className="staff-checker">
        <label className="staff-label">
          {"What's your budget/Talent? (Optional)"}
        </label>
        <div className="staff-checkers">
          <TalentStaffYearChecker
            type="radio"
            name="budget"
            value="$5,000 - $10,000"
            placeholder="$5,000 - $10,000"
            label="$5,000 - $10,000"
            handleChange={handleChange}
            checked={budgetChecked.small}
          />

          <TalentStaffYearChecker
            type="radio"
            name="budget"
            value="$10,000 - $20,000"
            placeholder="$10,000 - $20,000"
            label="$10,000 - $20,000"
            handleChange={handleChange}
            checked={budgetChecked.medium}
          />

          <TalentStaffYearChecker
            type="radio"
            name="budget"
            value="Above $20,000"
            placeholder="Above $20,000"
            label="Above $20,000"
            handleChange={handleChange}
            checked={budgetChecked.large}
          />
        </div>
      </div>
    </>
  );
};

export default TalentBudgetChecker;
