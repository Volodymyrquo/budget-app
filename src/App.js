import React from 'react';
import './App.css';
import {
  Header,
  Balance,
  AddTransaction,
  IncomeList,
  ExpenseList,
} from './components';
import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
