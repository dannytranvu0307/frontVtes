import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Language from './components/Language'


import Home from './pages/Home';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import History from './pages/History';
import ForgetPW from './pages/ForgetPW';
import Demo from './pages/Demo';
import ReduxLearning from './pages/ReduxLearning';
import ConfirmResetPassword from './pages/ConfirmResetPassword';

function App() {

  return (
    <Router> 
      <header className="sticky top-0">
          <Navbar>
            <Language />
          </Navbar>
      </header>
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/information' element={<UserInfo />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/history' element={<History />} />
          <Route path='/forgetPW' element={<ForgetPW />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/a' element={<ReduxLearning />} />
          <Route path='/resetpassword' element={<PasswordReset />} />
          <Route path='/confirmresetpassword' element={<ConfirmResetPassword/>}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
