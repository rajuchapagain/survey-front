import "./App.css";
import react, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/header.component";
import Result from "./Page/Result/result.page";
import Home from "./Page/Home/home.page";
import Survey from "./Page/Survey/survey.page";
import SurveyContext from "./Data/state-provider";
function App() {
  const [surveys, setSurveys] = useState([]);
  return (
    <SurveyContext.Provider
      value={{
        surveys,
      }}
    >
      <div className="app-container">
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
    </SurveyContext.Provider>
  );
}

export default App;
