import React, { Component } from 'react';
import './partner.css';
import { toast } from "react-toastify";
import axios from 'axios';

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      lat: '',
      long: '',
      image: null,
    };
  }

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.handleGeolocationSuccess, this.handelGeolocationError)
    }else{
      toast.error('Geolocation is not suppoerted by your browser')
    }
  }

  handleGeolocationSuccess = (position) => {
    const {latitude, longitude} = position.coords
    this.setState({lat: latitude, long: longitude})
  }

  handelGeolocationError = (error) => {
    toast.error('Failed to obtain your location. Please enter latitude and longitude manually.')
  }
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    formData.append('lat', this.state.lat);
    formData.append('long', this.state.long);
    formData.append('evidenceImage', this.state.image);

    axios.post('http://localhost:8080/logic/partnerReg', formData)
      .then((response) => {
        toast.success('Registration successful. Please wait for admin approval.');
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`)
      });
  }

  render() {
    return (
      <div className="partner-registration-bg">
        <div className="partner-registration-form">
          <h1><center>Partner Registration</center></h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className='partner-label' htmlFor="name">Organization Name:</label>
              <input
                className='partner-input'
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='partner-label' htmlFor="email">Email:</label>
              <input
                className='partner-input'
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='partner-label' htmlFor="password">Password:</label>
              <input
                className='partner-input'
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='partner-label' htmlFor="lat">Latitude:</label>
              <input
                className='partner-input'
                type="text"
                name="lat"
                id="lat"
                value={this.state.lat}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='partner-label' htmlFor="long">Longitude:</label>
              <input
                className='partner-input'
                type="text"
                name="long"
                id="long"
                value={this.state.long}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='partner-label' htmlFor="image">Organization Id:</label>
              <input
                className='partner-file'
                type="file"
                name="image"
                id="image"
                onChange={this.handleImageChange}
                accept="image/*"
              />
            </div>
            <button className='partner-btn' type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Partner;
