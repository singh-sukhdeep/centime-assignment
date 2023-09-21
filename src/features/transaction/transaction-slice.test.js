import reducer, { addTransaction, updateTransaction, deleteTransaction } from './transaction-slice';

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
        transactions: [],
        status: 'idle',
        error: null
    })
})


test('should handle a todo being added to an empty list', () => {
    const previousState = []

    expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
        { text: 'Run the tests', completed: false, id: 0 }
    ])
})