import React from "react";
import { ReactComponent as ThankYouIcon } from "../assets/images/icon-thank-you.svg";

const ThankYou = ({ title, desc }) => {
  return (
    <div className="w-full h-full sm:py-[60px] flex flex-col justify-center items-center gap-3">
      <ThankYouIcon />
      <h1 className="text-[36px] text-marine-blue font-[700]">{title}</h1>
      <p className="text-[16px] text-cool-grey font-[700] text-center">
        {desc}
      </p>
    </div>
  );
};

export default ThankYou;
