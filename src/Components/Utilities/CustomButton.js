import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = ({ text, icon, className, onclick }) => {

  return (
    <button
    onClick={onclick}
    className={` bg-black text-white px-4 py-3 rounded-full hover:font-semibold ${className}`}
  >
    {icon ? <FontAwesomeIcon className="mr-2" icon={icon} /> : null}
    {text}
  </button>
  )
};

export default CustomButton;
