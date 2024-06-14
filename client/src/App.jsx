import './App.css'
import { Outlet } from 'react-router-dom'
import SideNav from './Components/SideNav/SideNav';
import { useState } from 'react';
import Nav from './Components/Nav/Nav';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`${theme === 'dark' ? 'bg-[#1F2A3D] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#1A2537]'} flex min-h-screen min-w-screen`}>
      <SideNav />
      <div>
        <Nav theme={theme} />
        <Outlet />
      </div>
    </div>
  )
}

export default App;