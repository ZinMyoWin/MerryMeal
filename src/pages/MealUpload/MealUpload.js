import React, { Component } from "react";
import Service from "../Service";
import "./mealUpload.css";
import { toast } from "react-toastify";

class MealUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mealDescription: "",
      ingredient: "",
      mealImg: null,
      price: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (event) => {
    this.setState({ mealImg: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("mealDescription", this.state.mealDescription);
    formData.append("ingredient", this.state.ingredient);
    formData.append("mealImg", this.state.mealImg);
    formData.append("price", this.state.price);

    console.log(formData.get("name"));
    console.log(formData.get("mealDescription"));
    console.log(formData.get("ingredient"));
    console.log(formData.get("mealImg"));
    console.log(formData.get("price"));

    Service.addMeal(formData)
      .then((response) => {
        toast.success("Successful");
      })
      .catch((error) => {
        console.error("error:", error);
        toast.error("Fail");
      });
  };

  render() {
    return (
      <div className='mu-container'>
        <h1>Meal Upload</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label className='mu-label' htmlFor='name'>
              Name:
            </label>
            <input
              className='mu-input'
              type='text'
              name='name'
              id='name'
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='mu-label' htmlFor='mealDescription'>
              Description:
            </label>
            <input
              className='mu-input'
              type='text'
              name='mealDescription'
              id='mealDescription'
              value={this.state.mealDescription}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='mu-label' htmlFor='ingredient'>
              Ingredients:
            </label>
            <input
              className='mu-input'
              type='text'
              name='ingredient'
              id='ingredient'
              value={this.state.ingredient}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='mu-label' htmlFor='image'>
              Meal Image:
            </label>
            <input
              className='mu-input'
              type='file'
              name='image'
              id='image'
              onChange={this.handleImageChange}
              accept='image/*'
            />
          </div>
          <div className='form-group'>
            <label className='mu-label' htmlFor='price'>
              Price:
            </label>
            <input
              className='mu-input'
              type='number'
              name='price'
              id='price'
              value={this.state.price}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button className='mu-btn' type='submit'>
            Upload Meal
          </button>
        </form>
      </div>
    );
  }
}

export default MealUpload;
