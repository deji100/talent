import SectionTitle from "../../../atoms/general/section-title";
import EnterpriseCard from "../../../atoms/talents/enterprise-card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TalentModalContext } from "../../../../Layout";

const SectionOne = () => {
  const {setModalToggle} = useContext(TalentModalContext)

  return (
    <div className="section-enterprise-one">
      <div className="content">
        <SectionTitle title="Our Vetted African Talents Are Experts in Their Field." />
        <div className="section-one-enterprises-cards">
          <EnterpriseCard desc="All our Remote African Talents are equipped with Diverse Range of Skills – Software Engineering, UI/UX Design, DevOps, Data Science, and more. No matter how big your project needs are, we have the talents to execute and deliver. Just speak to us!" />
        </div>
        <Link to="" onClick={() => setModalToggle(prev => !prev)}>
          <button type="button" style={{cursor: 'pointer'}}>Hire Talent</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
