import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

let Login = () =>
{
    return <>
        
        <div className="container" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <form onsubmit="event.preventDefault()" className="box">
                                        <h1>Login</h1>
                                    <p className="text-muted"> Please enter your login and password!</p>
                                    <input type="text" name="" placeholder="Username"/>
                                        <input type="password" name="" placeholder="Password"/>
                                            <Link className="forgot text-muted" to="#">Forgot password?</Link>
                                            <input type="submit" name="" value="Login" to="#"/>
                                        <div className="col-md-12">
                                            <ul className="social-network social-circle">
                                                <li><Link to="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus"></i></Link></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    
    </>
}

export default Login;