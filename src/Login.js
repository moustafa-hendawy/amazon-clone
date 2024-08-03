
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const auth = getAuth();
    const signIn = (e) => {
        e.preventDefault();
        navigate('/');

        // signInWithEmailAndPassword(auth, email, password)
        //     .then(() => {
        //         navigate('/');
        //     }).catch((error) => alert(error.message));

    }
    const register = (e) => {
        e.preventDefault();
        navigate('/');

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((auth) => {
        //         // const user = auth.user;
        //         //it successfully created a new user with email and password
        //         console.log(auth.user);
        //         if (auth.user) {
        //             navigate('/');
        //         }

        //     }).catch((error) => alert(error.message));
    }



    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png' />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn}>Sign In</button>

                </form>
                <p>My Name is Moustafa Hendawy My Name is Moustafa Hendawy My Name is Moustafa Hendawy</p>
                <button onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
