import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <div data-testid="show_vibes">
      {/* All the Routes should be visible here  */}
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="userdashborad" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
