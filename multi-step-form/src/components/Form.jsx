import React, { useEffect, useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour, ThankYou } from "./steps";
import { stepsDetail } from "../constants/stepsDetail";

const Form = ({
  step = 1,
  setStep = () => {},
  formDetails,
  setActiveTab = () => {},
}) => {
  const [currentStep, setCurrentStep] = useState(stepsDetail[0]);
  useEffect(() => {
    setCurrentStep(() => stepsDetail.find((item) => item.stepNumber === step));
  }, [step]);

  const isFieldEmpty = {
    name: false,
    email: false,
    phone: false,
  };

  const validateName = (name) => {
    return name.test(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  };
  const validateEmail = (email) => {
    return email.test(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };
  const validatePhone = (phone) => {
    return phone.test(/^(\+?\d{1,2}\s)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);
  };

  const handleBack = () => {
    setActiveTab((prevStep) => prevStep - 1);
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (step === 1) {
      if (
        formDetails.current.personalInfo.name !== "" &&
        formDetails.current.personalInfo.email !== "" &&
        formDetails.current.personalInfo.phone !== "" 
      ) {
        setStep((prevStep) => prevStep + 1);
        setActiveTab((prevStep) => prevStep + 1);
      } else {
        console.log("Hello : ", isFieldEmpty);
      }
    } else if (step !== 4) {
      setStep((prevStep) => prevStep + 1);
      setActiveTab((prevStep) => prevStep + 1);
    } else {
      setStep(5);
    }
  };
  return (
    <div className="py-8 h-full w-full flex flex-col justify-between pr-8">
      <div className="h-full">
        {step !== 5 && (
          <>
            <h1 className="text-marine-blue text-[36px] font-[700]">
              {currentStep.title}
            </h1>
            <p className="text-cool-grey text-[16px] font-[400] mb-8">
              {currentStep.desc}
            </p>
          </>
        )}
        <div className="w-full h-full">
          {step === 1 && (
            <StepOne formDetails={formDetails} isFieldEmpty={isFieldEmpty} />
          )}
          {step === 2 && <StepTwo formDetails={formDetails} />}
          {step === 3 && <StepThree formDetails={formDetails} />}
          {step === 4 && (
            <StepFour formDetails={formDetails} setActiveTab={setActiveTab} />
          )}
          {step === 5 && (
            <ThankYou title={currentStep.title} desc={currentStep.desc} />
          )}
        </div>
      </div>
      {step !== 5 && (
        <>
          <div
            className={`flex ${step === 1 ? "justify-end" : "justify-between"}`}
          >
            {step !== 1 && (
              <button
                className="text-[18px] text-cool-grey py-3 px-4"
                onClick={handleBack}
              >
                Go Back
              </button>
            )}
            <button
              className={`text-[18px] ${
                step === 4
                  ? "bg-purplish-blue hover:bg-pastel-blue"
                  : "bg-marine-blue hover:bg-purplish-blue"
              } text-white py-3 px-5 rounded-lg`}
              onClick={handleSubmit}
            >
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
