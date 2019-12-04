import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip'

export default function HobbiesCard() {
    const classes = {
        chips :{
            margin: '1%'
        },
        content : {
            dispay: 'flex',
            maxWidth: '500px',
            marginTop: '2%',
            marginRight: '2%',
            marginBottom: '2%'

        }
    }
    
    

    const hobbies = ['exercise', 'nutrition', 'reading', 'coffee', 'writing', 'yoga','guitar', 'mediation',
                'programming', 'piano', 'deep reflections', 'science', 'learning', 'building/creating', 'playing sports',
            'personality tests', 'the flow state', 'music', 'awe-filled experiences', 'new and future technologies',
            'informative movies or tv shows', 'engineering']
        

    return (
        <Card style={classes.content}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Hobbies and Interests
                </Typography>
                <br></br>
                <Typography variant="body1" component="p">
                {hobbies.map(label =>{
                    return <Chip label={label} color="primary" style={classes.chips} />
                })
                }
                </Typography>
            </CardContent>
        </Card>
    )
}
