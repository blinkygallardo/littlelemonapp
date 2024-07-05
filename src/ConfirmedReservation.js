export default function ConfirmedReservation(props) {
    if (!props.info) {
        return (<div>Internal error. Booking info is missing.</div>);
    }

    return (
        <div>
            Your booking is now confirmed. See you on {props.info.date} at {props.info.time}!
        </div>
    );
  }