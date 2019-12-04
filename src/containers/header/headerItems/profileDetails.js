import React from 'react'

export default function profileDetails() {
    const style = {
        name: {
            margin:' 0 0 0 25px',
            padding:'0px',
            fontSize: '18px',
            fontWeight: '400'
        },
        title: {
            margin:' 0 0 0 25px',
            padding:'0px',
            fontSize: '14px'
        }
    }
    return (
        <div>
            <span style={style.name}>Ricardo Hernandez</span>
            <div style={{marginBottom:'5px'}}></div>
            <p style={style.title}>Software Developer</p>
            {/* <div style={style.details}>
            <br></br>
            <h5 style={style.headers}> Contact Information</h5>
            <span>Phone: 760-421-1563</span>
            <span style={style.details}>Email: <span>Rickyhonline@gmail.com</span></span>
            <span style={style.details}>Adress: <span>3305 Poppy Hills Lane, Encintias CA</span></span>
            </div> */}
        </div>
    )
}
