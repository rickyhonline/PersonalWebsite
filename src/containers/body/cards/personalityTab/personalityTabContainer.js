import React from 'react'
import OverViewCard from  './personalityCards/introductionCard'
import StrengthsCard from  './personalityCards/strengthsCard'
import TestResultsCard from  './personalityCards/testResultCard'
import WorkPreferenceCard from  './personalityCards/workPreferencesCard'
import { WrapText } from '@material-ui/icons';


export default function PersonlityTabContainer() {
    const classes = {
        container : {
            margin: '2%'
        },
        flexBox:{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom:'2%'
        }
    }
    return (
        <div style={classes.container}>
            <OverViewCard />
            <div style={classes.flexBox}>
                <TestResultsCard />
                <StrengthsCard />
                <WorkPreferenceCard />
            </div>
        </div>
    )
}
