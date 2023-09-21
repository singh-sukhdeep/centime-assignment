import React from 'react';
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
import ExpenseForm from './ExpenseForm';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('ExpenseForm', () => {
  it('renders the component with default values', () => {
    render(<ExpenseForm />);

    // console.log(getByLabelText,getByText,'===============');
    expect(screen.getByText('expenseForm.fromLabel')).toBeInTheDocument();
  });

});
