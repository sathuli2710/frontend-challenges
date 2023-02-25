import React, { useEffect, useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour, ThankYou } from "./steps";
import { stepsDetail } from "../constants/stepsDetail";

const Form = ({
  activeStep = 1,
  setActiveStep = () => {},
  formDetails = {},
}) => {
  const [currentStep, setCurrentStep] = useState(stepsDetail[0]);
  useEffect(() => {
    setCurrentStep(() =>
      stepsDetail.find((item) => item.stepNumber === activeStep)
    );
  }, [activeStep]);

  const isFieldEmpty = {
    name: false,
    email: false,
    phone: false,
  };

  // const validateName = (name) => {
  //   return name.test(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  // };
  // const validateEmail = (email) => {
  //   return email.test(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  // };
  // const validatePhone = (phone) => {
  //   return phone.test(/^(\+?\d{1,2}\s)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);
  // };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (activeStep !== 4) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setActiveStep(5);
    }
  };
  return (
    <div className="py-8 h-full w-full flex flex-col justify-between pr-8 sm:px-8">
      <div className="h-full">
        {activeStep !== 5 && (
          <>
            <h1 className="text-marine-blue text-[36px] sm:text-[24px] font-[700]">
              {currentStep.title}
            </h1>
            <p className="text-cool-grey text-[16px] sm:text-[12px] font-[400] mb-8">
              {currentStep.desc}
            </p>
          </>
        )}
        <div className="w-full h-full">
          {activeStep === 1 && (
            <StepOne formDetails={formDetails} isFieldEmpty={isFieldEmpty} />
          )}
          {activeStep === 2 && <StepTwo formDetails={formDetails} />}
          {activeStep === 3 && <StepThree formDetails={formDetails} />}
          {activeStep === 4 && (
            <StepFour formDetails={formDetails} setActiveStep={setActiveStep} />
          )}
          {activeStep === 5 && (
            <ThankYou title={currentStep.title} desc={currentStep.desc} />
          )}
        </div>
      </div>
      {activeStep !== 5 && (
        <div className="sm:fixed sm:bottom-0 sm:left-0 w-full px-4 bg-white py-3 z-50">
          <div
            className={`flex ${
              activeStep === 1 ? "justify-end" : "justify-between"
            }`}
          >
            {activeStep !== 1 && (
              <button
                className="text-[18px] text-cool-grey py-3 px-4"
                onClick={handleBack}
              >
                Go Back
              </button>
            )}
            <button
              className={`text-[18px] ${
                activeStep === 4
                  ? "bg-purplish-blue hover:bg-pastel-blue"
                  : "bg-marine-blue hover:bg-purplish-blue"
              } text-white py-3 px-5 rounded-lg`}
              onClick={handleSubmit}
            >
              {activeStep === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
