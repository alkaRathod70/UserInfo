import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import{Link, Navigate} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
const handleName=(e)=>{
  setname(e.target.value)
}
const handleEmail=(e)=>{
  setemail(e.target.value)
}
const handlePassword=(e)=>{
  setpassword(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log({name, email, password});
 
 
axios.post('http://localhost:8080/register',{name,email,password})
.then(result=>console.log(result)).catch(err=>console.log(err))
Navigate("/login");

}

  return (
    <body>
      
    <img src="photography.jpeg" alt=""  className='images_1'/>
    <div className='main'>
     
           <form method='post' onSubmit={handleSubmit}>
    <div>
    <div className='lable-name'>
      <h1>Register</h1>
      <label htmlFor="name">name:-</label>
      <br />
      <input type="text" name="name" placeholder='Enter your name'
      value={name} onChange={handleName} />
      </div>
      <div className="lable-2">
      <label htmlFor="email">Email-id:-</label>
      <br />
      <input type="email" name="Email" placeholder='Enter your Email-id'autoComplete='off'
      value={email} onChange={handleEmail} />
      </div>
      <div className="lable-3">
      <label htmlFor="password">password:-</label>
      <br />
      <input type="password" name="pass" placeholder='Enter your password'autoComplete='off'
      value={password} onChange={handlePassword} />
      </div>
      <div className="btn">
        <button type='submit' className='Button_1'>submit</button>
      </div>
   </div>
        </form>
    </div>
    </body>
  )
}

export default Signup;
