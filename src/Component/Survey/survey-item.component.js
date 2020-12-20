import React from "react";
import "./survey.styles.css";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
function SurveyItem({ id, name }) {
  const history = useHistory();

  console.log("name is ", name);
  return (
    <div>
      <Button variant="primary">{name}</Button>
    </div>
  );
}

export default SurveyItem;
