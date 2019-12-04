import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function Overview() {
    const classes = {
        marginBottom: '2%'
    }
    return (
        <Card style={classes}>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    Personality Overview
                </Typography>
                <Typography variant="body1" component="p">
                    <p> I've always resonated with the quote by Socrates - "The unexamined life is not worth living". 
                        For me, examining life translates into a deep desire to understand myself and the world around me. 
                        Fortunately, it became much easier for me to pursue such desires once I discovered the benefits and 
                        the power that personality frameworks could provide. What these frameworks allowed me to do was to 
                        understand my cognitive functions and processes, my natural tendencies and default modes when processing 
                        and perceiving reality, and I have also begun to understand how and why certain ideas, environments, 
                        people and styles of communication are more appealing and preferred to me than others. The frameworks have 
                        allowed me to apply a vocabulary and a science to things that I previously may have been unconscious of or 
                        at least couldn't explain in technical terms.</p>

                       <p> I enjoy the thrill of understanding, questioning, connecting and experiencing the wonders that life has 
                           to offer. My preferred way of interacting with the world is to take in data and then build a logical system 
                           that aims to find truth and practical wisdom. I thrive the most when I am in an environment that allows me 
                           to pull together seemingly disparate ideas to create new models using logic and reason. I would prefer to dabble 
                           in many subjects and catch a glimpse of reality through each subject’s specific point of view, rather than focus 
                           and master only one subject. I enjoy reflecting and drawing on my repository of knowledge and different perspectives 
                           to form a refined and structured model of how I think things really are. Exploring the endless amounts of ideas and 
                           information in the world is a fascinating pursuit for me, but I also value having a core set of beliefs and ideas - a 
                           structure or foundation- that guides and informs me as I navigate my way through the matrix of information. In this way, 
                           when I learn, I seek to alter and refashion my base model as I gain new insights from incoming data. When discussing perspectives, 
                           I prefer having things laid out logically and rationally in order to be truly objective about concepts. My desire to explore the 
                           enormous menu of available ideas has also allowed me to be extremely flexible and adaptable. I see change, growth and evolution as 
                           unavoidable necessities in life, opposed to living in a static state. Life is change. Life is growth. I endeavor to make the most of 
                           it and be the most I can be. My primary way of doing this is by setting ambitious goals, forming a clear plan of attack, and then executing 
                           daily through consistent effort and routine. I have found that I am exceptional at carrying out my inner aims and constructions. This has 
                           allowed me to cultivate positive habits that engender an action-oriented, productive and effective state.
                        
                    </p>
                </Typography>
            </CardContent>
        </Card>
    )
}
 