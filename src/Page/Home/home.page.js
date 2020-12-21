import "../../App.css";

import React, { useEffect, useState } from "react";
import SurveyItem from "../../Component/SurveyItem/survey-item.component";
import { useStateValue } from "../../ContextAPI/stateProvider";
function Home() {
  const [{ surveys }, dispatch] = useStateValue();

  return (
    <div className="home">
      <h1 className="home__header">Compass Survey</h1>
      {surveys.map((activeSurvey) => (
        <SurveyItem activeSurvey={activeSurvey} />
      ))}
    </div>
  );
}

export default Home;
