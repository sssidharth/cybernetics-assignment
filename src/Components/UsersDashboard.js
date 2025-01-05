/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomCard from "./Utilities/CustomCard";
import ProfileImage from "./Utilities/ProfileImage";
import CustomButton from "./Utilities/CustomButton";
import { setSelectedUser } from "../Redux/actions/actions";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Utilities/LoaderComponent";

const UsersDashboard = () => {
  const [usersData, setUsersData] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.usersReducer.usersData);
  const searchVal = useSelector((state) => state.usersReducer.searchValue);
  const loading = useSelector((state) => state.usersReducer.loading);

  useEffect(() => {
    if (data && data.length > 0) {
      setUsersData(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchVal !== "") {
      setUsersData((prevVal) => {
        return prevVal.filter((val) =>
          val.firstName.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
    } else {
      setUsersData(data);
    }
  }, [searchVal]);

  const handleUserClick = (user) => {
    const dataToSend = {
      image: user.image,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      companyName: user.company.name,
      companyAddress: user.company.address.address,
      companyDepartment: user.company.department,
      companyTitle: user.company.title,
    };
    dispatch(setSelectedUser(dataToSend));
  };

  const renderUsers = () => {
    return usersData && usersData.length
      ? usersData.map((user) => {
          return (
            <CustomCard
              key={user.id}
              className="justify-between"
              children={
                <div className="flex lg:flex-row flex-col lg:items-center items-start w-full">
                  <ProfileImage
                    src={user.image}
                    alt={user.firstName}
                    className="w-[50%] lg:mr-16 lg:mb-0 mb-10"
                  />
                  <div className="profile_details">
                    <p className="font-semibold mr-2">Name:</p>
                    <p>{`${user.firstName} ${user.lastName}`}</p>
                  </div>
                  <div className="profile_details">
                    <p className="font-semibold mr-2">Email:</p>
                    <p>{user.email}</p>
                  </div>
                  <div className="profile_details">
                    <p className="font-semibold mr-2">Phone:</p>
                    <p>{user.phone}</p>
                  </div>
                  <div className="profile_details">
                    <p className="font-semibold mr-2">Company:</p>
                    <p>{user.company.name}</p>
                  </div>
                  <NavLink to="/settings">
                    <CustomButton
                      icon={faUser}
                      onclick={() => handleUserClick(user)}
                      text="View User"
                      className="cursor-pointer"
                    />
                  </NavLink>
                </div>
              }
            />
          );
        })
      : null;
  };

  return (
    <div className="inner-container">
    {loading ? <Loader /> : <div className="flex flex-col justify-between">{renderUsers()}</div>}
    </div>
  );
};

export default UsersDashboard;
