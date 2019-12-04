import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function Strengths() {
    const classes = {
        display:'flex',
        flexDirection: 'column',
        marginBottom: '2%'
        
    }
    return (
        <Card style={classes}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Strengths
                </Typography>
                <Typography variant="body1" component="p">
                    <ul>
                        <li>Eager to learn</li>
                        <li>Success-Oriented</li>
                        <li>Adaptable</li>
                        <li>Quick Thinker</li>
                        <li>Energetic and Charismatic</li>
                        <li>Highly disciplined and motivated</li>
                        <li>Creatively pull together ideas (Brainstorm)</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}
