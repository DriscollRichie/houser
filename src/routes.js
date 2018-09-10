import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard';
import V1 from './Components/WizardViews/V1/V1'
import V2 from './Components/WizardViews/V2/V2'

export default(
  <Switch>
    <Route exact path='/' component={Auth}/>
    <Route path ='/dashboard' component={Dashboard}/>
    <Route path='/wizard/v1' component={V1}/>
    <Route path='/wizard/v2' component={V2}/>
  </Switch>
)