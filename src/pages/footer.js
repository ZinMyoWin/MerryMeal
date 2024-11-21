import React, { Component } from 'react'
import './footer.css'

export class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-container">
          <p>&copy; {new Date().getFullYear()} MerryMeal. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
}

export default footer