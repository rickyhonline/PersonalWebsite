import React from 'react'
import ContactCard from './contactCard'

export default function contactInfo() {
    const style = {
        marginTop: '2%',
        marginRight: '2%',
        marginBottom: '2%'
    }
    return (
        <div style={style}>
            <ContactCard />
        </div>
    )
}
