import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

export default function aboutMeCard() {

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" variant="h6">
                    About Me
                </Typography>
                <Typography variant="body1" component="p">
                    <p>Hi, my name is Ricky and I'm 22 years old. I am a recent graduate of Texas Christian University where I 
                        studied mechanical engineering. Undertaking an engineering disciple allowed me to explore my interests 
                        in the fields of math and science and develop my technical and analytical thinking skills. While pursuing 
                        my undergraduate degree, I began to develop a keen interest in computer programming and software development 
                        and assumed those responsibilities as part of my senior project. Upon graduation, I seized an opportunity to 
                        spend 3 months in Bangalore, India working with an oversees software development team. The company’s SaaS 
                        product was in the late stages of development and they brought me on to work with both frontend and backend 
                        web frameworks in a fast-paced and challenging environment. With no previous familiarity with the frontend and 
                        backend frameworks they were using, I eagerly accepted the challenge and the opportunity to learn on the go.</p>
                    <p>After months of programming with the team I am extremely pleased with the skills and knowledge that I have acquired 
                        during my time there. I have learned that it's all about seeing struggle and failure as a catalyst for growth. 
                        It's about undertaking challenges with the intention of testing and pushing your limits so you can excel and grow. 
                        It's about being calm in the face of stress and being increasingly persistent when things seem to be going against you. 
                        The mantra was: Don’t give up, take a breather, come at it from a different angle, or a different point of view. Indeed, 
                        many of the lessons I have learned during my months of programming and struggle have practical applications in everyday life. </p>
                    <p>I am a strong believer that you need to assimilate into an environment, implement new ideas, new goals, new teachings and new 
                        interests consistently and willfully in order to fully experience and grasp the depth of them. After college graduation, I knew 
                        it was time take on a challenge, throw myself into a completely new environment, and test my ability to overcome diversity. My 
                        objective was only partially satisfied during my time in India, because I am just getting started on my journey of facing challenges 
                        and failure - ultimately in search of knowledge and growth. I am beginning to see it as a very circular process than never ends if 
                        there is persistence, motivation and passion. I am constantly searching for new experiences and environments that will allow me to 
                        push myself to reach my fullest potential and be of maximum service to others. I am a multi-passionate individual with a variety of 
                        different interests and hobbies, and I hope that you can catch a glimpse of that while exploring my web page!</p>
                </Typography>
            </CardContent>
        </Card>
    )
}
