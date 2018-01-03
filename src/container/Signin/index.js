import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";

class Signin extends Component {

    constructor(props){
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }

    loginSubmit = (user) => {
        this.props.signin(user);
    }

    render() {
        return (
            <div>This is login</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signin(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);