import React, { Component } from 'react'
import './about.css'; 
import AboutImg from '../img/abt.png';


export class About extends Component {
  render() {
    return (
      <div className='abt'>
        <div class="about-container">
                <div class="abt-image-container">
                <img src={AboutImg} alt="Welcome Banner" />
                </div>
                <div class="text-container">
                    <h1>About Us</h1>
                    <p>
                        Welcome to Merry Meal, your source for delicious and nutritious meals. 
                        We are passionate about making a difference by providing wholesome food to those in need. 
                        With the support of our dedicated team and generous partners, we work tirelessly to combat hunger 
                        and bring smiles to faces.
                    </p>
                    <p>
                        Our mission is to create a hunger-free world, and we invite you to join us on this journey. 
                        Whether you're a member of our community, a partner in our cause, or a volunteer lending a helping hand, 
                        together, we can make a positive impact on the lives of countless individuals and families.
                    </p>
                </div>
            </div>
            <div class="abt-contact-section">
                <h2>Ready to get involved?</h2>
                <p>Contact us today to join our mission and make a difference!</p>
                <a href="/contact" class="abt-contact-button">Contact Us</a>
          </div>
    </div>
    )
  }
}

export default About