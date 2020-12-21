import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/header.component";
import Result from "./Page/Result/result.page";
import Home from "./Page/Home/home.page";
import Survey from "./Page/Survey/survey.page";
import { useStateValue } from "./ContextAPI/stateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //Define the document title
    document.title = "Compass Education";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://localhost:44309/api/v1/Survey", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result is", result);
        dispatch({
          type: "INIT_SURVEY",
          surveys: JSON.parse(result),
        });
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
