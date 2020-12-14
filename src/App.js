import React from 'react';
import './App.css';
import {
  Header,
  Balance,
  AddTransaction,
  IncomeList,
  ExpenseList,
} from './components';

const App = () => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default App;
