import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import ResearcherHomeScreen from "./pages/researcherHome";
import LoginScreen from "./pages/login";
import SignUpScreen from "./pages/signUp";
import createStudyPage from "./pages/createStudy";
import PrivacyPolicyPage from "./pages/privacyPolicy";
import TermsAndConditionsPage from "./pages/termsAndConditions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ResearcherHomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignUpScreen} />
          <Route exact path="/create-study" component={createStudyPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route
            exact
            path="/terms-conditions"
            component={TermsAndConditionsPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
