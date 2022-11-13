import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomeApp from './Components/HomeApp'
import NavBar from './Navbar'
import Trailer from './Trailer'
import Movie from './Components/movie/Movie'
import Tvshow from './Components/tvshow/Tvshow'

function App() {
  return (
    <div>
    <NavBar/>
        <Routes>
            <Route path='/' element={<HomeApp/>} />
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/tvshow' element={<Tvshow/>}/>
            <Route path='/trailer/:id' element={<Trailer/>}/>
        </Routes>
        
    </div>
  )
}

export default App
