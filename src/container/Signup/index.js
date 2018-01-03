import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { TextField, Paper, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom'
import './styles.css';

class Signup extends Component {

    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
            repeatPassword: "",
            hasEmailErr: "",
            hasPasswordErr: "",
            hasPasswordRepeatErr: ""
        }
    }

    handleSubmit = (user) => {
        
        this.setState({hasPasswordErr: "", hasEmailErr: "", hasPasswordRepeatErr: ""});

        if(this.state.email.trim() === ""){
            this.setState({hasEmailErr: "Please provide email"})
            return false;
        }
        if(this.state.password.trim() === ""){
            this.setState({hasPasswordErr: "Please provide password"})
            return false;
        }

        if(this.state.repeatPassword.trim() === ""){
            this.setState({hasPasswordRepeatErr: "Please provide password"})
            return false;
        }

        if(this.state.repeatPassword !== this.state.password){
            this.setState({hasPasswordRepeatErr: "Password doesn't match"})
            return false;
        }

        this.props.signup({email: this.state.email, password: this.state.password});
        // this.props.history.push("dashboard");
    }

    render() {
        return (
            <div className="signup-container">
                <Paper className="paper-container" zDepth={3}>
                    <h1 style={{textAlign: 'center'}}>Create Account</h1>
                    <TextField
                        fullWidth={true}
                        errorText={this.state.hasEmailErr}
                        floatingLabelText="Enter Email"
                        onChange={(e,val)=> this.setState({email: val})}
                    />

                    <TextField
                        errorText={this.state.hasPasswordErr}
                        fullWidth={true}
                        floatingLabelText="Enter Password"
                        type="password"
                        onChange={(e,val)=> this.setState({password: val})}
                    />

                    <TextField
                        errorText={this.state.hasPasswordRepeatErr}
                        fullWidth={true}
                        floatingLabelText="Repeat Password"
                        type="password"
                        onChange={(e,val)=> this.setState({repeatPassword: val})}
                    />
                    
                    <div className="footer">
                        <Link to="/login">
                                <FlatButton label="Login" primary={true} /> 
                        </Link>
                        <FlatButton label="Create" secondary={true} onClick={this.handleSubmit}/>    
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
        signup: (userObj) => dispatch(AuthActions.signupSuccess(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);