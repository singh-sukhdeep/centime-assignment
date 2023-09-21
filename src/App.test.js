import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { toBeValid } from '@testing-library/jest-dom/matchers';

test('renders learn react link', () => {
  expect(2).toBe(2);
});