import BookingForm from "./BookingForm";

export default function Booking(props) {
    return (
        <div>
            <h1>Book a table</h1>
            <BookingForm availableTimes={props.availableTimes}  dateChanged={props.dateChanged} submit={props.submit}/>
        </div>
    );
  }
