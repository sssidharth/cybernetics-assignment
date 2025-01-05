import React from "react";

const CustomCard = ({ children, className, shadowClass = "shadow-sm" }) => {
  return (
      <div className={`flex flex-col p-4 mb-10 rounded-2xl border border-gray-300 bg-white ${shadowClass} ${className}`}>
        {children}
    </div>
  );
};

export default CustomCard;
