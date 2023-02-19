import React, { useEffect, useRef, useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour, ThankYou } from "./steps";

const Form = ({ step = 1 }) => {
  const stepsDetail = [
    {
      stepNumber: 1,
      title: "Personal info",
      desc: "Please provide your name, email address, and phone number.",
    },
    {
      stepNumber: 2,
      title: "Select your plan",
      desc: "You have the option of monthly or yearly billing.",
    },
    {
      stepNumber: 3,
      title: "Pick add-ons",
      desc: "Add-ons help enhance your gaming experience.",
    },
    {
      stepNumber: 4,
      title: "Finishing up",
      desc: "Double-check everything looks OK before confirming.",
    },
  ];
  const [currentStep, setCurrentStep] = useState(stepsDetail[0]);
  useEffect(() => {
    setCurrentStep(() => stepsDetail.find((item) => item.stepNumber === step));
  }, [step]);
  return (
    <div className="py-8">
      <h1 className="text-marine-blue text-[36px] font-[700]">
        {currentStep.title}
      </h1>
      <p className="text-cool-grey text-[16px] font-[400] mb-8">
        {currentStep.desc}
      </p>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 0 && <ThankYou />}
    </div>
  );
};

export default Form;
