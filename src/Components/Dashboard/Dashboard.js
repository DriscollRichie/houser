import React, { Component } from 'react'
import './Dashboard.css'
import logo from '../../assets/house_logo.png'
import axios from 'axios'

export default class Dashboard extends Component {
  state = {
    properties: []
  }

  componentDidMount = async () => {
    try {
      let { data: properties } = await axios.get('/api/properties')
      console.log('properties', properties)
      this.setState({ properties })
    } catch (err) {
      console.error('componentDidMount failed in Dashboard.js:', err)
    }
  }

  render() {
    const properties = this.state.properties.map(e => {
      console.log('e', e)
      return (
        <div key={e.property_id}>
          <img src={e.property_image}/>
          <h2>{e.property_name}</h2>
          <p>{e.property_description}</p>
          <p>Loan: {e.property_loan_amount}</p>
          <p>Monthly Mortgage: {e.property_monthly_mortgage}</p>
          <p>Desired Rent: {e.property_desired_rent}</p>
          <p>Address: {e.property_address}</p>
          <p>City: {e.property_city}</p>
        </div>
      )
    })

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
            <input id='dashboard-filter-input' placeholder='0' />
            <button className='dashboard-filter-controls'>Filter</button>
            <button className='dashboard-filter-controls'>Reset</button>
          </div>
          <hr />
          <div id='dashboard-mid-bottom'>
            <h2 id='dashboard-homelist-title'>Home Listings</h2>
            <div>
              {properties}
            </div>
          </div>
        </section>
      </div>
    )
  }
}