import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
const Layout = () => {
  return (
    <body>
         <figure>
            <img src="images1.png" alt="" className='img' />
            </figure>
            
    <div className='main_1'>
      <ul>
      <li className='navlink1'>
            <NavLink to="/register"style={{"color":"white","textDecoration":"none","border":"1px solid green","background":"rgb(34,98,24)","padding":"5px" }}>
                Registor 
            </NavLink>
        </li>
        <li className='navlink'>
            <NavLink to="/login"style={{"color":"white","textDecoration":"none","border":"1px solid green","background":"rgb(34,98,24)","padding":"5px" }}>
                Login  
            </NavLink>
        </li>
      </ul>
      <section className='welcome'>
      <p className='From'>Welcome</p>
      <br />
      <p className='Registor' style={{"textAlign":"center"}}>Registration & Login Form</p>
      </section>
    </div>
    </body>
  )
}

export default Layout
