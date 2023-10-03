interface Values {
  placeholder: string;
  value: string;
  name: string;
  label: string;
  checked?: boolean;
  handleChange: (e: { target: HTMLInputElement; }) => void;
}

const TalentSpecializationChecker = (values: Values) => {
  return (
    <fieldset>
      <input
        className="spec-checker"
        type="checkbox"
        id={values.name}
        aria-label="Checker"
        name={values.name}
        value={values.value}
        checked={values.checked}
        onChange={values.handleChange}
      />
      <label htmlFor={values.name} className="checker-label">
        {values.label}
      </label>
    </fieldset>
  );
};

export default TalentSpecializationChecker;
