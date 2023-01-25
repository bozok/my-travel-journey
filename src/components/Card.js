import React from "react";
import googlePin from '../images/googlepin.png'

function Card(props) {
    return (
        <div className="card">
            <div className="card--left">
                <img src={props.imageUrl} className='card--left--image' alt='katie' />
            </div>
            <div className="card--right">
                <div className="card--right--top">
                    <img src={googlePin} alt='google pin' className="card--pin" />
                    <h1 className="card--country">{props.country}</h1>
                    <a href={props.mapLink} target='_blank' rel="noreferrer" className="card--maplink">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--dates">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card