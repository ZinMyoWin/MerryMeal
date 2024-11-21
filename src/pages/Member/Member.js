import React, { Component } from 'react';
import axios from 'axios';
import './member.css'
import { toast } from "react-toastify";

class Member extends Component {
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

    const{ email, password} = this.state

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
    if (password.length < 6 || password.length > 20) {
      toast.error('Password must be 6 to 20 characters');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('evidenceImage', this.state.image);

    axios.post('http://localhost:8080/logic/memberReg', formData)
      .then((response) => {
        toast.success('Registration successful. Please wait for admin approval.')
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`)
      });
  }

  render() {
    return (
      <div className="registration-bg">
        <div className="registration-form">
          <h1><center>Member Registration</center></h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className='mem-label' htmlFor="name">Name:</label>
              <input
                className='mem-input'
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='mem-label' htmlFor="email">Email:</label>
              <input
                className='mem-input'
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='mem-label' htmlFor="password">Password:</label>
              <input
                className='mem-input'
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='mem-label' htmlFor="image">Medical Certificate:</label>
              <input
                className='mem-file'
                type="file"
                name="image"
                id="image"
                onChange={this.handleImageChange}
                accept="image/*"
              />
            </div>
            <button className='member-btn' type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Member;
