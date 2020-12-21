import React from "react";
import "../../App.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../ContextAPI/stateProvider";

function SurveyItem({ activeSurvey }) {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const handleClick = (e) => {
    dispatch({
      type: "SET_CURRENT_SURVEY",
      activeSurvey,
    });
    history.replace("/survey");
  };
  return (
    <div>
      <Button
        id={activeSurvey.id}
        onClick={handleClick}
        className="survey__item"
      >
        {activeSurvey.name}
      </Button>
    </div>
  );
}

export default SurveyItem;
