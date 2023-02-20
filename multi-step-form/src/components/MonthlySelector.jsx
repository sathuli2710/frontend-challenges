import React from "react";

const MonthlySelector = ({ isMonth = false, setIsMonth = () => {} }) => {
  return (
    <div className="w-full h-[50px] bg-magnolia rounded-lg flex justify-center items-center gap-3">
      <span className="text-[16px] font-[700] text-marine-blue">Monthly</span>
      <div
        className={`w-[40px] h-[20px] rounded-xl bg-marine-blue px-1 flex items-center`}
        onClick={() => setIsMonth(!isMonth)}
      >
        <span
          className={`block w-[13px] h-[13px] rounded-full bg-white z-10 transition duration-500 ease-in-out ${
            isMonth ? "translate-x-0" : "translate-x-[19px]"
          }`}
        ></span>
      </div>
      <span className="text-[16px] font-[700] text-marine-blue">yearly</span>
    </div>
  );
};

export default MonthlySelector;
