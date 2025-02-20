import './App.css';
import Navbar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom';
import ServiceProvider from './contexts/AppContextProvider';

export function App() {
  // добавить изменение сервиса в апп
  return (
    <>
      <ServiceProvider>
        <Navbar ></Navbar>
        <Outlet />
      </ServiceProvider>
    </>
    
  )
}
