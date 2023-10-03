import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Assign_Comment } from "../../../state-manager/talent-reducer";
import { TalentModalContext } from "../../../Layout";

const TalentCommentInput = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { steps } = useContext(TalentModalContext);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    dispatch(Assign_Comment(comment));

    if (steps.step1 && steps.step2 && steps.step3) {
      setComment("");
    }
  }, [dispatch, comment, steps.step3]);

  return (
    <div className="staff-checker comment">
      <label htmlFor="comment" className="staff-label">
        Any thing else you’d like to tell us? (Optional)
      </label>
      <textarea
        className="talent-comment"
        name="comment"
        id="comment"
        placeholder="Tell us anything you’d like us to know before we meet."
        value={comment}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TalentCommentInput;
