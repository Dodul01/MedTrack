import './App.css'
import { Outlet } from 'react-router-dom'
import SideNav from './Components/SideNav/SideNav';
import { useState } from 'react';
import Nav from './Components/Nav/Nav';
import useAppContext from './hooks/useAppContext';

function App() {
  const { theme } = useAppContext();
  return (
    <div className={`${theme === true ? 'bg-[#1F2A3D] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#1A2537]'} transition-all ease-in-out duration-150 flex min-h-screen min-w-screen`}>
      <SideNav />
      <div className='flex-1'>
        <Nav />
        <div className='p-4 min-h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App;