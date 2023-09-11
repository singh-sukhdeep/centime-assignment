
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addTransactionReducer } from './transaction.service'




// Multiple possible status enum values
// status: 'idle' | 'loading' | 'succeeded' | 'failed',
// error: string | null

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addTransaction: (state,action)=>{
            addTransactionReducer(state,action)
        },
        updateTransaction: (state) => {
            // TODO needs implementation
        },
        deleteTransaction: (state) => {
            // TODO needs implmentations
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTransactions.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.transactions = action.payload
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { addTransaction, updateTransaction, deleteTransaction } = transactionSlice.actions;

export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    return [
        {
            from: 'Incomes',
            amount: 5000,
            expenseLabel: 'Salary'
        },
        {
            from: 'Incomes',
            amount: 4000,
            expenseLabel: 'Teaching'
        },
        {
            from: 'Salary',
            amount: 3000,
            expenseLabel: 'Bills'
        },
        {
            from: 'Bills',
            amount: 1000,
            expenseLabel: 'Electric Bill'
        },
        {
            from: 'Bills',
            amount: 2000,
            expenseLabel: 'Phone Bill'
        }
    ]
})


// State Selectors
export const selectAllTransactions = (state) => state?.transaction?.transactions;



export default transactionSlice.reducer;
