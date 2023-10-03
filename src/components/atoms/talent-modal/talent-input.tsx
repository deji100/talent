interface Values {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  invalid?: boolean;
  handleChange: (e: { target: HTMLInputElement; }) => void;
}

const TalentInput = (values: Values) => {
  return (
    <fieldset>
      <label htmlFor={values.id}>{values.label}</label>
      <input className={values.invalid ? "info-input invalid" : "info-input"}
        type={values.type}
        id={values.id}
        name={values.name}
        placeholder={values.placeholder}
        value={values.value}
        onChange={(e) => values.handleChange(e)}
        required
      />
    </fieldset>
  );
};

export default TalentInput;
