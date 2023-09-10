import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTransactions, selectAllTransactions } from './transaction-slice';
import Sankey from '../../components/sankey-component/Sankey';


export default function TransactionComponent() {


    const dispatch = useDispatch();
    const transactions = useSelector(selectAllTransactions);
    const transactionStatus = useSelector((state) => state.transaction.status)


    const mockData = [
        ['Incomes', 'Salary', 5000],
        ['Incomes', 'Teaching', 2000],
        ['Salary', 'Bills', 3000],
        ['Bills', 'Electric Bill', 1000],
        ['Bills', 'Mobile Bill', 2000]
    ];
    useEffect(() => {
        if (transactionStatus === 'idle') {
            dispatch(fetchTransactions())
        }
    }, [transactionStatus, dispatch])


    useEffect(() => {

        console.log(transactions, 'Transactions-----------');
    }, [transactions]);

    return (
        <div>
            <h2>Transactions Flow</h2>
            <Sankey title="Expense Flow" data={mockData} />
        </div>
    )
}