import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
  test('renders navbar', () => {
    render(<App />);
    const randomNavbarItem = screen.getByText(/Home/gmi);
    expect(randomNavbarItem).toBeVisible();
  });
})