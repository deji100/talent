import ModalImg from "../../../assets/modal-img.png"
import SecondSectionContents from "../../molecules/Talent-Modal/Second-Section-Contents"
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useContext } from 'react';
import {TalentModalContext} from "../../../Layout"

const TalentModal = () => {
  const {setModalToggle} = useContext(TalentModalContext)

  return (
    <div className="inner-talent-modal">
        <div className="banner">
            <img src={ModalImg} alt="Modal Image" />
        </div>
        <div className="form-container">
            <button className="back" onClick={() => setModalToggle(prev => !prev)}><ReplyOutlinedIcon /> Back</button>
            <SecondSectionContents />
        </div>
    </div>
  )
}

export default TalentModal