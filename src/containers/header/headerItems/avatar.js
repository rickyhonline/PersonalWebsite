import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Picture from '../../../assests/images/rickypp.jpg'

const avatar = () => {
    const classes = {
        bigAvatar: {
            margin: '10px 25px',
            width: '150px',
            height: '150px'
      }
    };
    return <Avatar alt="Ricky ProfPic" src={Picture} style={classes.bigAvatar} ></Avatar>
}

export default avatar
