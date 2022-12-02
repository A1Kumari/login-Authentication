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
     email:"",
     password:""
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
  return (
    <>
    <div className='password' >
      <h1>Forgot password</h1><br/><br/>
      <input type="text" name="email" value={user.name} onChange={handleChange} placeholder="enter your mail"></input><br/>
      <br/>
      <div className='button' onClick={() => navigate("/reset")}>Submit</div>
    </div>
  </>
  );
}

export default Forgot;


