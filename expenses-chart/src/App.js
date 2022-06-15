import React from 'react';
import './App.css';
import Bar from './components/Bar';
import Header from './components/Header';

function App() {
  const balance = 921.48;
  const expense = 534.15;
  return (
  
    <div className="mx-auto flex flex-col justify-center items-center h-screen expense-chart ">
      <Header balance={balance} />
      <div className='w-full shadow-lg px-8 py-8 rounded-lg bg-white'>
        <h2 className='font-bold'>Spending - last 7 days</h2>
      <Bar />
      <div  className='flex justify-between  items-center mt-5 border-t border-slate-200 pt-2.5'>
        <div> 
        <div className='font-light text-slate-500 text-sm'>Total this month</div>
        <h1 className='font-bold'>$ {parseFloat(balance - expense).toFixed(2)}</h1>
        </div>
        <div >
          <div className='font-bold text-sm'>+2.4%</div>
          <div className='font-light text-slate-500 text-sm'>from last month</div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default App;