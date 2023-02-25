import React from "react";
import { ReactComponent as ArcadeIcon } from "../assets/images/icon-arcade.svg";

const PlanSelector = ({
  planId = 1,
  planTitle = "Arcade",
  planPrice = 9,
  isMonth = true,
  planIcon = <ArcadeIcon />,
  isActive = false,
  setActivePlan = () => {},
}) => {
  return (
    <div
      className={`cursor-pointer border hover:border-marine-blue hover:bg-light-blue ${
        isActive
          ? "border-marine-blue bg-light-blue pointer-events-none"
          : "border-light-grey"
      } rounded-lg py-4 px-3 flex min-md:flex-col min-md:justify-between gap-4`}
      id={planId}
      onClick={(evt) => setActivePlan(+evt.currentTarget.id)}
    >
      <span className="min-md:mb-12">{planIcon}</span>
      <div>
        <p className="font-[700] text-[20px] sm:text-[16px] text-marine-blue">
          {planTitle}
        </p>
        <p className="font-[700] text-[16px] sm:text-[12px] text-cool-grey">
          ${planPrice}/{isMonth ? "mo" : "yr"}
        </p>
        {isMonth !== true && (
          <p className="font-[400] text-[16px] sm:text-[12px] text-marine-blue">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanSelector;
