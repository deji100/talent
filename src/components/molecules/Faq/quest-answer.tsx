import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Values {
    question: string,
    answer?: string
}

const QuestionAnswer = (values: Values) => {
  const [drop, setDrop] = useState(false);
  
  const handleClick = () => {
    setDrop(prev => !prev)
  }
  return (
    <div className="quest-answer">
      <p className="question">{values.question} <ExpandMoreIcon onClick={handleClick} className="drop" /></p>
      {drop && <p className="answer">{values.answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
