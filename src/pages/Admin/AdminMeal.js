import React, { Component } from 'react';
import Service from '../Service';
import Alert from 'react-s-alert'
import './adminMeal.css'

export class AdminMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    Service.viewMealsAdmin().then((response) => {
      this.setState({
        meals: response.data,
      });
    });
  }

  handleApprove = (id) => {
    Service.approveMeals(id)
      .then((response) => {
        Alert.success('Meal Approved', response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        Alert.error('Error Approving Meal', error);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  handleReject = (id) => {
    Service.rejectMeals(id)
      .then((response) => {
        Alert.success('Meal Rejected', response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        Alert.error('Error Rejecting Meal', error);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  render() {
    return (
      <div className="ad-menu-container">
        <h1 className='ad-h1'>Manage Meal</h1>
        {this.state.meals.map((meal) => (
          <div key={meal.id} className="ad-meal-item">
            <img
              src={`data:image/jpeg;base64, ${meal.mealImg}`}
              alt={meal.name}
            />
            <div className="ad-meal-details">
              <h3 className='ad-h3'>{meal.name}</h3>
              <p>ID: {meal.id}</p>
              <p>Ingredients: {meal.ingredient}</p>
              <p>Description: {meal.mealDescription}</p>
              <p>Price: {meal.price}</p>
              <p>Status: {meal.status}</p>
            </div>
            <div className="ad-action-buttons">
              <button
                onClick={() => this.handleApprove(meal.id)}
                className="ad-approve-button"
              >
                Approve
              </button>
              <button
                onClick={() => this.handleReject(meal.id)}
                className="ad-reject-button"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AdminMeal;
