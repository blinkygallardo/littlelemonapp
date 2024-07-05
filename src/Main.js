import { fetchAPI, submitAPI } from './CourseraScript';
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Main() {
    let [currentDate, setCurrentDate] = useState(new Date());
    let [currentTimes, setCurrentTimes] = useState([]);
    useEffect(() => {
        let newTimes = fetchAPI(currentDate);
        console.log(currentDate);
        console.log(newTimes);
        setCurrentTimes(newTimes);
    }, [currentDate]);

    let onDateChanged = (date) => {
        setCurrentDate(date);
        return currentTimes;
    };

    //let [availableTimes, dispatch] = useReducer(updateTimes, currentTimes);
    //coursera says to use useReducer but it is not possible as the reducer function has to be pure and we can't have this if we fetch data via an API

    let [dataToSend, setDataToSend] = useState(undefined);
    let onSubmit = data => setDataToSend(data);
    const nav = useNavigate();
    useEffect(() => {
        if (!dataToSend) {
            return;
        }
        let result = submitAPI(dataToSend);
        if (result) {
            nav("/reservationOk");
        }
    }, [dataToSend]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/reservation" element={<Booking availableTimes={currentTimes} dateChanged={onDateChanged} submit={onSubmit}/>}></Route>
                <Route path="/reservationOk" element={<ConfirmedBooking info={dataToSend}/>}></Route>
                <Route path="/orderOnline" element={<OrderOnline/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<p>This page doesn't exist</p>}></Route>
            </Routes>
        </main>
    );
  }
