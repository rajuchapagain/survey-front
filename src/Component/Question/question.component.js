import React from "react";
import { Card, Button } from "react-bootstrap";
import Checkbox from "../Checkbox/checkbox.component";

function Question({ question, index }) {
  return (
    <Card>
      <Card.Body>
        <Card.Header>Question {index}</Card.Header>
        <Card.Subtitle>{question.title}</Card.Subtitle>
        <Card.Title>{question.subtitle}</Card.Title>
        <Card.Text>
          {question.options.map((option) => {
            return <Checkbox option={option} />;
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Question;
