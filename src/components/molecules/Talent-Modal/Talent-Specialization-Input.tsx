import { useContext, useEffect } from "react";
import TalentSpecializationChecker from "../../atoms/talent-modal/talent-checker-a";
import { Assign_Specializations } from "../../../state-manager/talent-reducer";
import { useDispatch } from "react-redux";
import { TalentModalContext } from "../../../Layout";

const TalentSpecializationInput = () => {
  const dispatch = useDispatch();
  const { specializationEmpty, setSpecializationEmpty, specChecked, setSpecChecked, specializations, setSpecialization } =
    useContext(TalentModalContext);

  const handleChange = (e: {target: HTMLInputElement}) => {
    const new_specialization = { name: e.target.name, value: e.target.value };

    const special = specializations.find((item) => {
      if (item.name === new_specialization.name) {
        return true;
      }
      return false;
    });

    if (specializations.length === 0) {
      setSpecialization([...specializations, new_specialization]);
      setSpecializationEmpty(false);
    } else if (special) {
      const filteredList = specializations.filter(
        (item) => item.name != new_specialization.name
      );
      setSpecialization([...filteredList]);
      setSpecializationEmpty(false);
    } else {
      setSpecialization([...specializations, new_specialization]);
      setSpecializationEmpty(false);
    }

    if (e.target.name === "frontend-developer") {
      setSpecChecked({
        ...specChecked,
        frontend_developer: !specChecked.frontend_developer,
      });
    } else if (e.target.name === "fullstack-developer") {
      setSpecChecked({
        ...specChecked,
        fullstack_developer: !specChecked.fullstack_developer,
      });
    } else if (e.target.name === "backend-developer") {
      setSpecChecked({ ...specChecked, backend_developer: !specChecked.backend_developer });
    } else if (e.target.name === "ui/ux-designer") {
      setSpecChecked({ ...specChecked, ui_ux_designer: !specChecked.ui_ux_designer });
    } else if (e.target.name === "data-analyst") {
      setSpecChecked({ ...specChecked, data_analyst: !specChecked.data_analyst });
    } else if (e.target.name === "product-manager") {
      setSpecChecked({ ...specChecked, product_manager: !specChecked.product_manager });
    } else {
      setSpecChecked({ ...specChecked, other: !specChecked.other });
    }
  };

  useEffect(() => {
    dispatch(Assign_Specializations(specializations));

  }, [dispatch, specializations]);

  return (
    <>
      <div className="spec-checkers">
        <label className="specialization">
          What Specialization are you looking for?
        </label>
        <div className="checkers">
          <TalentSpecializationChecker
            name="frontend-developer"
            value="Front-End Developer"
            placeholder="Front-End Developer"
            label="Front-End Developer"
            handleChange={handleChange}
            checked={specChecked.frontend_developer}
          />

          <TalentSpecializationChecker
            name="fullstack-developer"
            value="Full Stack Developers"
            placeholder="Full Stack Developers"
            label="Full Stack Developers"
            handleChange={handleChange}
            checked={specChecked.fullstack_developer}
          />

          <TalentSpecializationChecker
            name="backend-developer"
            value="Back-End Developer"
            placeholder="Back-End Developer"
            label="Back-End Developer"
            handleChange={handleChange}
            checked={specChecked.backend_developer}
          />

          <TalentSpecializationChecker
            name="ui/ux-designer"
            value="UI/UX Designers"
            placeholder="UI/UX Designers"
            label="UI/UX Designers"
            handleChange={handleChange}
            checked={specChecked.ui_ux_designer}
          />

          <TalentSpecializationChecker
            name="data-analyst"
            value="Data Analyst"
            placeholder="Data Analyst"
            label="Data Analyst"
            handleChange={handleChange}
            checked={specChecked.data_analyst}
          />

          <TalentSpecializationChecker
            name="product-manager"
            value="Product Manager"
            placeholder="Product Manager"
            label="Product Manager"
            handleChange={handleChange}
            checked={specChecked.product_manager}
          />

          <TalentSpecializationChecker
            name="other"
            value="Other"
            placeholder="Other"
            label="Other"
            handleChange={handleChange}
            checked={specChecked.other}
          />
        </div>
      </div>
      {specializationEmpty && (
        <p className="invalid">
          Required to select at least one specialization.
        </p>
      )}
    </>
  );
};

export default TalentSpecializationInput;
