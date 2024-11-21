import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './pages/header';
import Contact from './pages/Contact/Contact';

import Member from './pages/Member/Member';
import Partner from './pages/Partner/Partner';
import Volunteer from './pages/Volunteer/Volunteer';
import Order from './pages/Order/Order';
import Menu from './pages/Menu/Menu';
import Status from './pages/Status/Status';
import Login from './pages/Login/Login';
import Footer from './pages/footer';
import LoagingIndicator from './pages/Loading/LoagingIndicator';
import AdminMeal from './pages/Admin/AdminMeal';
import AdminUser from './pages/Admin/AdminUser';
import MealUpload from './pages/MealUpload/MealUpload';
import Caregiver from './pages/Caregiver/Caregiver';
import RetrieveOrder from './pages/Order/RetrieveOrder';
import TermsAndConditions from './pages/Terms/TermsAndConditions ';
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './pages/Donate/PaymentForm';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import PartnerDashboard from './pages/Dashboard/PartnerDashboard';
import VolunteerDashboard from './pages/Dashboard/VolunteerDashboard';
import MemberDashboard from './pages/Dashboard/MemberDashboard';

const stripePromise = loadStripe("pk_test_51NzufgLsy5hTRWKeEA8yQZkU0aHDp3AazZUJhuzZuOSpiH0DkTlM90C0meTQko3pophyec3OfLzTTCnA1JbU2SjC00Qw9gfVp5");
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }

  render(){
    if(this.state.loading) {
      return <LoagingIndicator />
    }
    return (
      <div>
      <Router>

      <Header></Header>
      <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/member" component={Member}></Route>
          <Route path="/partner" component={Partner}></Route>
          <Route path="/volunteer" component={Volunteer}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/status" component={Status}></Route>
          <Route path="/login" render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
          <Route path="/adminMeal" component={AdminMeal}></Route>
          <Route path="/adminUser" component={AdminUser}></Route>
          <Route path="/mealUpload" component={MealUpload}></Route>
          <Route path="/careGiver" component={Caregiver}></Route>
          <Route path="/getOrder" component={RetrieveOrder}></Route>
          <Route path="/terms" component={TermsAndConditions}></Route>
          <Route path="/adminProfile" component={AdminDashboard}></Route>
          <Route path="/partnerProfile" component={PartnerDashboard}></Route>
          <Route path="/volunteerProfile" component={VolunteerDashboard}></Route>
          <Route path="/memberProfile" component={MemberDashboard}></Route>
          
          
          <Elements stripe={stripePromise}>
          <Route path="/donate" component={PaymentForm}></Route>
          </Elements>
        </Switch>

        

        <Footer></Footer>
      </Router>
      
      </div>
    );
  }
}

export default App;
