import React, { Component } from 'react'
import './Dashboard.css'
import logo from '../../assets/house_logo.png'

export default class Dashboard extends Component {
  render() {
    return (
      <div id='dashboard-page'>
        <nav id='dashboard-nav'>
          <section id='dashboard-title'>
            <img src={logo} width='25px' />
            <h1 className='dashboard-nav-text'>Houser</h1>
            <p className='dashboard-nav-text'>Dashboard</p>
          </section>
          <p>Logout</p>
        </nav>
        <section id='dashboard-mid'>
          <button id='dashboard-add-propertyBtn'>Add new property</button>
          <div id='dashboard-property-filter'>
            <p>List properties with "desired rent" greater then: $</p>
            <input id='dashboard-filter-input' placeholder='0'/>
            <button className='dashboard-filter-controls'>Filter</button>
            <button className='dashboard-filter-controls'>Reset</button>
          </div>
          <hr/>
        </section>
      </div>
    )
  }
}