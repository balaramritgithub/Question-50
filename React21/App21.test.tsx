
import React from 'react';
import { render, screen } from '@testing-library/react';
import App21 from './App21';

test('renders learn react link', () => {
  render(<App21 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
