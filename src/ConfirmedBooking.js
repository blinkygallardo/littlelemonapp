import './ConfirmedBooking.css';
import React from 'react';

export default function ConfirmedBooking(props) {
    if (!props.info) {
        return (<div>Internal error. Booking info is missing.</div>);
    }

    return (
        <div className='bookingConfirmed'>
            <h1>
                Your booking is now confirmed.
            </h1>
            <p>We can't wait to welcome you on {props.info.date} at {props.info.time}!</p>
        </div>
    );
  }