import React, {useState, Component} from 'react';
import "./register.css"
import axios from "axios"
import  { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  
  const [user, setUser] =useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handleChange = e =>{
    const{name,value} = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const register = () => {
    const{name, email, password, reEnterPassword} = user
    if(name && email && password && (password==reEnterPassword)){
      alert("posted")
      console.log("user registered")
      axios.post("http://localhost:9002/register", user)
      .then( res => console.log(res))
    }else if(password !== reEnterPassword){
      alert("password are not same")
    }else if(name === ''){
      alert('please enter your name')
    }else if(email === ''){
      alert('please enter your email')
    }else if(!email.includes("@")){
      alert('enter valid email')
    }else if(password === ''){
      alert('please enter your password')
    }else if(password.length < 6){
      alert('password must be 6 char')
    }else if(reEnterPassword === ''){
      alert('please enter your password')
    }
    else{
      alert("invalid input")
    }
  }
  return (
    <>
      <div className='register'>
      <h1 className='center'>Sign up</h1> <br/>
        <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="your mail" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="your password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter password" onChange={handleChange}></input>
        <div className='button' onClick={register}>Sign up</div>
        <br/>
        <p className='center'>allready have a account then <Link to={'/login'}  className="link">log in </Link></p>

      </div>
    </>
  );
}

export default Register;
