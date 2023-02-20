import React from "react";
import { ReactComponent as TickIcon } from "../assets/images/icon-checkmark.svg";

const AddonSelector = ({
  addonId = 1,
  addonTitle = "Online Service",
  addonDesc = "Access to multiplayer games",
  addonPrice = 1,
  isMonth = true,
  isActive = false,
  activeAddons = [],
  setActiveAddons = () => {},
}) => {
  const handleClick = (evt) => {
    const value = +evt.currentTarget.id;
    if (activeAddons.includes(value)) {
      const newAddons = activeAddons.filter((item) => +item !== value);
      setActiveAddons(newAddons);
    } else {
      const newAddons = [...activeAddons, value];
      setActiveAddons(newAddons);
    }
  };
  return (
    <div
      className={`w-full border ${
        isActive ? "border-marine-blue bg-light-blue" : "border-light-grey"
      } rounded-lg py-3 px-6 flex justify-between items-center`}
      id={addonId}
      onClick={handleClick}
    >
      <div className="flex gap-6 justify-start items-center">
        <span
          className={`w-[20px] h-[20px] rounded-sm ${
            isActive ? "bg-purplish-blue" : "border border-light-grey"
          } grid place-items-center`}
        >
          {isActive && <TickIcon />}
        </span>
        <div>
          <p className="text-marine-blue font-700">{addonTitle}</p>
          <p className="text-cool-grey">{addonDesc}</p>
        </div>
      </div>
      <span className="text-purplish-blue">
        +${addonPrice}/{isMonth ? "mo" : "yr"}
      </span>
    </div>
  );
};

export default AddonSelector;
