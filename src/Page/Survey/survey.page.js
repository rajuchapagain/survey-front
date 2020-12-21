import React from "react";
import Question from "../../Component/Question/question.component";
import { useStateValue } from "../../ContextAPI/stateProvider";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../App.css";
function Survey() {
  const history = useHistory();
  const [{ activeSurvey }] = useStateValue();
  return activeSurvey ? (
    <div className="home">
      <h1 className="home__header">Compass Survey</h1>
      <div className="home__header">{activeSurvey?.name}</div>

      <hr />
      {activeSurvey?.questions.map((question, index) => (
        <Question question={question} index={index + 1} />
      ))}
      <hr />
      <div className="survey__footer">
        <Link to="/">
          <Button className="back__button">Back</Button>
        </Link>
      </div>
    </div>
  ) : (
    history.replace("/")
  );
}

export default Survey;
