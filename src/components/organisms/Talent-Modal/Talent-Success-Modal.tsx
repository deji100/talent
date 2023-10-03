import Logo from "../../../assets/newamorlogo.png";
import SuccessImg from "../../../assets/successImg.png";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TalentModalContext } from "../../../Layout";

const TalentSuccessModal = () => {
  const navigate = useNavigate();
  const {setSuccessModal, setSteps} = useContext(TalentModalContext)

  const handleClick = () => {
    setSuccessModal(prev => !prev)
    setSteps({ step1: false, step2: false, step3: false });
    navigate("/contact-us");
  };

    useEffect(() => {
    const listener = (e:any) => {
      if (!e.target.closest("#success") || e.target.closest("#success")) {
        setSuccessModal(false)
        setSteps({ step1: false, step2: false, step3: false });    
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);

  return (
    <div className="inner-success-modal-container">
      <div className="success-content">
        <img src={Logo} alt="AmorServ Logo" />
        <div className="success-details">
          <h2>
            Congrats! We Found Over 200 Tech Talents That Match Your
            Requirements.
          </h2>
          <p>
            Book a meeting to see your <span>Shortlisted Candidates</span>
          </p>
          <button id="success" onClick={(e) => {
            e.stopPropagation()
            handleClick
            }}>Book A Meeting</button>
        </div>
      </div>
      <div className="success-banner-img">
        <div className="img-frame">
          <img src={SuccessImg} alt="Success Img" />
        </div>
      </div>
    </div>
  );
};

export default TalentSuccessModal;
