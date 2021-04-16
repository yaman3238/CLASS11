import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

let SignUp = () =>
{
    return <>
        
        <div className="signup-form">
                <form>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr></hr>
                    <div className="form-group">
                        <div className="row">
                            <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/></div>
                            <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
                    </div>        
                    <div className="form-group">
                        <label className="form-check-label"><input type="checkbox" required="required"/> I accept the <Link to="#">Terms of Use</Link> &amp; <Link to="#">Privacy Policy</Link></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
	<div className="hint-text">Already have an account? <Link to="#">Login here</Link></div>
</div>
    
    </>
}

export default SignUp;