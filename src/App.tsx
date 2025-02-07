import { createContext, useState } from 'react'
import './App.css'
import Content from './components/content/content'
import Navbar from './components/navbar/navbar'

export const serviceContext = createContext("");

export function App() {
  const [serviceState, setServiceState] = useState("Объявления");

  return (
    <serviceContext.Provider value={serviceState}>
      <Navbar setSelectedService={(itemName : string) => setServiceState(itemName)}></Navbar>
      <Content />
    </serviceContext.Provider>
  )
}
