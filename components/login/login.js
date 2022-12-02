import React, {useState} from 'react';
import "./login.css"
import axios from "axios"
import  { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate()
  const [inpval, setInpval] = useState({
    email:"",
    password:""
  })

  const setVal = e =>{
    const{name,value} = e.target
    setInpval({
      ...inpval,
      [name]: value
    })
  }

  const loginuser = (e)=>{
    e.preventDefault();

    const {email,password} = inpval;
    if(email === ''){
      alert('please enter your email')
    }else if(!email.includes("@")){
      alert('enter valid email')
    }else if(password === ''){
      alert('please enter your password')
    }else if(password.length < 6){
      alert('password must be 6 char')
    }else{
      alert("posted")
    }
  }
  
 /*const login = () => {
    axios.post("http://localhost:9902/login", user)
    .then(res => alert(res.data.message))
  }*/
  return (
    <>
      <div className='login'>
       
      <h1 className='center'>Log in</h1> <br/><br/>
        <input type="text" name="email" value={inpval.email} onChange={setVal} placeholder="enter your mail"></input><br/>
        <input type="password"  name="password" value={inpval.password} onChange={setVal} placeholder="enter your password"></input>
        <div className='two'>
          <input type = {!passShow ? "password" : "text"} name= "password" id ="password"/>
            <div className ="showpass" onClick={()=>setPassShow(!passShow)}> 
               {!passShow ? "show" : "hide"}
            </div>
        </div>
        <p className='forgot-password text-right'>
        <Link to={'/forgot'} className="link">forgot password</Link>
        </p>
        <br/><br/>
        <div className='button' onClick={loginuser}>Log in</div><br/>
        <p className='center'>dont have a account then <Link to={'/register'}  className="link">Sign up </Link></p>
      </div>
    </>
  );
}

export default Login;
