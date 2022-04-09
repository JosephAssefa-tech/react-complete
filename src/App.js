import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import logo from './logo.svg';

const App =()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper1',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV Samsung', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 94.67,
      date: new Date(2021, 2, 30),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden made)',
      amount: 50,
      date: new Date(2021, 5, 22),
    },
  ];
  console.log(expenses.amount);
  return (
    <div>
    <NewExpense/>
    <Expenses items={expenses} />
  </div>
    
  );
}

export default App;
