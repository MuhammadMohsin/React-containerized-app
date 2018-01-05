import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: true,
    };
  }

  handleLogout = ()=>{
    this.props.logout();
    console.log(this.props)
    window.location.href = "/";
  }
  render() {
    return (
      <AppBar
        title="Todo List"
        showMenuIconButton={false}
        iconElementRight={this.state.logged ?
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
              <MenuItem primaryText="Sign out" onClick={this.handleLogout} />
            </IconMenu> : null}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(AuthActions.logoutSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);