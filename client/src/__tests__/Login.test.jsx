import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Login', () => {
    test('renders the "Sign In" button', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const signInButton = screen.getByRole('button', { name: /sign in/i });
        expect(signInButton).toBeInTheDocument();
    });

    test('the "Sign In" button has the correct type', () => {
        render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>);
        const signInButton = screen.getByRole('button', { name: /sign in/i });
        expect(signInButton).toHaveAttribute('type', 'submit');
    });
});