import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx'
import { BrowserRouter } from 'react-router-dom';

describe('Login', () => {
    it('renders Login component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })
})