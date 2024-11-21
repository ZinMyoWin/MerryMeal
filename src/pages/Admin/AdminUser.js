import React, { Component } from "react";
import Service from "../Service";
import { toast } from "react-toastify";
import "./adminUser.css";

export class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Service.retrieveUsers().then((response) => {
      this.setState({
        users: response.data,
      });
    });
  }

  handleApprove = (id) => {
    Service.approveUsers(id)
      .then((response) => {
        toast.success("User Approved", response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error Approving User", error);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  handleReject = (id) => {
    Service.rejectUsers(id)
      .then((response) => {
        toast.success("User Rejected", response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error Rejecting User", error);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  render() {
    return (
      <div className='ad-user-container'>
        <h1 className='ad-h1'>Manage Users</h1>
        {this.state.users.map((user) => (
          <div key={user.id} className='ad-user-item'>
            <img
              src={`data:image/jpeg;base64, ${user.evidenceImage}`}
              alt={user.name}
            />
            <div className='ad-user-details'>
              <h3 className='adu-h3'>{user.name}</h3>
              <p>ID: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Latitude: {user.latitude}</p>
              <p>Longitude: {user.longitude}</p>
            </div>
            <div className='ad-action-buttons'>
              <button
                onClick={() => this.handleApprove(user.id)}
                className='ad-approve-button'
              >
                Approve
              </button>
              <button
                onClick={() => this.handleReject(user.id)}
                className='ad-reject-button'
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

export default AdminUser;
