import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () =>
{
    return <React.Fragment>
                <nav className='navbar navbar-dark bg-dark'>
                    <ul className='navbar-nav list-group-horizontal'>
                        <li className='nav-item active mr-3 navbar-brand'>
                            <Link className='nav-link' to='/'>Pro Cart</Link>
                        </li>
                        <li className='nav-item active p-2 m-auto'>
                            <Link  className='nav-link' to='/mobile'>Mobile</Link>
                        </li>
                        <li className='nav-item active p-2 m-auto'>
                            <Link className='nav-link' to='/laptop'>Laptop</Link>
                        </li>
                        <li className='nav-item active p-2 m-auto'>
                            <Link className='nav-link' to='/watches'>Watches</Link>
                        </li>
                    </ul>
            


                    <ul className='navbar-nav list-group-horizontal float-right'>
                        <li className='nav-item active mr-3'>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                        <li className='nav-item active mr-3'>
                            <Link  className='nav-link' to='/signUp'>Sign Up</Link>
                        </li>
                        <li className='nav-item active mr-3'>
                        <Link className='nav-link' to='/cart'>
                        <i className="fas fa-shopping-cart">
                        <span className="badge ">4</span>
                            </i>
                    </Link>
                </li>
                
                <li className='nav-item active mr-3'>
                        <Link className='nav-link' to='/productCart'>
                        <i className="fas fa-user"></i>
                    </Link>
                        </li>
                    </ul>

            

            

                
            </nav>
    </React.Fragment>
    


}

export default Navbar;