import "./Login.css"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import firebase from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { register, handleSubmit } = useForm();

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
                console.log(loggedInUser)
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const onSubmit = data => {

        const addminData = {
            email: data.email,
            password: data.password


        }
        localStorage.setItem('user', JSON.stringify(addminData));
        history.replace(from);
    }


    return (


        <>


<div className="form-login text-center ">
<form onSubmit={handleSubmit(onSubmit)} className=""> 
                   <h3>Sign in</h3><br />          

<input type="text" class="form-control"  {...register("email")} placeholder="email" defaultValue="test@test.com" /> <br />
<input   {...register("password")} className="form-control " placeholder="Password" defaultValue="#2021dev" /> <br />

<button className ="login-btn">Sign in</button>
<p>or</p>
</form>
<button onClick={handleGoogleSignIn} className ="login-btn">Continue with Google</button>
<p>Don't have an account? Create One</p>
<p style={{ color: 'red' }}>{error}</p>
             
</div>

                   
        </>
    );
};

export default Login;