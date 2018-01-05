import React from 'react'
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import {
  Signup,
  Signin,
  Home
} from './../container/index';


const AppRoutes = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Signin} /> 
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Home} />
      </div>
    </HashRouter>
  )
};

export default AppRoutes;