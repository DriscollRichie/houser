import React, { Component } from 'react'
import logo from '../../assets/house_logo.png'
import axios from 'axios'
import './Wizard.css'
import step_active from '../../assets/step_active.png'
import step_complete from '../../assets/step_completed.png'
import { Link } from 'react-router-dom'

export default class V5 extends Component {

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
            <p style={{ marginBottom: '25px' }}>Step 5</p>
            <div id='wizard-steps' style={{ marginBottom: '25px' }}>
              <img src={step_complete} alt='' />
              <img src={step_complete} alt='' />
              <img src={step_complete} alt='' />
              <img src={step_complete} alt='' />
              <img src={step_active} alt='' />
            </div>
            <div id='wizard-forum'>
              <div id='wizard-recommended-rent'>
                {/* result of the monthly mortage + 25% */}
                <p style={{ fontWeight: '900' }}>Recommended Rent $625</p>
              </div>
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Desired Rent</h3>
              <input className='wizard-forum-input' style={{ height: '25px' }} />
            </div>
            <div id='wizard-step-buttons'>
              <Link to='/wizard/v4'>
                <button className='wizard-step-button' style={{ width: '155px' }}>Previous Step</button>
              </Link>
              <Link to='/dashboard'>
                <button id='wizard-complete-button'>Complete</button>
              </Link>
            </div>
          </div>
        </section >
      </div >
    )
  }
}