import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useState} from 'react'

const Login = () => {
    const [input,setInput]= useState({
        name: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (
          storedData.name === input.name &&
          storedData.password === input.password
        ) {
          navigate("/Home")
        } else {
          alert("Incorrect username or password");
        }
      };

      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input className='username' name='name' type="text" value={input.name} placeholder='user name' onChange={handleChange}/><br /><br />
            <input className='password' name='password' type="password" value={input.password} placeholder='password'onChange={handleChange}/><br />
            <input type="submit" id='btnsubmit' />
            <p>I already have an account ? 
            <NavLink to='/'>Signup</NavLink>
            </p>
        </form>
        
    </div>
  )
}

export default Login