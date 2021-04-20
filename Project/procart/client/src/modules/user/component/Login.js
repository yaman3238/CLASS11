import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import login from './Login.module.css';
import cx from 'classnames'

let Login = () =>
{

    let [user, setUser] = useState({ userName: "", password: "" });

    let inputHandler = (event) =>
    {
        setUser({...user, [event.target.name]:event.target.value})
    }

    let submitHandler = (event) =>
    {
        event.preventDefault();
        console.log(user, 'testing');
    }

    return <>
        
        <div className="container" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className={login.card}>
                                    <form  className={login.box} onSubmit={submitHandler}>
                                        <h1>Login</h1>
                                    <p className="text-muted"> Please enter your login and password!</p>
                            <input type="text" name="userName" placeholder="Username" onChange={inputHandler}/>
                                        <input type="password" name="password" placeholder="Password" onChange={ inputHandler} />
                                            <Link className={login.forgot} to="#">Forgot password?</Link>
                                            <input type="submit" name="" value="Login" to="#"/>
                                        <div className="col-md-12">
                                <ul className={ cx(login.socialnetwork , login.socialcircle)}>
                                                <li><Link to="#" className={login.icoFacebook} title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#" className={login.icoTwitter} title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#" className={login.icoGoogle} title="Google +"><i className="fab fa-google-plus"></i></Link></li>
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