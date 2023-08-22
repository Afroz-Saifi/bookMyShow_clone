import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import UserDashboard from './pages/UserDashboard';
import Movies from './components/Movies';
import MovieDescription from './components/MovieDescription';
import BuyTickets from './pages/BuyTickets';
import BuySeats from './pages/BuySeats';
import FoodBeverage from './pages/FoodBeverage';

function App() {
  return (
    <div data-testid="show_vibes">
      {/* All the Routes should be visible here  */}
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="userdashborad" element={<UserDashboard />} />
          <Route path="movieDescription/:id" element={<MovieDescription />} />
          <Route path="buyTickets" element={<BuyTickets />} />
          <Route path='buySeats' element={<BuySeats />} />
          <Route path='foodBeverage' element={<FoodBeverage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
