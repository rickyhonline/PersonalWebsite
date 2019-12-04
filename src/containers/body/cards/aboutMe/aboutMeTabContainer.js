import React from 'react'
import AboutMeCard from './aboutMeCard'
import HobbiesCard from './hobbiesCard'
import FunFactsCard from './funFactsCard'

export default function aboutMeContainer() {
    const classes = {
        content : {
            margin: '2%'
        },
        flexBox: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    return (
        <div style={classes.content}>
            <AboutMeCard />
            <div style={classes.flexBox}>
                <HobbiesCard />
                <FunFactsCard />
            </div>
        </div>
    )
}
