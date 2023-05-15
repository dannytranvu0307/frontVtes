import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar'
import Language from './components/Language'

import Home from './pages/Home';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import SignUp from './pages/SignUp';
import PassWordReset from './pages/PassWordReset';
import History from './pages/History';
import ForgetPW from './pages/ForgetPW';
import Demo from './pages/Demo';
import ReduxLearning from './pages/ReduxLearning';

function App() {
  const {t} = useTranslation();

  return (
    <>
    <Router> 
      <header className="sticky top-0">
          <Navbar t={t} >
            <Language />
          </Navbar>
      </header>

      <main>
            
            <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login t={t}/>} />
            <Route path='/information' element={<UserInfo />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/resetpassword' element={<PassWordReset />} />
            <Route path='/history' element={<History />} />
            <Route path='/forgetPW' element={<ForgetPW />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/a' element={<ReduxLearning />} />
          </Routes>
        
      </main>
      </Router>
    </>
  )
}

export default App
