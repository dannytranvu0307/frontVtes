import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserInfo from './pages/UserInfo'
import SignUp from './pages/SignUp'
import PassWordReset from './pages/PassWordReset'
import History from './pages/History'
import ForgetPW from './pages/ForgetPW'

function App() {


  return (
    <>
      <div className='text-lime-500'>
      <Router >     
      <Routes>
       <Route path='' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/information' element={<UserInfo />} />
       <Route path='/register' element={<SignUp />} />
       <Route path='/resetpassword' element={<PassWordReset />} />
       <Route path='/history' element={<History />} />
       <Route path='/forgetPW' element={<ForgetPW />} />
     </Routes>
     </Router>
      </div>
    </>
  )
}

export default App
