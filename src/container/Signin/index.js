import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { TextField, Paper, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';
import './styles.css';

class Signin extends Component {

    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
            hasEmailErr: "",
            hasPasswordErr: ""
        }
    }

    handleLogin = (user) => {
        if (this.state.email.trim() === "") {
            this.setState({ hasEmailErr: "Please provide email" })
            return false;
        }
        if (this.state.password.trim() === "") {
            this.setState({ hasPasswordErr: "Please provide password" })
            return false;
        }
        this.setState({ hasPasswordErr: "", hasEmailErr: "" })
        this.props.signin({ email: this.state.email, password: this.state.password });
        this.props.history.push("dashboard");
    }

    render() {
        return (
            <div className="login-container">
                <Paper className="paper-container" zDepth={3}>
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
                    <TextField
                        fullWidth={true}
                        errorText={this.state.hasEmailErr}
                        floatingLabelText="Enter Email"
                        onChange={(e, val) => this.setState({ email: val })}
                    />

                    <TextField
                        errorText={this.state.hasPasswordErr}
                        fullWidth={true}
                        floatingLabelText="Enter Password"
                        type="password"
                        onChange={(e, val) => this.setState({ password: val })}
                    />

                    <div className="footer">
                        <Link to="/signup">
                            <FlatButton label="Sign up" primary={true} />
                        </Link>
                        <FlatButton label="Login" secondary={true} onClick={this.handleLogin} />
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signinSuccess(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);