import React, { Component } from 'react'
import Service from '../Service'
import { toast } from "react-toastify";

class RetrieveOrder extends Component {

    constructor(props){
        super(props)
        this.state = {
          deliveringOrd:[],
          pendingOrd:[]
        }
      }

    componentDidMount(){
    Service.retrieveSpecificOrder().then(
      (response) => {
        console.log(JSON.stringify(response))
        this.setState({
          deliveringOrd: response.data
        })
      }
    )

    Service.retrieveOrders().then(
      (response) => {
        console.log(JSON.stringify(response))
        this.setState({
          pendingOrd: response.data
        })
      }
    )
  }

  takeOrder = (orderId) => {
    Service.takeOrder(orderId)
    .then((response) => {
      toast.success('You have successfully took the Order')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      toast.error('Error taking Order')
    })
  }

  finishOrder = (orderId) => {
    Service.finishOrder(orderId)
    .then((response) => {
      toast.success('Order Delivered')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      toast.error('Error Delivering Order')
    })
  }


  render() {
    const { deliveringOrd } = this.state
    const { pendingOrd } = this.state
    return (
        <div className='care-container'>
        <div className='take-container'>
          <h1>Your Taken Order</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Day</th>
                <th>Meal Type</th>
                <th>Status</th>
                <th>Member ID</th>
                <th>Meal ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveringOrd.map((deliveringOrds) => (
                <tr key={deliveringOrds.id}>
                  <td>{deliveringOrds.id}</td>
                  <td>{deliveringOrds.day}</td>
                  <td>{deliveringOrds.mealType}</td>
                  <td>{deliveringOrds.status}</td>
                  <td>{deliveringOrds.memberId}</td>
                  <td>{deliveringOrds.mealId}</td>
                  <td>
                    {deliveringOrds.status !== 'Delivered'?(
                      <button className='care-btn' onClick={() => this.finishOrder(deliveringOrds.id)}>
                      Finish Order
                    </button>
                    ):(<>
                    Delivered
                    </>)}
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='fin-container'>
          <h1>Available Orders</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Day</th>
                <th>Meal Type</th>
                <th>Status</th>
                <th>Member ID</th>
                <th>Meal ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrd.map((pendingOrds) => (
                <tr key={pendingOrds.id}>
                  <td>{pendingOrds.id}</td>
                  <td>{pendingOrds.day}</td>
                  <td>{pendingOrds.mealType}</td>
                  <td>{pendingOrds.status}</td>
                  <td>{pendingOrds.memberId}</td>
                  <td>{pendingOrds.mealId}</td>
                  <td>
                    <button className='care-btn' onClick={() => this.takeOrder(pendingOrds.id)}>
                      Take Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default RetrieveOrder