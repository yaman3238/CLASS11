import React from 'react';
import Navbar from './modules/layout/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './modules/order/component/Cart'
import Mobile from './modules/products/component/Mobile'
import Laptop from './modules/products/component/Laptop'
import Watches from './modules/products/component/Watches'
import Login from './modules/user/component/Login'
import SignUp from './modules/user/component/SignUp'

let App = () =>
{
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/mobile' component={Mobile}/>
          <Route exact path='/laptop' component={Laptop}/>
          <Route exact path='/watches' component={Watches}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signUp' component={SignUp}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export default App;
