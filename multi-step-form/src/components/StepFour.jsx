import React from "react";
import { plansDetail } from "../constants/plansDetail";
import { addonsDetail } from "../constants/addonsDetail";

const StepFour = ({ formDetails, setActiveStep = () => {} }) => {
  const activePlan = plansDetail.find(
    (plan) => plan.id === formDetails.planInfo.activePlan
  );
  const activeAddons = addonsDetail.filter((addon) =>
    formDetails.addOns.includes(addon?.id)
  );
  const isMonth = formDetails.planInfo.isMonth;
  let totalPrice;
  const priceKey = isMonth ? "monthlyPrice" : "yearlyPrice";
  const activePlanPrice = activePlan[priceKey];
  const activeAddonsPrice = activeAddons.reduce(
    (currentValue, addon) => currentValue + addon[priceKey],
    0
  );
  totalPrice = activePlanPrice + activeAddonsPrice;
  return (
    <>
      <div className="w-full py-5 px-6 bg-alabaster rounded-lg text-[12px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-marine-blue font-[700]">
              {activePlan.title}
              <span className="ml-1">({isMonth ? "Monthly" : "Yearly"})</span>
            </p>
            <p
              className="text-cool-grey hover:text-purplish-blue underline"
              onClick={() => setActiveStep(2)}
            >
              Change
            </p>
          </div>
          <p className="text-[20px] sm:text-[14px] text-marine-blue font-[700]">
            ${isMonth ? activePlan.monthlyPrice : activePlan.yearlyPrice}/
            {isMonth ? "mo" : "yr"}
          </p>
        </div>
        <span className="block w-full border-b border-light-grey my-6"></span>
        <div className="flex flex-col gap-3">
          {activeAddons.map((addon) => (
            <div className="flex justify-between items-center" key={addon?.id}>
              <p className="text-cool-grey">{addon?.title}</p>
              <p>
                +${isMonth ? addon?.monthlyPrice : addon?.yearlyPrice}/
                {isMonth ? "mo" : "yr"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-5 mt-5">
        <span className="text-cool-grey">
          Total(per {isMonth ? "month" : "year"})
        </span>
        <span className="text-purplish-blue text-[24px] sm:text-[18px] font-[700]">
          +${totalPrice}/{isMonth ? "mo" : "yr"}
        </span>
      </div>
    </>
  );
};

export default StepFour;
