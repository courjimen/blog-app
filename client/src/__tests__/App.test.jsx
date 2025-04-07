import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx'

describe('Login', () => {
    it('renders Login component', () => {
        render(<App />)
    })
})