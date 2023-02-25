import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div
      className={`${className} w-[900px] h-[600px] sm:w-[335px] sm:h-fit bg-white shadow-lg rounded-xl mx-auto p-5 sm:p-0`}
    >
      {children}
    </div>
  );
};

export default Card;
