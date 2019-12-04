import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function WorkPreferences() {
    const classes = {
        display:'flex',
        flexDirection: 'column',
        marginBottom: '2%'
        
        
    }
    return (
        <Card style={classes}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Workplace Preferences
                </Typography>
                <Typography variant="body1" component="p">
                    <ul>
                        <li>An environment to creatively explore new ideas, methods and approaches</li>
                        <li>An environment that sparks intellecutal curiosity</li>
                        <li>High value on rational and logical thought and systems</li>
                        <li>Enjoy spontaneity over routine</li>
                        <li>Open to changing and fast-paced settings</li>
                        <li>Prefer flexible schedules, with trust that tasks will be completed</li>
                        <li>Effective working in team evironments or as an individual contributer</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}
