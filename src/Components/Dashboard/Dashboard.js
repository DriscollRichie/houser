import React, { Component } from 'react'
import './Dashboard.css'
import logo from '../../assets/house_logo.png'
import axios from 'axios'

export default class Dashboard extends Component {
  state = {
    properties: [],
    rentFilter: 0
  }

  getAllProperties = async () => {
    try {
      let { data: properties } = await axios.get('/api/properties')
      this.setState({ properties, rentFilter: '' })
    } catch (err) {
      console.error('getAllProperties failed in Dashboard.js:', err)
    }
  } 

  componentDidMount = async () => {
    try {
      this.getAllProperties()
    } catch (err) {
      console.error('componentDidMount failed in Dashboard.js:', err)
    }
  }

  handleChange(key, value) {
    this.setState({[key]: value})
  }

  filterProperties = async () => {
    try {
      const {rentFilter} = this.state
      let { data: properties } = await axios.get(`/api/properties?rentFilter=${rentFilter}`)
      this.setState({ properties })
    }catch(err) {
      console.error('filterProperties function failed in Dashboard.js:', err)
    }
  }

  logoutUser = async () => {
    try{
      await axios.post('/api/auth/logout')
      this.props.history.push('/')
    }catch(err) {
      console.error('logoutUser function failed in Dashboard.js:', err)
    }
  }

  render() {
    const properties = this.state.properties.map(e => {
      return (
        <div key={e.property_id} id='dashboard-house-details-container'>
          <img src={e.property_image} width='150px' height='150px' />
          <div id='dashboard-house-details-container-left'>
            <h2 id='property-name'>{e.property_name}</h2>
            <section id='property-desc-container'>
              <p id='property-desc'>{e.property_description}</p>
            </section>
          </div>
          <hr id='hr-seperator' />
          <div id='dashboard-house-details-container-right'>
            <p id='loan-text'>Loan: ${e.property_loan_amount}</p>
            <p className='house-details'>Monthly Mortgage: ${e.property_monthly_mortgage}</p>
            <p className='house-details'>Desired Rent: ${e.property_desired_rent}</p>
            <p className='house-details'>Address: {e.property_address}</p>
            <p className='house-details'>City: {e.property_city}</p>
          </div>
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
          <p onClick={() => this.logoutUser()}>Logout</p>
        </nav>
        <section id='dashboard-mid'>
          <button id='dashboard-add-propertyBtn'>Add new property</button>
          <div id='dashboard-property-filter'>
            <p>List properties with "desired rent" greater then: $</p>
            <input id='dashboard-filter-input' placeholder='0' onChange={e => this.handleChange('rentFilter', e.target.value)} value={this.state.rentFilter}/>
            <button className='dashboard-filter-controls' onClick={() => this.filterProperties()}>Filter</button>
            <button className='dashboard-filter-controls' onClick={() => this.getAllProperties()}>Reset</button>
          </div>
          <hr />
          <div id='dashboard-mid-bottom'>
            <h2 id='dashboard-homelist-title'>Home Listings</h2>
            {properties}
          </div>
        </section>
      </div>
    )
  }
}