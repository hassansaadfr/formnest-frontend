import React from "react";
import { TrashBtn } from "./Buttons";
import { Star, FileText } from "react-feather";

export const QuestionCard = ({
  questionsList,
  handleChangeQuestion,
  deleteQuestion,
}) => {
  return (
    <div className="questions">
      {questionsList &&
        questionsList
          .sort((a, b) => Number(a.questionNumber) - Number(b.questionNumber))
          .map((value, index) => (
            <div style={{ display: "flex", marginTop: 8 }} key={index}>
              <div
                style={{
                  padding: 3,
                  display: "flex",
                  alignItems: "center",
                }}
                className={`btn-${value.type}-question`}
              >
                <span style={{ marginRight: 5 }}>{value.questionNumber} -</span>
                {value.type === "note" ? <Star /> : <FileText />}
              </div>
              <input
                type="text"
                defaultValue={questionsList[index].question}
                onChange={(e) => handleChangeQuestion(e, index)}
                style={{ flex: 10 }}
              />
              <div style={{ display: "flex", marginLeft: 4 }}>
                <TrashBtn
                  type="btn-danger"
                  handleClick={() => deleteQuestion(value._id)}
                />
              </div>
            </div>
          ))}
    </div>
  );
};

export default QuestionCard;
