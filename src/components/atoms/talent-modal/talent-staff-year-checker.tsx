interface Values {
  placeholder: string;
  value: string;
  name: string;
  label: string;
  type: string;
  checked?: boolean;
  handleChange: (e: { target: HTMLInputElement; }) => void;
}
const TalentStaffYearChecker = (values: Values) => {
  return (
    <fieldset className="staff-check">
      <input
        className="staff-year-checker"
        type={values.type}
        id={values.name}
        aria-label="Checker"
        name={values.name}
        value={values.value}
        checked={values.checked}
        onChange={values.handleChange}
      />
      <label htmlFor={values.name} className="staff-label">
        {values.label}
      </label>
    </fieldset>
  );
};

export default TalentStaffYearChecker;
