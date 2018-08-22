import React from 'react'
import './Auth.css'
import logo from '../../assets/auth_logo.png'

export default function Auth() {
  return (
    <div id='auth-view'>
      <section id='auth-login-mid'>
        <div id='auth-login-content'>
          <img src={logo} alt='logo' id='auth-logo' />
          <div id='auth-input-section'>
            <h3 className='auth-input-name'>Username</h3>
            <input className='auth-input' />
            <h3 className='auth-input-name'>Password</h3>
            <input className='auth-input' />
          </div>
          <div id='auth-buttons'>
            <button id='auth-login-button'>Login</button>
            <button id='auth-register-button'>Register</button>
          </div>
        </div>
      </section>
    </div>
  )
}