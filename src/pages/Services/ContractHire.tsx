import ContractHireContainer from "../../components/organisms/Services/ContractHireContainer";
import HeroBg from "../../components/molecules/General/Hero-Bg";
import ContractHireImage from "../../assets/contract-hire.png"

const ContractHire = () => {
  return (
    <>
    <HeroBg
        title={"Seamless Success Through Strategic Contract Hire Service".toUpperCase()}
        desc="Enhance your overall performance seamlessly with expert remote contract professionals from Africa."
        link="talent-list"
        linkTitle="Schedule a call"
        img={ContractHireImage}
      />
      <ContractHireContainer />
    </>
  );
};

export default ContractHire;
