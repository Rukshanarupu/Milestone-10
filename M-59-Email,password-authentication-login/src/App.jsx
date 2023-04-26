import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
