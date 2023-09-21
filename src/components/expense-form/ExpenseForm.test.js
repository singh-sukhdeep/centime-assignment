import React from "react";
import { render, fireEvent, waitFor, screen, act } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";
import renderer from 'react-test-renderer';

const selectValues = [
  {
    "label": "Incomes",
    "value": "Incomes"
  },
  {
    "label": "Salary",
    "value": "Salary"
  }
]
// Mock the useTranslation hook
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

test("ExpenseForm renders", () => {
  render(<ExpenseForm />);


  expect(screen.getByText("expenseForm.fromLabel")).toBeInTheDocument();
  expect(screen.getByText("expenseForm.expenseLabel")).toBeInTheDocument();
  expect(screen.getByText("expenseForm.amountLabel")).toBeInTheDocument();

});

const handleFormSubmit = jest.fn();

test("ExpenseForm handles Form Submit ", async () => {

  render(<ExpenseForm onExpenseSubmit={handleFormSubmit} fromSelectValues={selectValues} />);

  const fromTestRef = screen.getByTestId('from-test');
  const expenseLabelRef = screen.getByTestId('expenseLabel-test');
  const amountRef = screen.getByTestId('amount-test');

  fireEvent.change(fromTestRef, { target: { value: 'Incomes' } });
  fireEvent.change(expenseLabelRef, { target: { value: 'John' } });
  fireEvent.change(amountRef, { target: { value: 123 } });

  expect(fromTestRef.value).toBe('Incomes');
  expect(expenseLabelRef.value).toBe('John');
  expect(amountRef.value).toBe('123');

  act(() => {
    fireEvent.click(screen.getByTestId('submit-button-test'));
  })

  await waitFor(() => {
    expect(handleFormSubmit).toHaveBeenCalled();
  })

});

test('Expense Form snapshot test', () => {
  const component = renderer.create(
    <ExpenseForm onExpenseSubmit={handleFormSubmit}
     fromSelectValues={selectValues} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
