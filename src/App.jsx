import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Basic from './components/Basic'
import Verify from './components/verify'
import ATM from './components/ATM'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/pin" element={<ATM />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
