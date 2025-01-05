import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import CustomCard from "../Utilities/CustomCard";
import ProfileImage from "../Utilities/ProfileImage";
import UserInputs from "./UserInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Utilities/CustomButton";

export const initialState = {
  firstName: {
    name: 'First Name',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  lastName: {
    name: 'Last Name',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  email: {
    name: 'Email',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  phone: {
    name: 'Phone',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  companyName: {
    name: 'Company Name',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  companyAddress: {
    name: 'Company Address',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  companyDepartment: {
    name: 'Company Department',
    value: "",
    isValid: true,
    errorMessage: ""
  },
  companyTitle: {
    name: 'Company Title',
    value: "",
    isValid: true,
    errorMessage: ""
  },
}

const UserSettings = () => {

  const [formInputs, setFormInputs] = useState(initialState);

  const profileData = useSelector(state => state.usersReducer.selectedProfile);


  useEffect(() => {
    if (profileData && Object.keys(profileData).length > 0) {
    const updatedFormInputs = { ...formInputs };
    Object.keys(updatedFormInputs).forEach((input) => {
      updatedFormInputs[input].value = profileData[input]
    });
    setFormInputs(updatedFormInputs);
  }
  }, [profileData])


  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
     ...prevInputs,
     [name]: {
       ...prevInputs[name],
       value: value
     }
    }))
  } ,[])

  const validateFormInputs = () => {
    let isFormValid = true;
  
    const updatedFormInputs = { ...formInputs };
  
    Object.keys(updatedFormInputs).forEach((input) => {
      const value = updatedFormInputs[input].value.trim();
  
      if (!value) {
        updatedFormInputs[input].isValid = false;
        updatedFormInputs[input].errorMessage = `${updatedFormInputs[input].name} cannot be empty`;
        isFormValid = false;
      } else {
        updatedFormInputs[input].isValid = true;
        updatedFormInputs[input].errorMessage = "";
        
        // Specific validation for email
        if (input === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            updatedFormInputs[input].isValid = false;
            updatedFormInputs[input].errorMessage = "Invalid email format";
            isFormValid = false;
          }
        }
      }
    });

    setFormInputs(updatedFormInputs);
  
    return isFormValid;
  };

  const handleSubmit = (e) => {
    validateFormInputs(formInputs)
    e.preventDefault();
  }

  return (
    <div className="inner-container h-[100vh] items-center">
      <CustomCard className="p-12 md:w-4/5 mt-7 min-h-4/5">
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between mt-10">
            <div className="relative mb-4 md:mb-0">
              <ProfileImage
                src={profileData && profileData.image ? profileData.image : ''} // Replace with actual profile picture URL
                alt="Profile"
                className="h-24 w-24 object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-black text-white p-1 rounded-full text-sm">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          <UserInputs handleInputChange={handleInputChange} formInputs={formInputs} />
        </div>
        {/* Save Button */}
        <div className="mt-6 flex justify-end">
         <CustomButton text="Edit User" onclick={handleSubmit} className="md:w-56 w-full mt-4 md:mr-6 mb-4" />
        </div>
      </CustomCard>
    </div>
  );
};

export default UserSettings;
