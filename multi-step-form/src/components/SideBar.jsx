import React, { useEffect, useState } from "react";
import { ReactComponent as SidebarBg } from "../assets/images/bg-sidebar-desktop.svg";
import StepsSelector from "./StepsSelector";

const SideBar = ({ setStep }) => {
  const [activeTab, setActiveTab] = useState(1);
  const steps = [
    { stepNumber: 1, stepName: "Step 1", title: "Your Info" },
    { stepNumber: 2, stepName: "Step 2", title: "Select Plan" },
    { stepNumber: 3, stepName: "Step 3", title: "Add-ons " },
    { stepNumber: 4, stepName: "Step 4", title: "Summary" },
  ];
  useEffect(() => {
    setStep(activeTab);
  }, [activeTab]);

  return (
    <div className="relative">
      <SidebarBg />
      <div className="absolute inset-0 w-full h-full p-8">
        <div className="flex flex-col gap-6">
          {steps.map((item, idx) => (
            <StepsSelector
              {...item}
              isActive={idx + 1 === activeTab ? true : false}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
