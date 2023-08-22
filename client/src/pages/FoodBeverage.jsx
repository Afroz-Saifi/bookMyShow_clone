import React from "react";
import { useLocation } from 'react-router-dom';

const FoodBeverage = () => {
    const location = useLocation();
    const { _id, showName, tickets, selectedDate, selectedTime, payment, seatIN } = location.state;
    const movieData = JSON.parse(localStorage.getItem('bookMovie'));
    const movieName = movieData.title
    console.log(_id, showName, tickets, selectedDate, selectedTime, payment, seatIN, movieName);
    return (
        <h1>lelo lelo coldrink popcorn lelo</h1>
    )
}

export default FoodBeverage;