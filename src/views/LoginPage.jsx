import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth';

const LoginPage = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let { from } = location.state || { from: { pathname: '/' } };

    function submitHandler(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get('username');

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>you must login to view the page at {from.pathname}</p>
            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    UserName:<input name='username' type='text'/>
                </label>{" "}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;