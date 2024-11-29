import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

//react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

//npm run server : in api folder
//npm run dev : in client server

const App = () => {

  const {showLogin} = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-red-50 to-blue-100' >
      <ToastContainer position='bottom-right' />
      <Navbar/> 
      {showLogin && <Login/>} 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
