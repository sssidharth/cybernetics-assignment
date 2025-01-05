import React, { memo } from "react";
import CustomInputs from "../Utilities/CustomInputs";

const UserInputs = ({ formInputs, handleInputChange }) => {
    console.log('rendered')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-4/5 w-full">
        {Object.keys(formInputs).map((input, index) => {
            return (
                <div className="flex flex-col" key={index}>
                <p className="card_header">{formInputs[input].name}</p>
                <CustomInputs
                  type="rounded-normal"
                  inputType="text"
                  name={input}
                  placeholder={formInputs[input].name}
                  value={formInputs[input].value}
                  onChange={(e) => handleInputChange(e)}
                  className="md:w-[23vw] w-full"
                  isValid={formInputs[input].isValid}
                  errorMessage={formInputs[input].errorMessage}
                />
              </div>
            )
        })} 
        </div>
  );
};

export default memo(UserInputs);
