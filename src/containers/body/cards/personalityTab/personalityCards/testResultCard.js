import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function TestResults() {
    const classes = {
        container : {
            display:'flex',
            flexDirection: 'column',
            marginBottom: '2%'
        },
        text: {
            fontWeight: '450'
        }
        
    }
    return (
        <Card style={classes.container}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Personality Test Results
                </Typography>
                <br></br>
                <Typography color="textPrimary">
                    <span style={classes.text}>Myers-Briggs Type Indicator (MBTI)</span>
                </Typography>
                <Typography color="textPrimary">
                    <li ><a href="https://www.16personalities.com/entp-personality" target="_blank">ENTP: The Debator</a></li>
                </Typography>
                <Typography color="textPrimary">
                    <span style={classes.text}>The Enneagram</span>
                </Typography>
                <Typography color="textPrimary">
                    <li><a href="https://www.enneagraminstitute.com/type-3" target="_blank">Type 3: The Achiever</a></li>
                </Typography>
                <Typography color="textPrimary">
                    <span style={classes.text}>The Four Tendancies</span>
                </Typography>
                <Typography color="textPrimary">
                    <li><a href="https://gretchenrubin.com/2015/01/ta-da-the-launch-of-my-quiz-on-the-four-tendencies-learn-about-yourself/" target="_blank">The Questioner</a></li>
                </Typography>
                
            </CardContent>
        </Card>
    )
}
