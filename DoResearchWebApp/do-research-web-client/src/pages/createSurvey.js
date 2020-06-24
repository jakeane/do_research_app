import React from "react";

function CreateSurveyScreen() {
  const formConfig = {
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdAakPY6bU3fJsDxFBUFTkhS7xG4LaPVpNwEDFbF60mRiTJuA/viewform?embedded=true",
    inputs: [{ type: "text" }],
    redirectURL: "http://localhost:3000/create-study",
  };

  return (
    <div>
      <h1>Create Survey Screen</h1>
    </div>
  );
}

export default CreateSurveyScreen;
