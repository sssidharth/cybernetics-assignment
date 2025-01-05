import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from '../App';

describe('User Search Functionality', () => {
  test('filters user list based on search input', () => {
    render(<Router><App /></Router>);

    // Initial state: all users should be visible
    const emily = screen.getByText('Emily Johnson');
    const sophia = screen.getByText('Sophia Brown');
    const olivia = screen.getByText('Olivia Wilson');

    expect(emily).toBeInTheDocument();
    expect(sophia).toBeInTheDocument();
    expect(olivia).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search for Users");
    fireEvent.change(searchInput, { target: { value: 'sophia' } });

    expect(emily).not.toBeInTheDocument();
    expect(sophia).toBeInTheDocument();
    expect(olivia).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'emily' } });

    // After searching, only "Emily" should be visible
    expect(emily).toBeInTheDocument();
    expect(sophia).not.toBeInTheDocument();
    expect(olivia).not.toBeInTheDocument();

    // Clear the search
    fireEvent.change(searchInput, { target: { value: '' } });

    // All users should be visible again
    expect(emily).toBeInTheDocument();
    expect(sophia).toBeInTheDocument();
    expect(olivia).toBeInTheDocument();
  });
});