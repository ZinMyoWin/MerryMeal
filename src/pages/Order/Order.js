import React, { Component } from 'react';
import './order.css'
import { toast } from "react-toastify";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      mealId: '',
      day: '',
      userLatitude: '',
      userLongitude: '',
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { mealId, day, userLatitude, userLongitude } = this.state;

    const authToken = localStorage.getItem('token')
    // toast.success('Order placed Successfully')

    fetch('http://localhost:8080/logic/' + mealId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        mealId,
        day,
        userLatitude,
        userLongitude,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.message){
        toast.success(data.message)
      }
    })
    .catch((error) => {
      toast.error('Error', error)
    })
  };

  render() {
    const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className='order-container'>
        <h1>Create an Order</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className='order-label' htmlFor="mealId">Meal Set:</label>
            <input
              className='order-input'
              type="text"
              id="mealId"
              name="mealId"
              onChange={this.handleChange}
              value={this.state.mealId}
            />
          </div>

          <div>
            <label className='order-label' htmlFor="day">Day:</label>
            <select
              className='order-select'
              id="day"
              name="day"
              onChange={this.handleChange}
              value={this.state.day}
            >
              <option value="">Select a day</option>
              {dayOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>


          <div>
            <label className="order-label" htmlFor="userLatitude">
              User Latitude:
            </label>
            <input
              className="order-input"
              type="text"
              id="userLatitude"
              name="userLatitude"
              onChange={this.handleChange}
              value={this.state.userLatitude}
            />
          </div>
          <div>
            <label className="order-label" htmlFor="userLongitude">
              User Longitude:
            </label>
            <input
              className="order-input"
              type="text"
              id="userLongitude"
              name="userLongitude"
              onChange={this.handleChange}
              value={this.state.userLongitude}
            />
          </div>
          <button className='order-btn' type="submit">Create Order</button>
        </form>
      </div>
    );
  }
}

export default Order;
