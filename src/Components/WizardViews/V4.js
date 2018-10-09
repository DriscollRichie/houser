import React, { Component } from 'react'
import logo from '../../assets/house_logo.png'
import axios from 'axios'
import './Wizard.css'
import step_active from '../../assets/step_active.png'
import step_inactive from '../../assets/step_inactive.png'
import step_complete from '../../assets/step_completed.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {stepFour} from '../../reducers/newPropertyReducer'

class V4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loanAmount: this.props.loanAmount,
      monthlyMortgage: this.props.monthlyMortgage
    }
  }

  logoutUser = async () => {
    try {
      await axios.post('/api/auth/logout')
      this.props.history.push('/')
    } catch (err) {
      console.error('logoutUser function failed in Dashboard.js:', err)
    }
  }

  handleInput(key, value) {
    this.setState({[key]: value})
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
            <p style={{ marginBottom: '25px' }}>Step 4</p>
            <div id='wizard-steps' style={{ marginBottom: '25px' }}>
              <img src={step_complete} alt='' />
              <img src={step_complete} alt='' />
              <img src={step_complete} alt='' />
              <img src={step_active} alt='' />
              <img src={step_inactive} alt='' />
            </div>
            <div id='wizard-forum'>
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Loan Amount</h3>
              <input className='wizard-forum-input' style={{ marginBottom: '25px', height: '25px' }} onChange={e => this.handleInput('loanAmount', e.target.value)} value={this.state.loanAmount}/>
              <h3 style={{ marginBottom: '5px', marginLeft: '15px' }}>Monthly Mortgage</h3>
              <input className='wizard-forum-input' style={{ height: '25px' }} onChange={e => this.handleInput('monthlyMortgage', e.target.value)} value={this.state.monthlyMortgage}/>
            </div>
            <div id='wizard-step-buttons'>
              <Link to='/wizard/v3'>
                <button className='wizard-step-button' style={{ width: '155px' }}>Previous Step</button>
              </Link>
              <Link to='/wizard/v5'>
                <button className='wizard-step-button' onClick={() => this.props.stepFour(this.state.loanAmount, this.state.monthlyMortgage)}>Next Step</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    loanAmount: state.loanAmount,
    monthlyMortgage: state.monthlyMortgage
  }
}

export default connect(mapStateToProps, {stepFour})(V4)