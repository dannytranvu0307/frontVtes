import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Aos from "aos";
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Language from './components/Language'

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import PassWordReset from './pages/PassWordReset';
import History from './pages/History';
import ChangeUserInfor from './pages/ChangeUserInfor';
import Demo from './pages/Demo';
import ReduxLearning from './pages/ReduxLearning';
import ConfirmResetPassword from './pages/ConfirmResetPassword';
import Sidebar from "./components/Sidebar";
import React from 'react';

function App() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center">
            <Navbar />
            <Language />
          </header>

          <div className="flex h-full">
            <Sidebar />
            <main
              className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto left-16 mb-14 -z-1"
            >
              <div className="h-full">
                <Routes>
                  <Route path='' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/register' element={<SignUp />} />
                  <Route path='/history' element={<History />} />
                  <Route path='/changeuserinfor' element={<ChangeUserInfor />} />
                  <Route path='/demo' element={<Demo />} />
                  <Route path='/a' element={<ReduxLearning />} />
                  <Route path='/passwordreset' element={<PassWordReset />} />
                  <Route path='/confirmresetpassword' element={<ConfirmResetPassword />}></Route>
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
   
    </Router>
  )
}

export default App
