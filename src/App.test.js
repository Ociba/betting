import { render, screen } from '@testing-library/react';
import Route from './Route';

test('renders learn react link', () => {
  render(<Route />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
