import React from 'react'
import './App.css'
// import Navber from './Components/Navber/Navber'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
