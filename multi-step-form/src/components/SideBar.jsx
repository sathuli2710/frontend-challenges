import React from "react";
import { ReactComponent as SidebarBgDesktop } from "../assets/images/bg-sidebar-desktop.svg";
import { ReactComponent as SidebarBgMobile } from "../assets/images/bg-sidebar-mobile.svg";
import StepsSelector from "./StepsSelector";

const SideBar = ({
  activeStep,
  setActiveStep = () => {},
  formDetails = {},
}) => {
  const steps = [
    { stepNumber: 1, stepName: "Step 1", title: "Your Info" },
    { stepNumber: 2, stepName: "Step 2", title: "Select Plan" },
    { stepNumber: 3, stepName: "Step 3", title: "Add-ons " },
    { stepNumber: 4, stepName: "Step 4", title: "Summary" },
  ];

  return (
    <div className="relative w-fit">
      <SidebarBgMobile className="min-md:hidden mx-auto" />
      <SidebarBgDesktop className="sm:hidden mx-0" />
      <div className="absolute inset-0 w-full h-full p-8">
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6">
          {steps.map((item, idx) => (
            <StepsSelector
              key={item.stepNumber}
              stepNumber={item.stepNumber}
              {...item}
              isActive={item?.stepNumber === activeStep ? true : false}
              setActiveStep={setActiveStep}
              formDetails={formDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
