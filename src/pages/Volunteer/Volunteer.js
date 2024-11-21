import React, { Component } from 'react';
import './volunteer.css';
import Alert from 'react-s-alert';
import axios from 'axios';

class Volunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      image: null,
    };
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
    formData.append('evidenceImage', this.state.image);

    axios.post('http://localhost:8080/logic/volunteerReg', formData)
      .then((response) => {
        Alert.success('Registration successful. Please wait for admin approval.')
      })
      .catch((error) => {
        Alert.error(`${error.response.data.message}`)
      });
  }

  render() {
    return (
      <div className="volun-registration-bg">
        <div className="volun-registration-form">
          <h1><center>Volunteer Registration</center></h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className='vol-label' htmlFor="name">Name:</label>
              <input
                className='vol-input'
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='vol-label' htmlFor="email">Email:</label>
              <input
                className='vol-input'
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='vol-label' htmlFor="password">Password:</label>
              <input
                className='vol-input'
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='vol-label' htmlFor="image">National Id:</label>
              <input
                className='vol-file'
                type="file"
                name="image"
                id="image"
                onChange={this.handleImageChange}
                accept="image/*"
              />
            </div>
            <button className='volunteer-btn' type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Volunteer;
