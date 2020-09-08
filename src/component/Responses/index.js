import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../Container";
import { ArrowLeft, ChevronLeft } from "react-feather";
import { Link } from "react-router-dom";
import Notes from "../FormComponents/Notes";

const Reponses = () => {
  const { id } = useParams();
  const [step, setStep] = useState(0);
  const [stepNb, setStepNb] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formTitle, setFormTitle] = useState("");
  const [questionsList, setQuestionsList] = useState(0);
  const [currentReponse, setCurrentResponse] = useState("");

  const submitResponse = () => {
    axios.post(`https://formnest-backend-mt.herokuapp.com/reponse`, {
      form: id,
      question: questionsList[step - 1].question,
      reponse: currentReponse,
      type: questionsList[step - 1].type,
      questionNumber: questionsList[step - 1].questionNumber,
    });
  };

  const getQuestions = () => {
    axios
      .get(`https://formnest-backend-mt.herokuapp.com/form/${id}`)
      .then((v) => {
        console.log(v);
        setFormTitle(v.data.title);
      });
    axios
      .get(`https://formnest-backend-mt.herokuapp.com/questions`)
      .then((response) => {
        setQuestionsList(response.data.filter((value) => value.form === id));
        setStepNb(questionsList.length);
        setLoading(false);
      });
  };
  useEffect(() => {
    loading && getQuestions();
  });
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          className="btn-secondary-outlined"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ChevronLeft size="20px" />
          <h4 style={{ color: "#143742", fontSize: "bold" }} className="title">
            Mes formulaires
          </h4>
        </button>
      </Link>
      <div
        style={{
          backgroundColor: "#E9F6F9",
          width: "100%",
          borderRadius: 8,
          minHeight: "400px",
          marginTop: 5,
          padding: 10,
        }}
      >
        {step === stepNb + 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="title" style={{ color: "#143742" }}>
              Merci d'avoir répondu à ce formulaire
            </h2>
            <Link to="/">
              <button style={{ marginTop: 20 }} className="btn-primary">
                Accéder à mes formulaires
              </button>
            </Link>
          </div>
        )}
        {step === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4 className="title" style={{ color: "#84c0d2" }}>
              Sondage
            </h4>
            <h2
              className="title"
              style={{ color: "#143742", fontSize: "bold" }}
            >
              {formTitle}
            </h2>
            <h4 className="title" style={{ color: "#143742" }}>
              {stepNb} questions
            </h4>
            {stepNb > 0 && (
              <button
                style={{ width: "130px" }}
                onClick={() => setStep(1)}
                className="btn-primary"
              >
                Commencer
              </button>
            )}
          </div>
        )}
        {step > 0 && step <= stepNb && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4 className="title" style={{ color: "#84c0d2" }}>
              QUESTIONS {step}
            </h4>
            <h2 className="title" style={{ color: "#143742" }}>
              {questionsList[step - 1].question}
            </h2>
            {questionsList[step - 1].type === "text" ? (
              <textarea onChange={(e) => setCurrentResponse(e.target.value)} />
            ) : (
              <Notes
                handleChange={(v) => setCurrentResponse(v)}
                notEditable={false}
              />
            )}
          </div>
        )}
      </div>
      {step > 0 && step <= stepNb && (
        <div
          style={{
            backgroundColor: "#E9F6F9",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 8,
            padding: 10,
          }}
        >
          <button
            style={{ display: "flex", alignItems: "center" }}
            className="btn-secondary-outlined"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            <ArrowLeft />
            <span>Précédent</span>
          </button>
          <button
            onClick={() => {
              submitResponse();
              setStep(step + 1);
            }}
            className="btn-primary"
          >
            Suivant
          </button>
        </div>
      )}
    </Container>
  );
};

export default Reponses;
