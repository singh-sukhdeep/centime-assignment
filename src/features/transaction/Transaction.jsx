import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addTransaction, fetchTransactions, selectAllTransactions } from './transaction-slice';
import Sankey from '../../components/sankey-component/Sankey';
import { extractSelectValuesFromTransactions, mapExpenseToSankey } from './transaction.service';
import ExpenseForm from '../../components/expense-form/ExpenseForm';


export default function TransactionComponent() {


    const dispatch = useDispatch();
    const transactions = useSelector(selectAllTransactions);
    const transactionStatus = useSelector((state) => state.transaction.status);

    const [expenseChartData, setExpenseChartData] = useState([]);
    const [fromValuesSelectable, setFromValuesSelectable] = useState([{ label: 'Incomes', values: 'Incomes' }]);
    const [editForm, setEditForm] = useState(null);

    // Translation
    const { t } = useTranslation();


    useEffect(() => {
        if (transactionStatus === 'idle') {
            dispatch(fetchTransactions())
        }
    }, [transactionStatus, dispatch])


    useEffect(() => {

        setExpenseChartData(mapExpenseToSankey(transactions));
        setFromValuesSelectable(extractSelectValuesFromTransactions(transactions));

    }, [transactions]);


    function handleExpenseFormSubmit(formValues) {
        console.log(formValues);
        dispatch(addTransaction(formValues))
    }

    function handleNodeSelected(option) {
        setEditForm({
            from: option.from,
            expenseLabel: option.to,
            amount: option.weight
        })
    }

    return (
        <div className='transaction-wrapper'>
            <h2>{t('transaction.transactionFlow')}</h2>
            <Sankey title="Expense Flow" data={expenseChartData} onNodeSelected={handleNodeSelected} />
            <ExpenseForm fromSelectValues={fromValuesSelectable} onExpenseSubmit={handleExpenseFormSubmit} editForm={editForm} />
        </div>
    )
}