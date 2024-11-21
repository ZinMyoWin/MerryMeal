import React, { Component } from 'react'
import Service from '../Service'
import './profile.css'
export class MemberDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            memberInfo:[]
        }
    }
    
    componentDidMount(){
        Service.viewMemberProfile().then(
            (response)=>{
                console.log(JSON.stringify(response))
                this.setState({
                    memberInfo:response.data
                })
            }
        )

    }
  render() {
    const memberInfo = this.state.memberInfo;
    return (
        <>
        <div className='dashboardForm'>
            <div className='profileInfo'>
                ID: <span>{memberInfo.memberId}</span>
            </div><div className='profileInfo'>
                Name: <span >{memberInfo.memberName}</span>
            </div><div className='profileInfo'>
                Email: <span>{memberInfo.memberEmail}</span>
            </div><div className='profileInfo'>
                Role:<span> {memberInfo.role}</span>
            </div><div className='profileInfo'>
                Order History: <span>{memberInfo.orderHistory}</span>
            </div><div className='profileInfo'>
                Caregiver Request History: <span>{memberInfo.caregiveRequestHistory}</span>
            </div>
        </div>
    </>
    )
  }
}

export default MemberDashboard
