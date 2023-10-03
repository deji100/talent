import { useContext } from "react";
import { TalentModalContext } from "../../../../Layout";

interface Values {
  title: string
}

const NavButton = (values: Values) => {
  const {setModalToggle} = useContext(TalentModalContext)

  return (
    <div className="navbarBut">
      <button
        type="button"
        onClick={() => setModalToggle((prev) => !prev)}
      >
        {values.title}
      </button>
    </div>
  );
};

export default NavButton;
