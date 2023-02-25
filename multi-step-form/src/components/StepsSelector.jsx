import React from "react";

const StepsSelector = ({
  stepNumber = 1,
  stepName = "Step 1",
  title = "Your Info",
  isActive = true,
  setActiveStep = () => {},
  formDetails = {},
  setError,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`cursor-pointer w-[40px] h-[40px] rounded-full ${
          isActive
            ? "bg-light-blue border border-transparent text-black"
            : " bg-none border border-white text-white"
        } text-center grid place-items-center text-[18px] font-[700]`}
        id={stepNumber}
        onClick={(evt) => setActiveStep(+evt.currentTarget.id)}
      >
        {stepNumber}
      </div>
      <div className="uppercase font-[700] sm:hidden">
        <p className="text-cool-grey">{stepName}</p>
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
};

export default StepsSelector;
