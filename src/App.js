
import './App.css';
import TransactionComponent from './features/transaction/Transaction';
import Header from './components/header/Header';
import ExpenseForm from './components/expense-form/ExpenseForm';


function App() {

  return (
    <div className="App">
      <Header/>
      <TransactionComponent />
    </div>
  );
}

export default App;
