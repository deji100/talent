import TalentCard from "../../atoms/talent-modal/talent-card";
import ReactJs from "../../../assets/reactjs.png";
import NodeJs from "../../../assets/nodejs.png";
import Python from "../../../assets/pythonlang.png";
import Javascript from "../../../assets/javascripticon.png";
import Ruby from "../../../assets/ruby.png";
import Angular from "../../../assets/angular.png";
import Swift from "../../../assets/swift.png";
import Figma from "../../../assets/figmaicon.png";
import Jira from "../../../assets/jira.png";
import Data from "../../../assets/data.png";
import PHP from "../../../assets/phpicon.png";
import Other from "../../../assets/other.png";
import { Assign_Skills } from "../../../state-manager/talent-reducer";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { TalentModalContext } from "../../../Layout";

const TalentSkills = () => {
  const dispatch = useDispatch();
  const { skillsEmpty, setSkillsEmpty, skills, setSkills } = useContext(TalentModalContext);

  const handleChange = (name: string, value: string) => {
    const new_skill = { name: name.toLowerCase(), value };

    const special = skills.find((item) => {
      if (item.name === new_skill.name) {
        return true;
      }
      return false;
    });

    if (skills.length === 0) {
      setSkills([...skills, new_skill]);
      setSkillsEmpty(false);
    } else if (special) {
      const filteredList = skills.filter((item) => item.name != new_skill.name);
      setSkills([...filteredList]);
      setSkillsEmpty(false);
    } else {
      setSkills([...skills, new_skill]);
      setSkillsEmpty(false);
    }
  };

  useEffect(() => {
    dispatch(Assign_Skills(skills));

  }, [dispatch, skills]);

  return (
    <>
      <div className="spec-checkers stack-label">
        <label className="specialization">
          Select at least one skill you’re looking for.
        </label>
        <div className="stacks">
          <TalentCard
            handleChange={handleChange}
            icon={ReactJs}
            title="React.Js"
          />
          <TalentCard
            handleChange={handleChange}
            icon={NodeJs}
            title="Node.Js"
          />
          <TalentCard
            handleChange={handleChange}
            icon={Python}
            title="Python"
          />
          <TalentCard
            handleChange={handleChange}
            icon={Javascript}
            title="Javascript"
          />
          <TalentCard handleChange={handleChange} icon={Ruby} title="Ruby" />
          <TalentCard
            handleChange={handleChange}
            icon={Angular}
            title="Angular"
          />
          <TalentCard handleChange={handleChange} icon={Swift} title="Swift" />
          <TalentCard handleChange={handleChange} icon={Figma} title="Figma" />
          <TalentCard handleChange={handleChange} icon={Jira} title="Jira" />
          <TalentCard handleChange={handleChange} icon={Data} title="Data" />
          <TalentCard handleChange={handleChange} icon={PHP} title="PHP" />
          <TalentCard handleChange={handleChange} icon={Other} title="Other" />
        </div>
      </div>
      {skillsEmpty && <p className="invalid">Required to select at least one stack</p>}
    </>
  );
};

export default TalentSkills;
