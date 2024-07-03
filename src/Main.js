import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Reservation from "./Reservation";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/reservation" element={<Reservation />}></Route>
                <Route path="/orderOnline" element={<OrderOnline/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<p>This page doesn't exist</p>}></Route>
            </Routes>
        </main>
    );
  }
