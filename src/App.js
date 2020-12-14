import React from 'react';
import './App.css';
import { Header, Balance } from './components';

const App = () => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Balance />
      </div>
    </div>
  );
};

export default App;
