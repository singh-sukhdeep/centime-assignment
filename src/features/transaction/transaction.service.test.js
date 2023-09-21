import {
    mapExpenseToSankey,
    extractSelectValuesFromTransactions,
} from "./transaction.service";

const transactions = [
    {
        from: "Incomes",
        amount: 5000,
        expenseLabel: "Salary",
    },
    {
        from: "Incomes",
        amount: 4000,
        expenseLabel: "Teaching",
    },
    {
        from: "Salary",
        amount: 3000,
        expenseLabel: "Bills",
    },
    {
        from: "Bills",
        amount: 1000,
        expenseLabel: "Electric Bill",
    },
    {
        from: "Bills",
        amount: 2000,
        expenseLabel: "Phone Bill",
    },
];

const expetedSanketTransactions = [
    ["Incomes", "Salary", 5000],
    ["Incomes", "Teaching", 4000],
    ["Salary", "Bills", 3000],
    ["Bills", "Electric Bill", 1000],
    ["Bills", "Phone Bill", 2000],
];

const expectedSelectValues = [
    {
        label: "Incomes",
        value: "Incomes",
    },
    {
        label: "Salary",
        value: "Salary",
    },
    {
        label: "Teaching",
        value: "Teaching",
    },
    {
        label: "Bills",
        value: "Bills",
    },
    {
        label: "Electric Bill",
        value: "Electric Bill",
    },
    {
        label: "Phone Bill",
        value: "Phone Bill",
    },
];

test("Transaction Service mapExpenseToSankey", () => {
    expect(mapExpenseToSankey(transactions)).toEqual(expetedSanketTransactions);
});

test("Transaction Service extractSelectValuesFromTransactions", () => {

    expect(extractSelectValuesFromTransactions(transactions)).toEqual(expectedSelectValues);
 });
