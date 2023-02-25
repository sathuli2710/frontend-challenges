import React, { useEffect, useState } from "react";
import PlanSelector from "./PlanSelector";
import MonthlySelector from "./MonthlySelector";
import { plansDetail } from "../constants/plansDetail";

const StepTwo = ({ formDetails }) => {
  const [isMonth, setIsMonth] = useState(formDetails.planInfo.isMonth);
  const [activePlan, setActivePlan] = useState(formDetails.planInfo.activePlan);
  useEffect(() => {
    formDetails.planInfo.isMonth = isMonth;
    formDetails.planInfo.activePlan = activePlan;
  }, [isMonth, activePlan, formDetails]);

  return (
    <div>
      <div className="grid grid-cols-3 sm:flex sm:flex-col gap-4 mb-8">
        {plansDetail.map((plan) => (
          <PlanSelector
            key={plan?.id}
            planId={plan?.id}
            planTitle={plan?.title}
            planPrice={isMonth ? plan?.monthlyPrice : plan?.yearlyPrice}
            isMonth={isMonth}
            planIcon={plan?.icon}
            isActive={plan?.id === activePlan ? true : false}
            setActivePlan={setActivePlan}
          />
        ))}
      </div>
      <MonthlySelector isMonth={isMonth} setIsMonth={setIsMonth} />
    </div>
  );
};

export default StepTwo;
