import BookingForm from "./BookingForm";
import './Booking.css';

export default function Booking(props) {
    return (
        <>
            <h1>Book a table</h1>
            <BookingForm availableTimes={props.availableTimes}  dateChanged={props.dateChanged} submit={props.submit}/>
        </>
    );
  }
