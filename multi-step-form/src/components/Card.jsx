import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div
      className={`${className} w-[900px] h-[600px] bg-white shadow-lg rounded-xl mx-auto p-5`}
    >
      {children}
    </div>
  );
};

export default Card;
