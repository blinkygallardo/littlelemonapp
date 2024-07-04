import './ReservationForm.css';
import { useState } from 'react';

export default function ReservationForm(props) {
    //console.log(props);

    let today = new Date().toISOString().slice(0, 10);
    let [booking, setBooking] = useState({
        date :  today,
        time : "19:00",
        number : 2,
        occasion : "None"
    });
    let onSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
    };

    let onDateChanged = (e) => {
        setBooking({ ...booking, date : e.target.value});
        props.dateChanged(booking.date);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={booking.date} onChange={onDateChanged}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={booking.time} onChange={e => setBooking({ ...booking, time : e.target.value})}>
                {props.availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={booking.number} onChange={e => setBooking({ ...booking, number : e.target.value})}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={booking.occasion} onChange={e => setBooking({ ...booking, occasion : e.target.value})}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            <button type="submit">Make Your reservation</button>
        </form>
    );
  }
