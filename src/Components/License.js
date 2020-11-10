import React from 'react'
import '../index.css'
const License = props => {
    console.log(props)
    return (
        <div className='license'>
            <img className='license-img' src={props.image} alt='' />
            <h1>{props.name}</h1>
            <p>Street Address: {props.address}</p>
            <p>State: {props.state}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}


export default License