import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import ResearcherHomeScreen from "./pages/researcherHome";
import LoginScreen from "./pages/login";
import SignUpScreen from "./pages/signUp";
import CreateSurveyScreen from "./pages/createSurvey";
import createStudyPage from "./pages/createStudy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/researcher" component={ResearcherHomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignUpScreen} />
          <Route exact path="/create-survey" component={CreateSurveyScreen} />
          <Route exact path="/create-study" component={createStudyPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
