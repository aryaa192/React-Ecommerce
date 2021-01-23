import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    
    
    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login.
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }


    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then( auth => {
                if( auth ) {
                    history.push('/login')
                }
            })
            .catch(error => alert(error.message))
        }
    return (
        <div className="login">
              <Link to="/">
                <img className="login_logo"
                     src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
                     alt="" 
                />
              </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={ e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="login_signin_button" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By Singing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, Our Cookies Notice and our Interest-Based Ads Notices.
                </p>
                <button className="login_register_button" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login