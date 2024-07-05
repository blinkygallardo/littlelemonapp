import './CallToAction.css';
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
    const nav = useNavigate();
    let onClick = (e) => {
        e.preventDefault();
        nav("/reservation");
    };

    return (
        <div className="callToActionContainer">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
            <button onClick={onClick}>Book a table now!</button>
            <img src="CallToAction.jpg" alt="Four small dishes presented on a chalkboard" />
        </div>
    );
  }