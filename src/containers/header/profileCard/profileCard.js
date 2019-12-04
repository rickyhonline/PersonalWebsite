import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '../headerItems/avatar';
import ProfileDetials from '../headerItems/profileDetails';
import { CardMedia, CardActions} from '@material-ui/core';
import TechPic from '../../../assests/images/technology.jpeg'
import Quote from  '../headerItems/quote'
import NavBar from '../navBar/navBar'



export default function profileCard() {
  const classes = {
    card: {
        height:'350px'
    },
    image: {
        width: '100%',
        height: '200px'
    },
    content: {
        position: 'relative',
        bottom: '120px'
    },
    blockContent: {
        display: 'inline-block'
    },
    quote:{
        display: 'inline-flex',
        float: 'right',
        position: 'relative',
        marginRight: '5%',
        flexDirection: 'column',
        color: 'white'
    },
    nav: {
      display: 'inline-flex',
      float: 'right',
      bottom: '8px',
      position: 'relative',
      left: '15px'
    }
  }

  return (
    <Card  style={classes.card}>
        <CardMedia image= {TechPic} style={classes.image}/>
        <CardContent style={classes.content}>
          <div style={classes.blockContent}>
              <Avatar />
              <ProfileDetials />
          </div>
          <div style={classes.quote}>
              <Quote />
          </div>
          <div style={classes.nav}>
            <NavBar />
          </div>
        </CardContent>
    </Card>
  );
}