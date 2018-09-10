import React, { Component } from 'react'
import logo from '../../../assets/house_logo.png'
import axios from 'axios'
import './V1.css'
import step_active from '../../../assets/step_active.png'
import step_inactive from '../../../assets/step_inactive.png'
import { Link } from 'react-router-dom'

export default class V1 extends Component {

  logoutUser = async () => {
    try {
      await axios.post('/api/auth/logout')
      this.props.history.push('/')
    } catch (err) {
      console.error('logoutUser function failed in Dashboard.js:', err)
    }
  }

  render() {
    return (
      <div id='wizard-page'>
        <nav id='wizard-nav'>
          <section id='wizard-title'>
            <img src={logo} width='25px' alt='' />
            <h1 className='wizard-nav-text'>Houser</h1>
            <p className='wizard-nav-text'>Wizard</p>
          </section>
          <p onClick={() => this.logoutUser()} style={{ cursor: 'pointer' }}>Logout</p>
        </nav>
        <section id='wizard-mid'>
          <div id='wizard-mid-1'>
            <h2 style={{ fontSize: '20px' }}>Add new listing</h2>
            <Link to='/dashboard'>
              <button id='cancel-button'>Cancel</button>
            </Link>
          </div>
          <div id='wizard-mid-2'>
            <p style={{ marginBottom: '25px' }}>Step 1</p>
            <div id='wizard-steps' style={{ marginBottom: '25px' }}>
              <img src={step_active} alt='' />
              <img src={step_inactive} alt='' />
              <img src={step_inactive} alt='' />
              <img src={step_inactive} alt='' />
              <img src={step_inactive} alt='' />
            </div>
            <div id='wizard-forum'>
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Property Name</h3>
              <input className='wizard-forum-input' style={{ marginBottom: '25px', height: '25px' }} />
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Property Description</h3>
              <textarea className='wizard-forum-input' style={{ height: '100px' }} />
            </div>
            <Link to='/wizard/v2'>
              <button className='wizard-step-button'>Next Step</button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}