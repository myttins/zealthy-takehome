import React from 'react';
import Navbar from './components/Navbar';
import { Main } from './containers/Main';
import { Outlet } from 'react-router';



const App = () => {
  return (
    <div className='min-w-[448px]'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
