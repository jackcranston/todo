import { render, screen } from '@testing-library/react';
import Layout from './index';

test('renders learn react link', () => {
  render(<Layout />);
  const headerText = screen.getByText(/To do.../i);
  expect(headerText).toBeInTheDocument();
});
