import Logo from "../../../assets/newamorlogo.png";
import SearchImg from "../../../assets/search-content1.png";
import MagnifierImg from "../../../assets/searcher.png";
import { Oval } from "react-loader-spinner";
import Marker from "../../../assets/marker.png";
import { Set_Default_Form_State } from "../../../state-manager/talent-reducer";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { TalentModalContext } from "../../../Layout";

const TalentLoadingModal = () => {
  const { steps, setSteps, setSuccessModal, loadingModal, setLoadingModal } =
    useContext(TalentModalContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingModal) {
      setTimeout(() => {
        setSteps({ step1: true, step2: false, step3: false });
      }, 3000);

      setTimeout(() => {
        setSteps({ step1: true, step2: true, step3: false });
      }, 6000);

      setTimeout(() => {
        setSteps({ step1: true, step2: true, step3: true });
      }, 9000);

      if (steps.step1 && steps.step2 && steps.step3) {
        setTimeout(() => {
          setLoadingModal(false);
          dispatch(Set_Default_Form_State());
          setSuccessModal((prev) => !prev);
        }, 1000);
      }
    }
  }, [loadingModal, setSteps, steps.step3]);

  return (
    <div className="loading-inner-container">
      <div className="content">
        <div className="img-title">
          <img src={Logo} alt="AmorServ Logo" />
          <h3>
            Searching For Your{" "}
            <span className="choice">Choice Tech Talent...</span>
          </h3>
        </div>
        <div className="loaders">
          <div className="load first">
            {(!steps.step1 && (
              <Oval
                height={20}
                width={20}
                color="#fe5500b2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#F2F2F2"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            ))} 
            <img className={steps.step1 ? "marker active" : "marker"} src={Marker} alt="Marker" />
            <p className="load-text active">Sourcing 50,000 African Tech Talent...</p>
          </div>
          <div className={steps.step1 ? "load active" : "load"}>
            {(!steps.step2 && (
              <Oval
                height={20}
                width={20}
                color="#fe5500b2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#F2F2F2"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            ))}
            <img className={steps.step2 ? "marker active" : "marker"} src={Marker} alt="Marker" />
            <p className={steps.step1 ? "load-text active" : ""}>Filtering by skills...</p>
          </div>
          <div className={steps.step2 ? "load active" : "load"}>
            {(!steps.step3 && (
              <Oval
                height={20}
                width={20}
                color="#fe5500b2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#F2F2F2"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            ))}
            <img className={steps.step3 ? "marker active" : "marker"} src={Marker} alt="Marker" />
            <p className={steps.step2 ? "load-text active" : ""}>Checking Availability</p>
          </div>
        </div>
      </div>
      <div className="banner-img">
        <div className="loading-img">
          <img className="search-img" src={SearchImg} alt="Search-Image" />
          <img className="searcher" src={MagnifierImg} alt="Magnifier" />
        </div>
      </div>
    </div>
  );
};

export default TalentLoadingModal;
