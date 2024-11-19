import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </>
  )
}

export default App
