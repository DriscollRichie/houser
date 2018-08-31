import React, { Component } from 'react'
import './Dashboard.css'
import logo from '../../assets/house_logo.png'

export default class Dashboard extends Component {
  render() {
    return (
      <div id='dashboard-page'>
        <nav id='dashboard-nav'>
          <section id='dashboard-title'>
            <img src={logo} width='25px'/>
            <h1 className='dashboard-nav-text'>Houser</h1>
            <p className='dashboard-nav-text'>Dashboard</p>
          </section>
          <p>Logout</p>
        </nav>
        <section id='dashboard-mid'></section>
      </div>
    )
  }
}