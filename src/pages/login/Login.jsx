import React, { useState } from 'react'
import './Login.css'

import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()


  const  userLogin=async (e)=>{
    e.preventDefault()
    try {
    const response=await fetch("https://fakestoreapi.com/auth/login",{
      method:'POST',
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({username,password})
    })
    const data=await response.json()
  if(data.token){
        localStorage.setItem("token",data.token)
        navigate('/home')

 }else{
  alert("invalid credentials")
 }
  }catch(error){
    console.log(error)

  }


  }

  return (
<div className="login-container">
          <form onSubmit={userLogin}>
            <p className='dummy'>username:kevinryan</p>
            <p className='dummy'>password:kev02937@</p>
          <div>
          <label htmlFor='username'>UserName</label>
          <input onChange={(e)=>setUserName(e.target.value)} type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>

          <button type='submit'>Login</button>

        </form>
      
    </div>
  )
}

export default Login
