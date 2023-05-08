import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserInfo from './pages/UserInfo'
import SignUp from './pages/SignUp'
import PassWordReset from './pages/PassWordReset'
import History from './pages/History'
import ForgetPW from './pages/ForgetPW'
import Demo from './pages/Demo'

function App() {

  const [theme , setTheme ]= useState('light')
  
  useEffect(()=>{
  if(theme==='dark'){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark')
  }
  },[theme])
 
const handleDarkside =()=>{
  setTheme(theme==='dark'?'light':'dark')
}

  return (
    <>
      <div className='text-lime-500'>
        <button onClick={handleDarkside}>
          dark
        </button>
      <Router >     
      <Routes>
       <Route path='' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/information' element={<UserInfo />} />
       <Route path='/register' element={<SignUp />} />
       <Route path='/resetpassword' element={<PassWordReset />} />
       <Route path='/history' element={<History />} />
       <Route path='/forgetPW' element={<ForgetPW />} />
       <Route path='/demo' element={<Demo />} />
     </Routes>
     </Router>
      </div>
    </>
  )
}

export default App
