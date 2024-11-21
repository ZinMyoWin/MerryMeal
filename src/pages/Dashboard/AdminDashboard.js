import React, { Component } from 'react'
import Service from '../Service'
import './profile.css'
export class AdminDashboard extends Component {

    constructor(props){
        super(props)
        this.state={
            adminInfo:[]
        }
    }
    componentDidMount(){
        Service.viewAdminProfile().then(
            (response)=>{
                console.log(JSON.stringify(response))
                this.setState({
                    adminInfo: response.data
                })
            }
        )
    }

  render() {
    const adminInfo = this.state.adminInfo;
    return (
        <>
        
      <div className='dashboardForm'>
        <div className='profileInfo'>
           ID: <span>{adminInfo.adminId}</span>
        </div><div className='profileInfo'>
            Name: <span>{adminInfo.adminName}</span>
        </div><div className='profileInfo'>
            Email: <span>{adminInfo.adminEmail}</span>
        </div><div className='profileInfo'>
            Role: <span>{adminInfo.role}</span>
        </div>
      </div>
      </>
    )
  }
}

export default AdminDashboard
