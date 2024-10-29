import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/Authservices';
import './SinInUp.css';

function SinInUp() {

    const navigate = useNavigate();

    //pamal chenge
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    //register
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password_first: '',
        password: '',
    });

    const { username, email, mobile, password, password_first } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === password_first) {
            try {
                const response = await AuthService.register(formData);
                console.log(response);
                alert('User registered successfully!');

                // Reset form values
                setFormData({
                    username: '',
                    email: '',
                    mobile: '',
                    password_first: '',
                    password: '',
                });

                setIsRightPanelActive(false);
            } catch (error) {
                alert('Error registering user');
            }
        } else {
            alert('Confirm password miss match');
        }
    };
    //register end

    //login 
    const [loginFormData, setloginFormData] = useState({
        email: '',
        password: '',
    });

    const { loginemail, loginpassword } = loginFormData;

    const onChangeLogin = (e) => {
        setloginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login(loginFormData);
            console.log(response);
            alert('Logged in successfully!');
            navigate('/');
        } catch (error) {
            alert('Email or Password is incorrect');
        }
    };
    //login end

    //ressponsiveness for mobile 
    const [isHidden, setIsHidden] = useState(false);

    // Toggle the "hide-on-large" state
    const handleActivate = () => setIsHidden(true);
    const handleDeactivate = () => setIsHidden(false);

    return (
        <div className="sinup">
            <div className="sinupbody">
                <div className={`siucontainer ${isRightPanelActive ? 'right-panel-active' : ''}`} id="siucontainer">

                    {/* Sign Up Form */}
                    <div className={isHidden ? 'hide-on-large' : ''}>
                        <div className="form-siucontainer sign-up-siucontainer">
                            <form className='siuform' onSubmit={onSubmit} action="#">
                                <h1 className='custom-top-margin'>Create Account</h1>
                                <div className="social-siucontainer">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your email for registration</span>
                                <span className='hide-link'>
                                    Already have an account
                                    <a onClick={handleActivate} className='link-color-margin'>
                                        Sign In
                                    </a>
                                    <br />
                                    <br />
                                </span>
                                <div className='singup-input'>
                                    <input type="text"
                                        name="username"
                                        placeholder="Name"
                                        value={username}
                                        onChange={onChange}
                                        required />
                                    <input type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required />
                                    <input type="text"
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        value={mobile}
                                        onChange={onChange}
                                        required />
                                    <input
                                        type="password"
                                        name="password_first"
                                        placeholder="Password"
                                        value={password_first}
                                        onChange={onChange}
                                        required />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        value={password}
                                        onChange={onChange}
                                        required />
                                </div>
                                <button type="submit" className='custom-bootom-margin'>Sign Up</button>
                            </form>
                        </div>
                    </div>

                    {/* Sign In Form */}
                    <div className={isHidden ? '' : 'hide-on-large'}>
                        <div className="form-siucontainer sign-in-siucontainer">
                            <form className='siuform' onSubmit={onSubmitLogin} action="#">
                                <h1 className='custom-top-margin'>Sign in</h1>
                                <div className="social-siucontainer">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your account</span>
                                <span className='hide-link'>
                                    Create an account
                                    <a onClick={handleDeactivate} className='link-color-margin'>
                                        Sign Up
                                    </a>
                                    <br />
                                    <br />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={loginemail}
                                    onChange={onChangeLogin}
                                    required />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={loginpassword}
                                    onChange={onChangeLogin}
                                    required />
                                <a href="#">Forgot your password?</a>
                                <button type='submit'>Sign In</button>
                            </form>
                        </div>
                    </div>

                    {/* Overlay */}
                    <div className="overlay-siucontainer">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={handleSignInClick} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start your journey with us</p>
                                <button className="ghost" onClick={handleSignUpClick} id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinInUp;
