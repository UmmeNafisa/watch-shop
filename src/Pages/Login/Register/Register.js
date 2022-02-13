import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, formState: { errors }, } = useForm();
    const [loginData, setLoginData] = useState({});
    const history = useNavigate()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>

            <div className="login-bg">
                <div className="login-box">
                    <h1 className="header-bg  "> Register </h1>
                    <div>
                        <form onSubmit={handleLoginSubmit}>
                            <input {...register("name", { required: true })}
                                className="form-box"
                                placeholder="Your Name"
                                required
                                name="name"
                                onBlur={handleOnBlur} />
                            {errors.name?.type === 'required' && "Your name is required"}
                            <br />

                            <input {...register("email", { required: true })}
                                className="form-box"
                                placeholder=" Email"
                                required
                                name="email"
                                type="email"
                                onBlur={handleOnBlur} />
                            {errors.email?.type === 'required' && "Your email is required"}
                            <br />

                            <input {...register("password", { required: true })}
                                className="form-box"
                                placeholder="Password"
                                required
                                type="password"
                                name="password"
                                onBlur={handleOnBlur} />
                            {errors.password && "Password is required"}
                            <br />

                            <input {...register("rePassword", { required: true })}
                                className="form-box"
                                placeholder="Re-enter Password"
                                required
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur} />
                            {errors.rePassword && "Re-enter Password is required"}
                            <br />
                            <input {...register("phone", { required: true })} className="form-box" placeholder="Contact" required />
                            {errors.phone && "Phone Number is required"}
                            <br />

                            <button type="submit" className="google-sign-in-btn " >Register Now</button>

                            {/* {isLoading && <Spinner animation="grow" variant="primary" />}
                            {user?.email && <Alert variant='success'>Welcome, Your registration is successfully done!</Alert>}
                            {authError && <Alert variant='danger'>{authError}</Alert>} */}
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;