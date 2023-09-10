
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




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
        getTransactions: (state) => {
            // state.appMode = 'dark';
        },
        addTransaction: (state) => {
            // state.appLanguage = 'hi'
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

export const { getTransactions, addTransaction, updateTransaction, deleteTransaction } = transactionSlice.actions;

export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    return [
        {
            type: 'DEBIT',
            parent: '',
            amount: 230,
            title:'Bills'
        }
    ]
})


// State Selectors
export const selectAllTransactions = (state) => state?.transaction?.transactions;



export default transactionSlice.reducer;
