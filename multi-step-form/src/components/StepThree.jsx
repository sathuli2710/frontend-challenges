import React, { useEffect, useState } from "react";
import AddonSelector from "./AddonSelector";
import { addonsDetail } from "../constants/addonsDetail";

const StepThree = ({ formDetails }) => {
  const isMonth = formDetails.planInfo.isMonth;
  const [activeAddons, setActiveAddons] = useState(formDetails.addOns);
  useEffect(() => {
    formDetails.addOns = activeAddons;
  }, [activeAddons, formDetails]);
  return (
    <div className="flex flex-col gap-6">
      {addonsDetail.map((addon) => (
        <AddonSelector
          key={addon?.id}
          addonId={addon?.id}
          addonTitle={addon?.title}
          addonDesc={addon?.desc}
          addonPrice={
            isMonth === true ? addon?.monthlyPrice : addon?.yearlyPrice
          }
          isMonth={isMonth}
          isActive={activeAddons.includes(addon?.id) ? true : false}
          activeAddons={activeAddons}
          setActiveAddons={setActiveAddons}
        />
      ))}
    </div>
  );
};

export default StepThree;
