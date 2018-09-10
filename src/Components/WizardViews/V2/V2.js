import React, { Component } from 'react'
import logo from '../../../assets/house_logo.png'
import axios from 'axios'
import '../V2/V2'
import step_active from '../../../assets/step_active.png'
import step_inactive from '../../../assets/step_inactive.png'
import step_complete from '../../../assets/step_completed.png'

export default class V2 extends Component {

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
            <button id='cancel-button'>Cancel</button>
          </div>
          <div id='wizard-mid-2'>
            <p style={{ marginBottom: '25px' }}>Step 2</p>
            <div id='wizard-steps' style={{ marginBottom: '25px' }}>
              <img src={step_complete} alt='' />
              <img src={step_active} alt='' />
              <img src={step_inactive} alt='' />
              <img src={step_inactive} alt='' />
              <img src={step_inactive} alt='' />
            </div>
            <div id='wizard-forum' style={{ marginBottom: '25px' }}>
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Address</h3>
              <input className='wizard-forum-input' style={{ marginBottom: '25px', height: '25px' }} />
              <div id='wizard-forum2'>
                <div>
                  <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>City</h3>
                  <input className='wizard-forum-input-v2' />
                </div>
                <div>
                  <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>State</h3>
                  <input />
                </div>
              </div>
              <h3>Zip</h3>
              <input />

            </div>
            <button id='next-button'>Next Step</button>
          </div>
        </section>
      </div>
    )
  }
}