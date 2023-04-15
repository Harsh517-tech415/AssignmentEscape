import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Assignment from './Component/Assignment'
import Home from './Component/Home'
import TesseractScan from './Component/TesseractScan'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/complete" element={<TesseractScan/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App