import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const getDateAtIndex = (index) => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + index);
    return futureDate;
  };
  
  const DateBox = ({ date }) => (
    <Paper elevation={4} style={{ padding: '4px', textAlign: 'center', cursor: 'pointer', height: '65px', width: "50px", wordSpacing: 0, lineHeight: "1px"}}>
      <p style={{fontSize: "12px"}}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
      <p style={{fontWeight: "bold"}}>{date.getDate()}</p>
      <p style={{fontSize: "12px"}}>{date.toLocaleDateString('en-US', { month: 'short' })}</p>
    </Paper>
  );

const BuyTickets = () => {
    const langFormatData = JSON.parse(localStorage.getItem("langFormat"));
    const { language, format } = langFormatData || {}; // Provide default values for destructuring
    const today = new Date();
  const dates = [today, getDateAtIndex(1), getDateAtIndex(2), getDateAtIndex(3)];

  return (
    <Box display="flex" justifyContent="space-between" padding="10px" sx={{width: 250}}>
      {dates.map((date, index) => (
        <DateBox key={index} date={date} />
      ))}
    </Box>
  );
}

export default BuyTickets;
