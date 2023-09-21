import reducer, { addTransaction, updateTransaction, deleteTransaction } from './transaction-slice';

const intialState = {
    transactions: [],
    status: 'idle',
    error: null
};
test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
        transactions: [],
        status: 'idle',
        error: null
    })
})


test('Transaction add transaction ', () => {
    const previousState = intialState;

    expect(reducer(
        previousState,
        addTransaction({
            from: 'Incomes',
            amount: 5000,
            expenseLabel: 'Salary'
        })
    )).toEqual(
        {
            transactions: [
                {
                    from: 'Incomes',
                    amount: 5000,
                    expenseLabel: 'Salary'
                }
            ],
            status: 'idle',
            error: null
        }
    )
});


test('Transaction  update transaction ', () => {

    const previousState = {
        transactions: [
            {
                from: 'Incomes',
                amount: 5000,
                expenseLabel: 'Salary'
            }
        ],
        status: 'idle',
        error: null
    };

    expect(reducer(
        previousState,
        addTransaction({
            from: 'Incomes',
            amount: 3000,
            expenseLabel: 'Salary'
        })
    )).toEqual(
        {
            transactions: [
                {
                    from: 'Incomes',
                    amount: 3000,
                    expenseLabel: 'Salary'
                }
            ],
            status: 'idle',
            error: null
        }
    )
});


