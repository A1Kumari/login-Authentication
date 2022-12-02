import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/header/navbar"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Forgot from "./components/forgotpassword/forgotpassword"
import Reset from "./components/forgotpassword/resetpassword"

//<Route path='/login' element={<Login/>} />
function App() {
  let a = 3;
  const [user, setLoginUser] = useState({})
  return (
     
      <BrowserRouter>
       <main className="py-1">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/forgot' element={<Forgot/>} />
            <Route path='/reset' element={<Reset/>} />
            
        </Routes>
      
       </main>
      </BrowserRouter>
    
  );
}

export default App;