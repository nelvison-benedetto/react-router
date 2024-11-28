import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BooksPage from './pages/BooksPage'
import ContactsPage from './pages/ContactsPage'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {
  const [count, setCount] = useState(0)

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
