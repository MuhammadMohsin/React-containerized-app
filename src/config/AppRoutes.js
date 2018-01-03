import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import {
  Signup,
  Signin,
  Home
} from './../container/index';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Signin} /> 
        <Route exact path="/dashboard" component={Home} />
      </div>
    </BrowserRouter>
  )
};

export default AppRoutes;