import "./home.styles.css";

import React, { useEffect, useState } from "react";
import SurveyContext from "../../Data/state-provider";
import SurveyItem from "../../Component/Survey/survey-item.component";

function Home() {
  const context = React.useContext(SurveyContext);
  const [surveys, setSurveys] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://localhost:44309/api/Survey", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setSurveys(JSON.parse(result));
        setData(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log(data);
  return (
    <div className="home">
      <h1>welcome</h1>

      {data.map((survey) => (
        <SurveyItem name={survey.name} id={survey.id} />
      ))}
    </div>
  );
}

export default Home;
