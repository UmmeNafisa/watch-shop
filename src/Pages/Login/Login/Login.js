import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




import './Login.css'

const Login = () => {
    const { register, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <div className="login-bg">
                <div className="login-box">
                    <div className="container">
                        <h1 className="header-bg"> Login </h1>
                        <form onSubmit={handleLoginSubmit}>
                            <input  {...register("email", { required: true })}
                                className="form-box"
                                placeholder=" Email"
                                required
                                name="email"
                                onChange={handleOnChange} />
                            {errors.email?.type === 'required' && "Your email is required"}
                            <br />
                            <input  {...register("password", { required: true })}
                                className="form-box"
                                placeholder="Password"
                                required
                                type="password"
                                name="password"
                                onChange={handleOnChange} />
                            {errors.password && "Password is required"}
                            <br />

                            <button className="btn-all" type="submit" >Login</button>

                            {/* {isLoading && <Spinner animation="grow" variant="primary" />}
                            {user?.email && <Alert variant='success'>Login successfully!</Alert>}
                            {authError && <Alert variant='danger'>{authError}</Alert>} */}
                        </form>
                        <p className='new-user'> New User ? Create a new Account <Link to="/register" className="register">Register</Link> </p>
                        <p className='new-user'> --------------------------- or ---------------------------</p>
                        <button className="google-sign-in-btn" onClick={handleGoogleSignIn} >Google Sign In</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;