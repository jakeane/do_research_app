import React, { useState } from "react";
import StudyDetailsPage from "./StudyDetails";

function FormPage() {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <StudyDetailsPage setStep={setStep} />;
    case 2:
      return <h1>Confirm Study</h1>;
    case 3:
      return <h1>Study Success</h1>;
  }
  return <div></div>;
}

export default FormPage;
