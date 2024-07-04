import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Reservation from "./Reservation";
import { Routes, Route } from "react-router-dom";
import { useReducer } from 'react';



export default function Main() {
    let initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    let updateTimes = (times, date) => { 
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };
    let [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/reservation" element={<Reservation availableTimes={availableTimes} dateChanged={dispatch}/>}></Route>
                <Route path="/orderOnline" element={<OrderOnline/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<p>This page doesn't exist</p>}></Route>
            </Routes>
        </main>
    );
  }
