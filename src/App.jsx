import { useState } from 'react'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pizza from './components/Pizza'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  return (
    <>
      <Navbar page={page} onNavigate={setPage} />
      <Cart hidden={page !== 'cart'} />
      {page === 'home' && <Home />}
      {page === 'pizza' && <Pizza />}
      {page === 'login' && <Login onNavigate={setPage} />}
      {page === 'register' && <Register onNavigate={setPage} />}
      <Footer />
    </>
  )
}

export default App
