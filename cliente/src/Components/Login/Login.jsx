import React from "react";
import'./Login.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/arbol.jpg'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    return(
        <div className='loginPage flex' >
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to= {'/register'}>
                        <button className="btn"> Sing Up</button>
                        </Link>
                    </div>
                </div>
                
            
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">Login Status will go were</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon"/>
                                <input type="text" id="username" placeholder="Enter username"/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon"/>
                                <input type="password" id="password" placeholder="Enter password"/>
                            </div>
                        </div>

                        <button type="submit" className="btn flex">
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <a href="/dashboard">Dashboard</a>
                        <span className="forgotPassword">
                            Forgot your password? <a href="">Click here</a>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login