import React, { Component } from 'react'
import Service from '../Service'
import './profile.css'
export class VolunteerDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            volunteerInfo: []
        }
    }
    componentDidMount() {
        Service.viewVolunteerProfile().then(
            (response) => {
                console.log(JSON.stringify(response))
                this.setState({
                    volunteerInfo: response.data
                })
            }
        )
    }
    render() {
        const volunteerInfo = this.state.volunteerInfo;
        return (
            <>

                <div className='dashboardForm'>
                    <div className='profileInfo'>
                        ID: <span>{volunteerInfo.volunteerId}</span>
                    </div><div className='profileInfo'>
                        Name: <span>{volunteerInfo.volunteerName}</span>
                    </div><div className='profileInfo'>
                        Email: <span>{volunteerInfo.volunteerEmail}</span>
                    </div><div className='profileInfo'>
                        Role: <span>{volunteerInfo.role}</span>
                    </div><div className='profileInfo'>
                        Number of Delivery Finished: <span>{volunteerInfo.order}</span>
                    </div><div className='profileInfo'>
                        Number of Caregiver Service Given: <span>{volunteerInfo.requestCaregiver}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default VolunteerDashboard
