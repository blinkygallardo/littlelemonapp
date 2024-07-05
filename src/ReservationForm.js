import './ReservationForm.css';
import { useState } from 'react';

export default function ReservationForm(props) {
    let today = new Date().toISOString().slice(0, 10);
    let [booking, setBooking] = useState({
        date :  today,
        time : "19:00",
        number : 2,
        occasion : "None",
        phone : undefined,
        phoneTouched : false,
    });
    let onSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        props.submit(booking);
    };

    let onDateChanged = (e) => {
        setBooking({ ...booking, date : e.target.value});
        props.dateChanged(e.target.valueAsDate);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={booking.date} onChange={onDateChanged} min={today}/>
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
            <label htmlFor="res-phone">Phone number *</label>
            <input type="text" id="res-phone" value={booking.phone} 
                onChange={e => setBooking({ ...booking, phone : e.target.value})} 
                onBlur={e => setBooking({ ...booking, phoneTouched : true})} 
                required/>
            {!booking.phone && booking.phoneTouched ? <div className='error'>Please add your mobile number so we can contact you.</div> : null}
            <button type="submit" disabled={!booking.phone}>Make Your reservation</button>
        </form>
    );
  }
