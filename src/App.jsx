//App.jsx
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import DefaultLayout from './pages/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/books' element={<BooksPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
