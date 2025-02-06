import { useState } from 'react'
import './App.css'
import Content from './components/content/content'
import Navbar from './components/navbar/navbar'

function App() {
  const [serviceState, setServiceState] = useState("Объявления");

  return (
    <>
      <Navbar selectedService={serviceState} setSelectedService={(itemName : string) => setServiceState(itemName)}></Navbar>
      <Content selectedService={serviceState} />
    </>
  )
}

export default App
