import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomeApp from './Components/HomeApp'
import NavBar from './Navbar'
import Trailer from './Trailer'

function App() {
  return (
    <div>
    <NavBar/>
        <Routes>
            <Route path='/' element={<HomeApp/>} />
            <Route path='/trailer/:id' element={<Trailer/>}/>
        </Routes>
        
    </div>
  )
}

export default App
