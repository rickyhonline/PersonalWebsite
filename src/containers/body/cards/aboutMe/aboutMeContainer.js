import React from 'react'
import AboutMeCard from './aboutMeCard'
export default function aboutMeContainer() {
    const classes = {
        margin: '2%'
    }
    return (
        <div style={classes}>
            <AboutMeCard />
        </div>
    )
}
