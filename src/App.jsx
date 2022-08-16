import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FormSolutions from './components/FormSolutions'
import Contact from './components/Contact'
import MainNav from './components/MainNav'
import Carrier from './components/Carrier'
import Company from './components/Company'
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}>
            <Route path='company/:name' element={<Company />} />
            <Route path='carrier' element={<Carrier />} />
            
        </Route>

        <Route path='/form-solutions' element={<FormSolutions header={'Form Solutions with React'} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
         
  )
}

export default App
