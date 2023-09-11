




export function addTransactionReducer(state, action) {

    const { payload } = action;
    const { from, expenseLabel, amount } = payload;

    // Check If Transaction Already exist
    const existingTransactionIndex = state.transactions?.findIndex(item => item?.expenseLabel === expenseLabel && item?.from === from);

    if (existingTransactionIndex !== -1) {
        state.transactions[existingTransactionIndex].amount = amount;
    } else {
        state.transactions.push({ from, expenseLabel, amount });
    }

}



export function mapExpenseToSankey(transactions) {

    return transactions?.map((transaction) =>
        [transaction.from, transaction.expenseLabel, transaction.amount]
    ) || [];

}


export function extractSelectValuesFromTransactions(transactions) {
    const fromValuesSet = new Set();

    transactions.forEach(element => {
        fromValuesSet.add(element.from);
        fromValuesSet.add(element.expenseLabel);
    });

    return Array.from(fromValuesSet).map((element) => ({ label: element, value: element }));
}