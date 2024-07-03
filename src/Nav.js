import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
              <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/orderOnline">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
  }
