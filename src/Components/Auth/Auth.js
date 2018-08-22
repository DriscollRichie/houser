import React, { Component } from 'react'
import './Auth.css'
import logo from '../../assets/auth_logo.png'

export default class Auth extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange(key, value) {
    this.setState({[key]: value})
  }

  render() {
    return (
      <div id='auth-view'>
        <section id='auth-login-mid'>
          <div id='auth-login-content'>
            <img src={logo} alt='logo' id='auth-logo' />
            <div id='auth-input-section'>
              <h3 className='auth-input-name'>Username</h3>
              <input className='auth-input' onChange={e => this.handleChange('username', e.target.value)}/>
              <h3 className='auth-input-name'>Password</h3>
              <input className='auth-input' onChange={e => this.handleChange('password', e.target.value)}/>
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
}