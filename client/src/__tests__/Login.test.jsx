import * as React from 'react';
import '@testing-library/react';
import { render, screen } from '@testing-library/react';



import Login from '../components/Login';

describe('Login', () => {
    test('renders Login component', () => {
        render(
            <Login />
        );
        const form = screen.getByRole('heading', { level: 2 })

        expect(form).toBeInTheDocument();
    });
});