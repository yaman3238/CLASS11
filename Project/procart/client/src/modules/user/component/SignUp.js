import React from 'react';
import { Link } from 'react-router-dom';
import signup from './SignUp.module.css';


let SignUp = () =>
{
    return <>
        
        <div className={signup.signupform}>
                <form>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr></hr>
                    <div className={signup.formgroup}>
                        <div className="row">
                            <div className="col"><input type="text" className={signup.formcontrol}  name="first_name" placeholder="First Name" required="required"/></div>
                            <div className="col"><input type="text" className={signup.formcontrol} name="last_name" placeholder="Last Name" required="required"/></div>
                        </div>        	
                    </div>
                    <div className={signup.formgroup}>
                        <input type="email" className={signup.formcontrol} name="email" placeholder="Email" required="required"/>
                    </div>
                    <div className={signup.formgroup}>
                        <input type="password" className={signup.formcontrol} name="password" placeholder="Password" required="required"/>
                    </div>
                    <div className={signup.formgroup}>
                        <input type="password" className={signup.formcontrol} name="confirm_password" placeholder="Confirm Password" required="required"/>
                    </div>        
                    <div className={signup.formgroup}>
                        <label className={signup.formchecklabel}><input type="checkbox" required="required"/> I accept the <Link to="#">Terms of Use</Link> &amp; <Link to="#">Privacy Policy</Link></label>
                    </div>
                    <div className={signup.formgroup}>
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
	<div className={signup.hinttext}>Already have an account? <Link to="#">Login here</Link></div>
</div>
    
    </>
}

export default SignUp;