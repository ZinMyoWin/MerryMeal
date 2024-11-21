import React, { Component } from 'react';
import './menu.css';
import Service from '../Service';
import Alert from 'react-s-alert';


class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
      meals:[],
      dayNeed:''
    }
  }

  handleDayNeedChange = (event) => {
    this.setState({ dayNeed: event.target.value })
  }

  createCaregiverRequest = () => {
    const caregiverRequest = {
      dayNeed: this.state.dayNeed,
    }

    Service.requestCare(caregiverRequest)
    .then((response) => {
      const responseData = response.data
      const dayNeed = responseData.dayNeed
      Alert.success(`Request has been posted`);
    }).catch((error) => {
      console.error("Error:", error);
      Alert.error("Request failed. Please try again.");
    })
  }

  componentDidMount(){
    Service.viewMeals().then(
      (response)=>{
        console.log(JSON.stringify(response))
        this.setState({
          meals: response.data
        })
      }
    )
  }
  render() {
    return (
      <div className="menu-container">
          <h1>Request Caregiver</h1>
          <label className='meal-label'>Select Day Needed: </label>
          <select className='menu-select' value={this.state.dayNeed} onChange={this.handleDayNeedChange}>
            <option value="">Select a Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <button className='meal-btn' onClick={this.createCaregiverRequest}>Request Caregiver</button>
        <h1>Menu</h1>
        <ul>
          {this.state.meals.map((meal) => (
            <div key={meal.id} className="meal-item">
              <img
                src={`data:image/jpeg;base64, ${meal.mealImg}`}
                alt={meal.name}
              />
              <div className="meal-details">
                <h3>{meal.name}</h3>
                <p>Set: {meal.id}</p>
                <p>Ingredients: {meal.ingredient}</p>
                <p>Description: {meal.mealDescription}</p>
                <p>Price: {meal.price}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu
