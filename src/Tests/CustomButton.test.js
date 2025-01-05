/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../Components/Utilities/CustomButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);

describe('CustomButton Component', () => {
  test('renders with text and icon', () => {
    render(<CustomButton text="Click Me" icon={faCoffee} />);

    // Check if the button is in the document
    const buttonElement = screen.getByRole('button', { name: "Click Me" });
    expect(buttonElement).toBeInTheDocument();

    // Check if the icon is rendered
    const iconElement = buttonElement.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders without an icon', () => {
    render(<CustomButton text="Click Me" />);

    // Check if the button is in the document
    const buttonElement = screen.getByRole('button', { name: "Click Me" });
    expect(buttonElement).toBeInTheDocument();

    // Ensure no icon is rendered
    const iconElement = buttonElement.querySelector('svg');
    expect(iconElement).not.toBeInTheDocument();
  });

  test('calls onclick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<CustomButton text="Click Me" onclick={mockOnClick} />);

    const buttonElement = screen.getByRole('button', { name: "Click Me" });
    
    fireEvent.click(buttonElement);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies additional class names', () => {
    render(<CustomButton text="Click Me" className="test-class" />);
    
    const buttonElement = screen.getByRole('button', { name: "Click Me" });
    
    // Check if the button contains the additional class
    expect(buttonElement).toHaveClass('test-class');
  });
});