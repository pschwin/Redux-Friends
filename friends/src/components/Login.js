import React from 'react';
import {connect} from 'react-redux';
//import Loader from 'react-loader-spinner';

import {login} from '../actions';

class Login extends React.Component{
    state={
        loginInfo:{
            username: '',
            password: ''
        }
    }

    handleChange = e =>{
        this.setState({
            loginInfo:{
                ...this.state.loginInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e =>{
        e.preventDefault();
        this.props
            .login(this.state.loginInfo)
            .then(() => this.props.history.push('/authpage'));
    }

    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.loginInfo.username}
                        onChange={this.handleChange}
                    >
                    </input>
                    <input
                        type="password"
                        name="password"
                        value={this.state.loginInfo}
                        onChange={this.handleChange}
                    >
                    <button>
                        {this.props.isLoggingIn ? (
                        // <'Loader />'
                        'Log in'
                        ) : (
                            'Log in'
                            )
                        }
                    </button>
                    </input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isLoggingIn: state.isLoggingIn
    }
}

export default connect(
    mapStateToProps,
    {login}
)(Login)