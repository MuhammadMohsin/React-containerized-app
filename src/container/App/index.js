import React, { Component } from 'react';
import { lightBlue800, grey800 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppRoutes from './../../config/AppRoutes'
import './styles.css';
import { Header } from './../Header'

class App extends Component {

  muiTheme = getMuiTheme({
    palette: {
      textColor: grey800,
    },
    appBar: {
      height: 50,
      color: lightBlue800
    },
    paper:{}
  });

  render() {
    return (
       <MuiThemeProvider muiTheme={this.muiTheme}>
          <div>
            <Header/>
            <AppRoutes />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
