import React, { Component } from 'react'
import './contact.css'; 
import axios from 'axios';
import Alert from 'react-s-alert';

export class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      message:'',
    };
  }

  handleInputChange = (event)=>{
    const{name,value}= event.target;
    this.setState({[name]:value});
  }

  handleSubmit = (event)=>{
    event.preventDefault();

    const formData = new FormData();
    formData.append('email',this.state.email);
    formData.append('message',this.state.message);
    
    axios.post('http://localhost:8080/logic/contactUs', formData)
      .then((response) => {
        Alert.success('Form Submitted Successfully')
      })
      .catch((error) => {
        Alert.error(error)
      });
  }
  render() {
    return (
      <div className="contact-bg">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className='cont-form' onSubmit={this.handleSubmit}> 
              <div className="form-group">
                <label className='cont-label' htmlFor="name">Name</label>
                <input className='cont-input' type="text" id="name" name="name" placeholder="Your Name" value={this.state.name}
                onChange={this.handleInputChange} required />
              </div>
              <div className="form-group">
                <label className='cont-label' htmlFor="email">Email</label>
                <input className='cont-input' type="email" id="email" name="email" placeholder="Your Email" value={this.state.email}
                onChange={this.handleInputChange} required />
              </div>
              <div className="form-group">
                <label className='cont-label' htmlFor="message">Message</label>
                <input className='cont-textarea' type="text" id="message" name="message" placeholder="Your Message"  value={this.state.password}
                onChange={this.handleInputChange} required />
              </div>
              <button className='cont-btn' type="submit">Submit</button>
            </form>
            </div>   
      </div>
    )
  }
}

export default Contact