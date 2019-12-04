import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import {Call, Email, GroupAdd, Home, LinkedIn, Facebook, Instagram, Twitter} from '@material-ui/icons'

export default function profileCard() {
  const classes = {
    card: {
        width: '300px',
        minHeight:'250px'
    },
    content: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    iconText: {
        position:'relative',
        bottom:'5px',
        marginLeft: '8px'
    },
    iconContainer: {
        display: 'block'
    },
    socialMedia: {
        marginTop: '2%',
        marginBottom: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%'
    }
  }

  const contactInfo = () => {
      return (
          <div style={classes.content}>
              <div style={classes.iconContainer}>
                <Call /> <span style={classes.iconText}>760-421-1563</span>
              </div>
              <div style={classes.iconContainer}>
                <Email /> <span style={classes.iconText}>Rickyhonline@gmail.com</span>
              </div>
              <div style={classes.iconContainer}>
                <Home /> <span style={classes.iconText}>Encinitas, CA</span>
              </div>
          </div>
      )
  }

  const socialMedia = () => {
      return (
          <div style={classes.socialMedia}>
              <a href="https://www.facebook.com/ricky.hernandez.568" target="_blank"><Facebook /></a>
              <a href="https://www.instagram.com/rickyhernandez8/" target="_blank"><Instagram /></a>
              <a href="https://www.linkedin.com/in/ricardo-hernandez-366733107/" target="_blank"><LinkedIn /></a>
              <a href="https://twitter.com/rickyh012" target="_blank"><Twitter /></a>
          </div>
        )
    }

  return (
    <Card  style={classes.card}>
        <CardContent>
            <Typography color="textSecondary" variant="h6"> Contact Details</Typography>
            {contactInfo()}
            <Typography color="textSecondary" variant="h6"> Connect On</Typography>
            {socialMedia()}
        </CardContent>
    </Card>
  );
}