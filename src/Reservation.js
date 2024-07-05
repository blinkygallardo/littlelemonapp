import ReservationForm from "./ReservationForm";

export default function Reservation(props) {
    return (
        <div>
            <h1>Book a table</h1>
            <ReservationForm availableTimes={props.availableTimes}  dateChanged={props.dateChanged} submit={props.submit}/>
        </div>
    );
  }
