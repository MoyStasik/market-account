import './App.css';
import Navbar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom';

export function App() {

  return (
    <>
      <Navbar ></Navbar>
      <Outlet />
    </>
    
  )
}
