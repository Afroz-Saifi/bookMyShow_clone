import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from "axios";
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import SeatSelectorPopup from "../components/SeatSelectorPopup";
import { Alert, CircularProgress } from "@mui/material";

const getDateAtIndex = (index) => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + index);
    return futureDate;
  };
  
  const DateBox = ({ date, selected, onClick }) => {
    const handleDateClick = () => {
        console.log(date.toDateString());
      };
    return (
       <Paper elevation={4} style={{ padding: '4px', textAlign: 'center', cursor: 'pointer', height: '65px', width: "50px", wordSpacing: 0, lineHeight: "1px", backgroundColor: selected ? '#282c34' : 'white', color: selected ? 'white' : '#282c34',}} onClick={onClick}>
      <p style={{fontSize: "12px"}}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
      <p style={{fontWeight: "bold"}}>{date.getDate()}</p>
      <p style={{fontSize: "12px"}}>{date.toLocaleDateString('en-US', { month: 'short' })}</p>
    </Paper> 
    )
    }


const BuyTickets = () => {
  const userData = JSON.parse(localStorage.getItem("loggedUser")) || '';
  const config = {
    headers: {
      'Authorization': `Bearer ${userData.token}`
    }
  };
    const langFormatData = JSON.parse(localStorage.getItem("langFormat"));
    const { language, format } = langFormatData || {}; 
    const [selectedCinemaId, setSelectedCinemaId] = useState(null)
    const today = new Date();
    const currentTime = new Date();
    const scheduleTimes = [
        "11:00 AM", "1:45 PM", "2:00 PM", "5:30 PM", "8:25 PM", "11:00 PM", "11:45 PM"
      ];
      const dates = [today, getDateAtIndex(1), getDateAtIndex(2), getDateAtIndex(3)];
      const [selectedBox, setSelectedBox] = useState(0);
      const [selectedDate, setSelectedDate] = useState(dates[0].toDateString())
      const previousDate = dates[0].toDateString()
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [cinemaData, setCinemaData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [normalPrice, setNormalPrice] = useState(null);
  const [vipPrice, setVipPrice] = useState(null);
  const [executivePrice, setExecutivePrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const baseUrl = "http://localhost:8000/cinema"
  const baseUrl = "https://showvibes.onrender.com/cinema"

  const handleDateClick = (index) => {
    if (selectedBox === index) {
      setSelectedBox(null); // Deselect if already selected
    } else {
      setSelectedBox(index);
      setSelectedDate(dates[index].toDateString());
      console.log(dates[index].toDateString());
    }
  };

  const fetchCinemas = async () => {
    try {
        const response = await axios(`${baseUrl}/cinemas`, config)
        if(response.data.success){
            setCinemaData(response.data.data)
        }
    } catch (error) {
        console.log(error.message);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCinemas()
  }, [])

  function compareTime(inputTime) {
    const currentTime = new Date();
    const [inputHours, inputMinutes] = inputTime.split(':');
    const inputDateTime = new Date();
    inputDateTime.setHours(
      parseInt(inputHours) + (inputTime.includes('PM') && inputHours !== '12' ? 12 : 0),
      parseInt(inputMinutes),
      0
    );
  
    if (inputDateTime < currentTime) {
      return true;
    } else {
      return false;
    }
  }

  const handleTimeClick = (time, normal, vip, executive, _id) => {
    setSelectedSlot(time);
    setNormalPrice(normal)
    setVipPrice(vip)
    setExecutivePrice(executive)
    setPopupOpen(true)
    setSelectedCinemaId(_id)
  };

  const handlePopupClose = () => {
    // Close the popup
    setPopupOpen(false);
  };

  const handleSelectSeats = (numSeats) => {
    // Save the selected number of seats in state
    setSelectedSeats(numSeats);
  };

  return (
    <>
    {
      isLoading ? (
        // Display loader while loading
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </div>
      ) :
      <>
      {
        userData ? <div>
      <Box display="flex" justifyContent="space-between" padding="10px" sx={{width: 250}}>
        {dates.map((date, index) => (
          <DateBox
          key={index}
          date={date}
          selected={selectedBox === index}
          onClick={() => handleDateClick(index)}
        />
        ))}
      </Box>
      <div className="cinema_container">
          {
              cinemaData.map(({name, Normal, Executive, VIP, _id}) => <div key={_id}>
                  <div className="left_cinema">
                      <p>{name}</p>
                      <div>
                          <div><SendToMobileIcon sx={{color: "#49ba8e"}} /> <span style={{color: "#49ba8e"}}>M-Ticket</span></div>
                      <div style={{marginLeft: "14px"}}><FastfoodIcon sx={{color: "orange"}} /> <span style={{color: "orange"}}>Food & Beverage</span> </div>
                      </div>
                      
                  </div>
                  <div className="info_cinema">
                      <InfoOutlinedIcon /> <span>INFO</span> 
                  </div>
                  <div className="right_cinema">
                  <div>
        {scheduleTimes.map(time => {        
          const isTimePassed = (selectedDate==dates[0].toDateString() && compareTime(time))
  
          return (
              <>
              <Button
              key={time}
              variant="outlined"
              disabled={isTimePassed}
              className="timing_button"
              onClick={() => !isTimePassed && handleTimeClick(time, Normal.price, VIP.price, Executive.price, _id)}
              style={{ margin: '10px', borderColor: '#49ba8e', color: isTimePassed ? "#fff" : "#49ba8e", backgroundColor: isTimePassed ? "#4142436d" : null }}
            >
              {time}
            </Button> 
            <SeatSelectorPopup
          open={popupOpen}
          onClose={handlePopupClose}
          onSelectSeats={handleSelectSeats}
          normalPrice={normalPrice}
          vipPrice={vipPrice}
          executivePrice={executivePrice}
          _id={selectedCinemaId}
          selectedDate={selectedDate}
          selectedTime={selectedSlot}
          cinemaName={cinemaData.name}
        />
            </>
                           
            );
          })}
      </div>
          <span style={{color: "orange", fontSize: "30px"}}>•&nbsp;<span style={{fontSize: "14px", color: "#32343b8c"}}>Non-cancellable</span></span>  
                  </div>
              </div>)
          }
      </div>
      </div> : <Alert severity="error">Please Login !</Alert>
      }
      </>
    }
    </>
  );
}

export default BuyTickets;
