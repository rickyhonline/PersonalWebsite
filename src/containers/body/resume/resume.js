import React from 'react'
import Resume from '../../../documents/R_Hernandez_Resume.pdf'
import Paper from '@material-ui/core/Paper'
export default function resume() {
    const classes = {
        display: 'inline-flex',
        margin: '2%'
    }
    return (
        <Paper style={classes}>
            <a href={Resume} target="_blank">Open Resume</a>
        </Paper>
    )
}
