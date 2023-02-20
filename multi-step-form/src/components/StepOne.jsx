import React from "react";

const StepOne = ({ formDetails, isFieldEmpty = {} }) => {
  const handleInput = (e) => {
    switch (e.currenTarget.id) {
      case "name":
        e.target.value === ""
          ? (isFieldEmpty.name = true)
          : (isFieldEmpty.name = false);
        formDetails.current.personalInfo.name = e.target.value;
        break;
      case "email":
        e.target.value === ""
          ? (isFieldEmpty.email = true)
          : (isFieldEmpty.email = false);
        formDetails.current.personalInfo.email = e.target.value;
        break;
      case "phone":
        e.target.value === ""
          ? (isFieldEmpty.phone = true)
          : (isFieldEmpty.phone = false);
        formDetails.current.personalInfo.phone = e.target.value;
        break;
      default:
        console.log("Nothing");
    }
  };

  const validateName = (name) => {
    return name.test(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  };
  const validateEmail = (email) => {
    return email.test(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };
  const validatePhone = (phone) => {
    return phone.test(/^(\+?\d{1,2}\s)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <label className="text-marine-blue text-[14px] font-[500]">
            Name
          </label>
          {isFieldEmpty.name && (
            <span className="text-strawberry-red text-[14px] font-[500]">
              The field is required
            </span>
          )}
        </div>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          className="text-marine-blue font-[700] border border-light-grey py-2 px-4 rounded-md focus:outline-none focus:border-purplish-blue"
          defaultValue={formDetails.current.personalInfo.name}
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <label className="text-marine-blue text-[14px] font-[500]">
            Email Address
          </label>
          {isFieldEmpty.email && (
            <span className="text-strawberry-red text-[14px] font-[500]">
              The field is required
            </span>
          )}
        </div>
        <input
          id="email"
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          className={`text-marine-blue font-[700] border ${
            isFieldEmpty.email ? "border-strawberry-red" : "border-light-grey"
          } py-2 px-4 rounded-md focus:outline-none focus:border-purplish-blue`}
          defaultValue={formDetails.current.personalInfo.email}
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <label className="text-marine-blue text-[14px] font-[500]">
            Phone Number
          </label>
          {isFieldEmpty.phone && (
            <span className="text-strawberry-red text-[14px] font-[500]">
              The field is required
            </span>
          )}
        </div>
        <input
          id="phone"
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="text-marine-blue font-[700] border border-light-grey py-2 px-4 rounded-md focus:outline-none focus:border-purplish-blue"
          defaultValue={formDetails.current.personalInfo.phone}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default StepOne;
