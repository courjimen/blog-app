import React from 'react';
import { render, screen, describe } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Subbies from '../components/Subbies.jsx';


describe('Subbies Component', () => {
  test('renders the subscribe form heading', () => {
    render(
      <BrowserRouter>
        <Subbies />
      </BrowserRouter>
    );
    const headingElement = screen.getByRole('heading', { name: /Subscribe to my Blog!/i });
    expect(headingElement).toBeInTheDocument();
  });
});