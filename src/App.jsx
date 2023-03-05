import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Menubar from './Menubar'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Home' element={<Home/>}/>
            <Route path='/menubar' element={<Menubar/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App