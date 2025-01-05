import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserSettings from "../Components/Settings/UserSettings";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Redux/reducers/usersReducer";

describe("UserSettings Component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        usersReducer: usersReducer,
      },
      preloadedState: {
        usersReducer: {
          selectedProfile: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            companyName: "Company",
            companyAddress: "Address",
            companyDepartment: "Department",
            companyTitle: "Title",
            image: "", // Placeholder for profile image
          },
        },
      },
    });
  });

  test("validates input change and updates state", () => {
    render(
      <Provider store={store}>
        <UserSettings />
      </Provider>
    );

    // Find the input for first name and change its value
    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    fireEvent.change(firstNameInput, { target: { value: "Jane" } });

    // Check that the input value has updated correctly
    expect(firstNameInput.value).toBe("Jane");
  });

  test("validates empty inputs and shows error messages", async () => {
    render(
      <Provider store={store}>
        <UserSettings />
      </Provider>
    );

    // Attempt to submit the form with empty fields
    const submitButton = screen.getByRole("button", { name: /edit user/i });
    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(firstNameInput, { target: { value: "" } });
    fireEvent.change(lastNameInput, { target: { value: "" } });
    fireEvent.change(emailInput, { target: { value: "" } });

    fireEvent.click(submitButton);

    // Check for error messages under required fields
    expect(
      await screen.findByText("First Name cannot be empty")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Last Name cannot be empty")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Email cannot be empty")
    ).toBeInTheDocument();
  });

  test("validates email format correctly", async () => {
    render(
      <Provider store={store}>
        <UserSettings />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "invalid-val" } });

    const submitButton = screen.getByRole("button", { name: /edit user/i });
    fireEvent.click(submitButton);

    // Check for the email validation error
    expect(
      await screen.findByText(/invalid email format/i)
    ).toBeInTheDocument();
  });
});
