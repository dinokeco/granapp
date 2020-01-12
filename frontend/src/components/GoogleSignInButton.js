import React, { Component } from 'react'

import './../css/google-button.css';
import config from '../config';

class GoogleSignInButton extends Component {
    constructor(props) {
        super(props);
    }

    /* Go to the login endpoint */
    signIn = () => {
        window.location = `${config.BASE_URL}/login`;
    }

    render() {
        return (
            <div className="google-btn" onClick={this.signIn}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with Google</b></p>
            </div>
        )
    }
}

export default GoogleSignInButton;
