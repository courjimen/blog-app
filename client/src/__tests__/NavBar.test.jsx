// client/src/__tests__/NavBar.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar Component', () => {
  test('renders the login link', () => {
    render(
    <BrowserRouter>
    <NavBar />
    </BrowserRouter>
);
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });
});