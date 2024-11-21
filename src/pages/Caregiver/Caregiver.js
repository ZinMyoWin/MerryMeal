import React, { Component } from 'react'
import Service from '../Service'
import { toast } from "react-toastify";
import './caregiver.css'

class Caregiver extends Component {

  constructor(props){
    super(props)
    this.state = {
      takenReq:[],
      pendingReq:[]
    }
  }

  componentDidMount(){
    Service.retrieveTakenReq().then(
      (response) => {
        console.log(JSON.stringify(response))
        this.setState({
          takenReq: response.data
        })
      }
    )

    Service.retrievePendingReq().then(
      (response) => {
        console.log(JSON.stringify(response))
        this.setState({
          pendingReq: response.data
        })
      }
    )
  }

  takeCareRequest = (request_id) => {
    Service.takeCareRequest(request_id)
    .then((response) => {
      toast.success('You have successfully took the request')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      toast.error('Error taking Request')
    })
  }

  finishCareRequest = (request_id) =>{
    Service.finishCareRequest(request_id)
    .then((response) => {
      toast.success('Care Request Finished')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      toast.error('Error Request')
    })
  }

  render() {
    const{ takenReq } = this.state
    const { pendingReq } = this.state
    return (
      <div className='care-container'>
        <div className='take-container'>
          <h1>Your Taken Request</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Day</th>
                <th>Status</th>
                <th>Member ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {takenReq.map((takenReqs) => (
                <tr key={takenReqs.id}>
                  <td>{takenReqs.id}</td>
                  <td>{takenReqs.dayNeed}</td>
                  <td>{takenReqs.status}</td>
                  <td>{takenReqs.memberId}</td>
                  <td>
                    {
                      takenReqs.status !== 'Finished'?(
<button className='care-btn' onClick={() => this.finishCareRequest(takenReqs.id)}>
                      Finish Care Request
                    </button>
                      ):(
                        <>
                        {takenReqs.status}
                        </>
                      )
                    }
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='fin-container'>
          <h1>Available Requests</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Day</th>
                <th>Status</th>
                <th>Member ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingReq.map((pendingReqs) => (
                <tr key={pendingReqs.id}>
                  <td>{pendingReqs.id}</td>
                  <td>{pendingReqs.dayNeed}</td>
                  <td>{pendingReqs.status}</td>
                  <td>{pendingReqs.memberId}</td>
                  <td>
                    <button className='care-btn' onClick={() => this.takeCareRequest(pendingReqs.id)}>
                      Take Care Request
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

export default Caregiver