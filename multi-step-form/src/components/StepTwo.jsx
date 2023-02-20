import React, { useEffect, useState } from "react";
import PlanSelector from "./PlanSelector";
import MonthlySelector from "./MonthlySelector";
import { plansDetail } from "../constants/plansDetail";

const StepTwo = ({ formDetails }) => {
  const [isMonth, setIsMonth] = useState(formDetails.current.planInfo.isMonth);
  const [activePlan, setActivePlan] = useState(
    formDetails.current.planInfo.activePlan
  );

  useEffect(() => {
    formDetails.current.planInfo.isMonth = isMonth;
    formDetails.current.planInfo.activePlan = activePlan;
  }, [isMonth, activePlan]);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
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
