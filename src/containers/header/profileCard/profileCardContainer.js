import React from 'react'
import ProfileCard from './profileCard';
import NavBar from '../navBar/navBar'

export default function profileCardContainer() {
    const style = {
        width:'70%',
        marginLeft:'2%',
        marginTop: '2%'
    }
    return (
        <div style={style}>
            <ProfileCard />
        </div>
    )
}
