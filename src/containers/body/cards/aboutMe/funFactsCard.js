import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function FunFacts() {
    const classes = {
        content : {
            dispay: 'flex',
            maxWidth: '700px',
            marginTop: '2%',
            marginRight: '2%',
            marginBottom: '2%'
        }
    }
    return (
        <Card style={classes.content}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Some (Fun) Facts
                </Typography>
                <Typography variant="body1" component="p">
                    <ul>
                        <li>I have a brother that is 2 years younger than I am.</li>
                        <li>I spent 3 months living in Banaglore, India after college.</li>
                        <li>I have never broken a bone (knock on wood).</li>
                        <li>I dont enjoy watching sports, but I will happily participate in  playing any of them.</li>
                        <li>I'm not big on wasting time with social media.</li>
                        <li>I have had birds, fish, turtles and lizards as pets- not a dog(yet) or a cat .</li>
                        <li>I love deep, meaningful conversation.</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}
