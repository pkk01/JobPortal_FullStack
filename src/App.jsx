import React, { Component } from 'react';
import './App.css';

class App extends Component {
    showSignin() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        let popupHeader = document.getElementById("popupHeader");
        popupHeader.innerHTML="LOGIN";
        let signin = document.getElementById("signin");
        let signup = document.getElementById("signup");
        signin.style.display = "block";
        signup.style.display = "none";
    }

    showSignUp() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        let popupHeader = document.getElementById("popupHeader");
        popupHeader.innerHTML="Register Now";
        let signin = document.getElementById("signin");
        let signup = document.getElementById("signup");
        signin.style.display = "none";
        signup.style.display = "block";
        
    }

    closeSignIn(event) {
        if (event.target.id == "popup") {
            let popup = document.getElementById("popup");
            popup.style.display = "none";
        }
    }

    render() {
        return (
            <div id='container'>
                {/* logic for popup */}
                <div id='popup' onClick={this.closeSignIn}>
                    <div id='popupWindow'>
                        <div id='popupHeader'>
                            <label>LOGIN</label>
                        </div>
                        <div id='signin'>
                            <label className='usernameLabel'>Username: </label>
                            <input type="text" id='username' />

                            <label className='passwordLabel'>Password: </label>
                            <input type="password" id='password' />

                            <div className='forgetpassword'>Forget <label>Password?</label></div>
                            <button className='signinButton'>Login</button>

                            <div className='div1'></div>
                            <div className='div2'>
                                Don't have an account? <br />
                                <label onClick={this.showSignUp}> SignUp Now</label>
                            </div>

                        </div>

                        <div id='signup'>
                            <label>Full Name: </label>
                            <input type="text" id='fullname' />

                            <label >Email: </label>
                            <input type="text" id='email' />
                            <label id='roleText'>Select Role: </label>
                            <select id="role">
                                <option value="">select option</option>
                                <option value="1">Admin</option>
                                <option value="2">Employeer</option>
                                <option value="3">Job Seeker</option>
                            </select>
                            <label >Password: </label>
                            <input type="password" id='password' />
                            <label >Confirm Password: </label>
                            <input type="password" id='confirmPassword' />
                            <button className='signupButton'>Register</button>
                            <div> Already have an Account? <span onClick={this.showSignin}>SignIn</span></div>

                        </div>
                    </div>
                </div>
                <div id='header'>
                    <img className='logo' src='logo.png' alt='logoImg' />
                    <div className='logoText'> <span>Job</span> Portal</div>
                    <img className = 'signIcon' src="user.png" alt="userImg" onClick={this.showSignin} />
                    <label className="signinText" onClick={this.showSignin}>sign in</label>
                </div>
                <div id='content'>
                    <div className='text1'>INDIA'S #1 JOB PLATFORM</div>
                    <div className='text2'>Your job search ends here</div>
                    <div className='text3'>Discover career opportunities</div>
                    <div className='searchBar'>
                        <input type="text" className='searchjobText' placeholder='search job by "skills"'/>
                        <input type="text" className='searchlocationText' placeholder='search job by "location"'/>
                        <button className='searchButton'>Search jobs</button>

                    </div>
                </div>
                <div id='footer'>
                    <label className='copyrightText'>copyright @ 2024 All rights reserved</label>
                    <img className='socialMediaIcon' src="facebook.png" alt="" />
                    <img className='socialMediaIcon' src="linkedin.png" alt="" />
                    <img className='socialMediaIcon' src="twitter.png" alt="" />

                </div>
            </div>
        );
    }
}

export default App;
