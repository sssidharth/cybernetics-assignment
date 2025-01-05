import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomInputs from '../Components/Utilities/CustomInputs';

describe('CustomInputs Component', () => {

  test('renders input with correct placeholder and label', () => {
    render(
      <CustomInputs 
        inputType="text" 
        name="username" 
        placeholder="Enter your username" 
        onChange={() => {}} 
        value="" 
        isValid={true} 
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
  });

  test('shows error message when isValid is false', () => {
    render(
      <CustomInputs 
        inputType="text" 
        name="username" 
        placeholder="Enter your username" 
        onChange={() => {}} 
        value="" 
        isValid={false} 
        errorMessage="Username is required"
      />
    );

    const errorMessage = screen.getByText("Username is required");
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not show error message when isValid is true', () => {
    render(
      <CustomInputs 
        inputType="text" 
        name="username" 
        placeholder="Enter your username" 
        onChange={() => {}} 
        value="" 
        isValid={true} 
      />
    );

    const errorMessage = screen.queryByText("Username is required");
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('calls onChange function when input is changed', () => {
    const mockOnChange = jest.fn();
    render(
      <CustomInputs 
        inputType="text" 
        name="username" 
        placeholder="Enter your username" 
        onChange={mockOnChange} 
        value="" 
        isValid={true} 
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your username" );
    fireEvent.change(inputElement, { target: { value: 'NewUser' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  
  test('displays the leading icon if provided', () => {
    render(
      <CustomInputs 
        inputType="text" 
        name="username" 
        placeholder="Enter your username" 
        onChange={() => {}} 
        value="" 
        isValid={true} 
        icon={<span>%</span>} 
      />
    );

    const iconElement = screen.getByText('%');
    expect(iconElement).toBeInTheDocument();
  });
});