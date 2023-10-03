import "./Layout.css";
import "./Modal.css";
import {
  useEffect,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/organisms/Layout/Navbar";
import Footer from "./components/organisms/Layout/Footer";
import TalentModal from "./components/organisms/Talent-Modal/Talent-Modal";
import TalentLoadingModal from "./components/organisms/Talent-Modal/Talent-Loading-Modal";
import TalentSuccessModal from "./components/organisms/Talent-Modal/Talent-Success-Modal";

interface ModalToggle {
  info: {
    work_email: string;
    full_name: string;
    company_name: string;
    phone_number: string;
  };
  specializations: { name: string; value: string }[];
  specChecked: {
    frontend_developer: boolean;
    fullstack_developer: boolean;
    backend_developer: boolean;
    ui_ux_designer: boolean;
    data_analyst: boolean;
    product_manager: boolean;
    other: boolean;
  };
  skills: { name: string; value: string }[];
  staffingType: { name: string; value: string }[];
  staffChecked: {
    permanent: boolean;
    medium: boolean;
    short: boolean;
  };
  budget: string;
  budgetChecked: {
    small: boolean;
    medium: boolean;
    large: boolean;
  };
  experiences: { name: string; value: string }[];
  expChecked: {
    short: boolean;
    medium: boolean;
    large: boolean;
  };
  steps: { step1: boolean; step2: boolean; step3: boolean };
  modalToggle: boolean;
  loadingModal: boolean;
  successModal: boolean;
  emailInvalid: boolean;
  phoneInvalid: boolean;
  nameEmpty: boolean;
  workEmailEmpty: boolean;
  companyNameEmpty: boolean;
  specializationEmpty: boolean;
  skillsEmpty: boolean;
  staffEmpty: boolean;
  budgetEmpty: boolean;
  experienceEmpty: boolean;
  setInfo: Dispatch<
    SetStateAction<{
      work_email: string;
      full_name: string;
      company_name: string;
      phone_number: string;
    }>
  >;
  setSpecialization: Dispatch<
    SetStateAction<{ name: string; value: string }[]>
  >;
  setSpecChecked: Dispatch<
    SetStateAction<{
      frontend_developer: boolean;
      fullstack_developer: boolean;
      backend_developer: boolean;
      ui_ux_designer: boolean;
      data_analyst: boolean;
      product_manager: boolean;
      other: boolean;
    }>
  >;
  setSkills: Dispatch<SetStateAction<{ name: string; value: string }[]>>;
  setStaffingType: Dispatch<SetStateAction<{ name: string; value: string }[]>>;
  setStaffChecked: Dispatch<
    SetStateAction<{
      permanent: boolean;
      medium: boolean;
      short: boolean;
    }>
  >;
  setBudget: Dispatch<SetStateAction<string>>;
  setBudgetChecked: Dispatch<
    SetStateAction<{
      small: boolean;
      medium: boolean;
      large: boolean;
    }>
  >;
  setExperiences: Dispatch<SetStateAction<{ name: string; value: string }[]>>;
  setExpChecked: Dispatch<
    SetStateAction<{
      short: boolean;
      medium: boolean;
      large: boolean;
    }>
  >;
  setModalToggle: Dispatch<SetStateAction<boolean>>;
  setLoadingModal: Dispatch<SetStateAction<boolean>>;
  setSuccessModal: Dispatch<SetStateAction<boolean>>;
  setEmailInvalid: Dispatch<SetStateAction<boolean>>;
  setPhoneInvalid: Dispatch<SetStateAction<boolean>>;
  setNameEmpty: Dispatch<SetStateAction<boolean>>;
  setWorkEmailEmpty: Dispatch<SetStateAction<boolean>>;
  setCompanyNameEmpty: Dispatch<SetStateAction<boolean>>;
  setSpecializationEmpty: Dispatch<SetStateAction<boolean>>;
  setSkillsEmpty: Dispatch<SetStateAction<boolean>>;
  setStaffEmpty: Dispatch<SetStateAction<boolean>>;
  setBudgetEmpty: Dispatch<SetStateAction<boolean>>;
  setExperienceEmpty: Dispatch<SetStateAction<boolean>>;
  setSteps: Dispatch<
    SetStateAction<{ step1: boolean; step2: boolean; step3: boolean }>
  >;
}

export const TalentModalContext = createContext<ModalToggle>({
  info: {
    work_email: "",
    full_name: "",
    company_name: "",
    phone_number: "",
  },
  specializations: [],
  specChecked: {
    frontend_developer: false,
    fullstack_developer: false,
    backend_developer: false,
    ui_ux_designer: false,
    data_analyst: false,
    product_manager: false,
    other: false,
  },
  skills: [],
  staffingType: [],
  staffChecked: {
    permanent: false,
    medium: false,
    short: false,
  },
  budget: "",
  budgetChecked: {
    small: false,
    medium: false,
    large: false,
  },
  experiences: [],
  expChecked: {
    short: false,
    medium: false,
    large: false,
  },
  modalToggle: false,
  loadingModal: false,
  successModal: false,
  emailInvalid: false,
  phoneInvalid: false,
  nameEmpty: false,
  workEmailEmpty: false,
  companyNameEmpty: false,
  specializationEmpty: false,
  skillsEmpty: false,
  staffEmpty: false,
  budgetEmpty: false,
  experienceEmpty: false,
  steps: { step1: false, step2: false, step3: false },
  setInfo: () => {},
  setSpecChecked: () => {},
  setSpecialization: () => {},
  setStaffChecked: () => {},
  setBudgetChecked: () => {},
  setSkills: () => {},
  setStaffingType: () => {},
  setBudget: () => {},
  setExperiences: () => {},
  setExpChecked: () => {},
  setModalToggle: () => {},
  setLoadingModal: () => {},
  setSuccessModal: () => {},
  setEmailInvalid: () => {},
  setPhoneInvalid: () => {},
  setNameEmpty: () => {},
  setWorkEmailEmpty: () => {},
  setCompanyNameEmpty: () => {},
  setSteps: () => {},
  setSpecializationEmpty: () => {},
  setSkillsEmpty: () => {},
  setStaffEmpty: () => {},
  setBudgetEmpty: () => {},
  setExperienceEmpty: () => {},
});

function Layout() {
  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [specializationEmpty, setSpecializationEmpty] = useState(false);
  const [nameEmpty, setNameEmpty] = useState(false);
  const [workEmailEmpty, setWorkEmailEmpty] = useState(false);
  const [companyNameEmpty, setCompanyNameEmpty] = useState(false);
  const [skillsEmpty, setSkillsEmpty] = useState(false);
  const [staffEmpty, setStaffEmpty] = useState(false);
  const [budgetEmpty, setBudgetEmpty] = useState(false);
  const [experienceEmpty, setExperienceEmpty] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [info, setInfo] = useState({
    work_email: "",
    full_name: "",
    company_name: "",
    phone_number: "",
  });

  const [specializations, setSpecialization] = useState<
    { name: string; value: string }[]
  >([]);

  const [skills, setSkills] = useState<{ name: string; value: string }[]>([]);

  const [staffingType, setStaffingType] = useState<
    { name: string; value: string }[]
  >([]);

  const [experiences, setExperiences] = useState<
    { name: string; value: string }[]
  >([]);

  const [budget, setBudget] = useState("");

  const [specChecked, setSpecChecked] = useState({
    frontend_developer: false,
    fullstack_developer: false,
    backend_developer: false,
    ui_ux_designer: false,
    data_analyst: false,
    product_manager: false,
    other: false,
  });

  const [staffChecked, setStaffChecked] = useState({
    permanent: false,
    medium: false,
    short: false,
  });

  const [budgetChecked, setBudgetChecked] = useState({
    small: false,
    medium: false,
    large: false,
  });

  const [expChecked, setExpChecked] = useState({
    short: false,
    medium: false,
    large: false,
  });

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    if (modalToggle || loadingModal || successModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (steps.step3) {
      setInfo({
        work_email: "",
        full_name: "",
        company_name: "",
        phone_number: "1",
      });
      setSpecialization([]);
      setSkills([]);
      setSpecChecked({
        frontend_developer: false,
        fullstack_developer: false,
        backend_developer: false,
        ui_ux_designer: false,
        data_analyst: false,
        product_manager: false,
        other: false,
      });
      setStaffingType([]);
      setStaffChecked({
        permanent: false,
        medium: false,
        short: false,
      });
      setBudget("");
      setBudgetChecked({
        small: false,
        medium: false,
        large: false,
      });
      setExperiences([]);
      setExpChecked({ short: false, medium: false, large: false });
    }

    window.scrollTo(0, 0);
  }, [pathName, modalToggle, loadingModal, steps.step3]);

  return (
    <TalentModalContext.Provider
      value={{
        info,
        specializations,
        skills,
        specChecked,
        staffingType,
        staffChecked,
        budget,
        budgetChecked,
        experiences,
        expChecked,
        modalToggle,
        loadingModal,
        successModal,
        emailInvalid,
        phoneInvalid,
        nameEmpty,
        workEmailEmpty,
        companyNameEmpty,
        specializationEmpty,
        skillsEmpty,
        staffEmpty,
        budgetEmpty,
        experienceEmpty,
        steps,
        setInfo,
        setSpecialization,
        setSkills,
        setSpecChecked,
        setStaffingType,
        setStaffChecked,
        setBudget,
        setBudgetChecked,
        setExperiences,
        setExpChecked,
        setModalToggle,
        setLoadingModal,
        setSuccessModal,
        setEmailInvalid,
        setSteps,
        setPhoneInvalid,
        setSpecializationEmpty,
        setSkillsEmpty,
        setStaffEmpty,
        setBudgetEmpty,
        setExperienceEmpty,
        setNameEmpty,
        setWorkEmailEmpty,
        setCompanyNameEmpty,
      }}
    >
      <div className={modalToggle ? "talent-modal active" : "talent-modal"}>
        <TalentModal />
      </div>
      <div className={loadingModal ? "loading-modal active" : "loading-modal"}>
        <TalentLoadingModal />
      </div>
      <div className={successModal ? "success-modal active" : "success-modal"}>
        <TalentSuccessModal />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </TalentModalContext.Provider>
  );
}

export default Layout;
