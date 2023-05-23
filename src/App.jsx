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
import PasswordReset from './pages/PassordReset';
import History from './pages/History';
import Demo from './pages/Demo';
import ConfirmResetPassword from './pages/ConfirmResetPassword';
import Sidebar from "./components/Sidebar";
import React from 'react';
import RequireAuth from './features/auth/RequireAuth';

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
          <div className="flex h-full bg-gray-50 mb-1">
            <Sidebar />
            <main className="flex flex-col w-full bg-gray-50 overflow-x-hidden overflow-y-auto ml-16 left-16 -z-1">
              <div className="w-full px-6 py-8">
                <div className=" flex flex-col w-full h-full">
                  <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/confirmresetpassword' element={<ConfirmResetPassword />}></Route>
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/passwordreset' element={<PasswordReset />} />
                    {/* <Route element={<RequireAuth />}> */}
                      <Route path='/demo' element={<Demo />} />
                      <Route path='/history' element={<History />} />
                      <Route path='/profile' element={<Profile />} />
                    {/* </Route> */}
                  </Routes>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
   
    </Router>
  )
}

export default App
