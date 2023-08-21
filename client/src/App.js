import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import UserDashboard from './pages/UserDashboard';
import Movies from './components/Movies';
import MovieDescription from './components/MovieDescription';
import BuyTickets from './pages/BuyTickets';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
