import React, {useState} from 'react';

import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'; 

const DUMMY_EXPENSES = [
  {  title: 'MAchinery Tools', amount: 2099.0, date: new Date(2021, 5, 24) , id:'e1' },
  {  title: 'Car Insurance', amount: 2099.0, date: new Date(2021, 5, 24)   , id:'e2' },
  {  title: 'Painting cost', amount: 2099.0, date: new Date(2021, 5, 24)   , id:'e3' },
  {  title: 'Transorming cost', amount: 2099.0, date: new Date(2021, 5, 24), id:'e4' }
]

  function App() {

  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  }
  // function addExpenseHandler(expense){
  //   setExpenses((prevExpenses)=>{
  //     return [expense, ...prevExpenses];
  //   });
  

return (
  <div>
    <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expenses item={expenses}></Expenses>
  </div>
);
}

export default App;
