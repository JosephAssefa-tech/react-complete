import './App.css';

import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';

function App() {
  const expenses=[
    {
    id:'e1',
    title:'New Desk ',
    amount:450,
    date:new Date(2021,4,4),
    },
    {
      id:'e2',
      title:'Car insurance ',
      amount:50,
      date:new Date(2021,4,4),
      },
      {
        id:'e3',
        title:'Table ',
        amount:200,
        date:new Date(2021,7,4),
      },
  
];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}></ExpenseItem>
           <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount}
      date={expenses[1].date}></ExpenseItem>
           <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount}
      date={expenses[2].date}></ExpenseItem>
 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
