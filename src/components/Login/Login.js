import "./Login.css"
import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email, img: user.photoURL };
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div className="login">
            <div className="login-box">
                <h3>Login</h3><br />

                <button className="login-btn" onClick={handleGoogleSignIn}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                    <b className="float-sm-end">Continue with Google</b>
                </button>

                <p>Don't have an account? Create One</p>

                <p style={{ color: 'red' }}>{error}</p>
            </div>

        </div>
    );
};

export default Login;


