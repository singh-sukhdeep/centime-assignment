import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from '../features/transaction/transaction-slice'
import appReducer from './app-slice';


export default configureStore({
  reducer: {
    transaction: transactionReducer,
    appState:appReducer
  }
})