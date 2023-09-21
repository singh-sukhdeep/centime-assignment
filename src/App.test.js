import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/transaction.transactionFlow/i);
  expect(linkElement).toBeInTheDocument();
});
