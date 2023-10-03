import { useContext, useEffect, useState } from "react";
import { TalentModalContext } from "../../../Layout";

interface Values {
  icon: string;
  title: string;
  handleChange: (name: string, value: string) => void;
}

const TalentCard = (values: Values) => {
  const [toggle, setToggle] = useState(false);
  const { steps } = useContext(TalentModalContext);


  useEffect(() => {
    if (steps.step1 && steps.step2 && steps.step3) {
        setToggle(false);
    }

  }, [steps.step3]);
  return (
    <div
      className={toggle ? "talent-card active" : "talent-card"}
      onClick={() => {
        setToggle((prev) => !prev);
        values.handleChange(values.title, values.title);
      }}
    >
      <img src={values.icon} alt="Stack Icon" />
      <h5>{values.title}</h5>
    </div>
  );
};

export default TalentCard;
