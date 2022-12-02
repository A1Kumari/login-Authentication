import React, {Component, useState} from 'react';
import "./password.css"
import axios from "axios"
import  { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const handleSubmit = e =>{
         e.preventDefault();
     }
     const navigate = useNavigate()
   const [user, setUser] = useState({
     password:"",
     confirmPassword:""
   })
 
   const handleChange = e =>{
     const{name,value} = e.target
     setUser({
       ...user,
       [name]: value
     })
   }
   
   const login = () => {
     axios.post("http://localhost:9902/login", user)
     .then(res => alert(res.data.message))
   }
   const resetpassword = () => {
    const{ password, confirmPassword} = user
    if(password !== confirmPassword){
      alert("passwors are not same ")
    }else{
      alert("password changes succesfully")
    }
  }
  return (
    <>
    <div className='password' >
      <h1>Forgot password</h1><br/><br/>
      <h5>New password</h5>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="new password"></input><br/><br/>
      <h5>Confirm password</h5>
      <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="confirm password"></input><br/>
      <br/>
      <div className='button' onClick={resetpassword}>Submit</div>
    </div>
  </>
  );
}

export default Forgot;


