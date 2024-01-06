import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import{Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    
  return (
    <div>
        <form method='POST'>
    <div>
    <div className='lable-1'>
      <h1>Register</h1>
      <label htmlFor="name">name:-</label>
      <input type="text" name="name" placeholder='Enter your name'autoComplete='off'
      value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="lable-2">
      <label htmlFor="email">Email-id:-</label>
      <input type="text" name="Email-id" placeholder='Enter your Email-id'autoComplete='off'
      value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="lable-3">
      <label htmlFor="password">password:-</label>
      <input type="password" name="pass" placeholder='Enter your password'autoComplete='off'
      value={password} onChange={(e)=>setpassword(e.target.value)} />
      </div>
      <div className="btn-1">
        <button type='submit'>submit</button>
      </div>
   </div>
        </form>
    </div>
  )
}

export default Form
