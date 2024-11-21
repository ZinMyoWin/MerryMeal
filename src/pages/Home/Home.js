import React, { Component } from 'react'
import './home.css'; 
import welcome from '../img/welcome1.png';
import old from '../img/old.png';
import mealORG from '../img/mealorg.png';
import volun1 from '../img/volun1.png';


export class Home extends Component {
  render() {
    return (
    <div className='home'>
          <div className="home-container">
            <div className="welcome-text">
              <h1>Welcome to the Merry Meal Website</h1>
              <p>Your source for delicious and nutritious meals!</p>
              <a href="/about" className="about-button">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                  About Us
                  </a>
            </div>
            <div className="image-container">
              <img src={welcome} alt="Welcome Banner" />
            </div>
          </div>

          <div className="sections-container">
            <div className="section-mem" id='member'>
              <div className="section-text">
                <h2>Members</h2>
                <p>
                  Join our Merry Meal community as a member and enjoy exclusive benefits.
                  Help us make a difference by supporting our mission.
                </p>
                <a href="/member" className="register-button">
                  Register
                  </a>
              </div>
              <div className="section-image-one">
                <img src={old} alt="Members" />
              </div>
            </div>
            
            <div className="section-partner" id='partner'>
                <div className="section-text">
                  <h2>Partnerships</h2>
                  <p>
                    Collaborate with Merry Meal to create meaningful partnerships.
                    Together, we can work towards a hunger-free world.
                  </p>
                  <a href="/partner" className="register-button">
                    Register
                    </a>
                </div>
                <div className="section-image-two">
                  <img src={mealORG} alt="Partners" />
                </div>
            </div>

            <div className="section-vol" id='volun'>
                <div className="section-text">
                  <h2>Volunteers</h2>
                  <p>
                    Be a part of our volunteer team and make a direct impact on the lives of those in need.
                    Help us distribute meals and bring smiles to faces.
                  </p>
                  <a href="/volunteer" className="register-button">
                    Register
                    </a>
                </div>
                <div className="section-image-three">
                  <img src={volun1} alt="Volunteers" />
                </div>
            </div>
        </div>
    </div>

       

      
    );
  }


}

export default Home