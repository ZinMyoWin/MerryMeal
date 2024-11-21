import React, { Component } from 'react'
import Service from '../Service'
import './profile.css'
export class PartnerDashboard extends Component {
  
    constructor(props){
        super(props)
        this.state={
            partnerInfo:[]
        }
    }
    componentDidMount(){
        Service.viewPartnerProfile().then(
            (response)=>{
                console.log(JSON.stringify(response))
                this.setState({
                   partnerInfo: response.data
                })
            }
        )
    }

  render() {
    const partnerInfo = this.state.partnerInfo;
    return (
        <>
        
      <div className='dashboardForm'>
        <div className='profileInfo'>
           ID: <span>{partnerInfo.partnerId}</span>
        </div><div className='profileInfo'>
            Name: <span>{partnerInfo.partnerName}</span>
        </div><div className='profileInfo'>
            Email: <span>{partnerInfo.partnerEmail}</span>
        </div><div className='profileInfo'>
            Role: <span>{partnerInfo.role}</span>
        </div>
      </div>
      </>
    )
  }
}

export default PartnerDashboard
