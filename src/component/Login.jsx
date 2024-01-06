import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [token, settoken] = useState('')

  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    axios.post('http://localhost:8080/login', { email, password })
      .then((result) => {
        console.log(result)

        if (result.data.token) {
          settoken(result.data.token)
        } else {
          alert(result.data)
        }

        // if (result.data === "Success") {
        //   alert('Succss Login');
        // } else if (result.data === "Password is incorrect") {
        //   alert('Incorrect Password');
        // } else {
        //   alert('No record exists please signup');
        // }
      })
      .catch((err) => {
        console.log(err)
      })

    Navigate("/login")
  }
  return (
    <body>
      
      <img src="sunset.jpeg" alt=""  className='images_1'/>
    <div className='div-1'>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="lable-1">
          <h2>Login Page</h2>
          <label htmlFor="email">Email :- </label><br />
          <input type="email" name="email" placeholder='Enter your Email'
            autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="label-2">
          <label htmlFor="Password">Password :- </label>
          <br />
          <input type="Password" name="passwod" placeholder='Enter your Password'
            autoComplete='off' value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div className="btn-2">
          <button type='submit' className='submit'>Login</button>
        </div>
      </form>

    </div>
    </body>
  )
}

export default Login;
