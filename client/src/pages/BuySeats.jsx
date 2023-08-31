import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import screen from '../images/screen.png'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress, Alert } from "@mui/material";

const BuySeats = () => {
    const location = useLocation();
  const { _id, selectedSeats, selectedDate, selectedTime, cinemaName } = location.state;
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("loggedUser")) || '';
  const [openDialog, setOpenDialog] = useState(false);
  const [showName, setShowName] = useState('');
    const langFormatData = JSON.parse(localStorage.getItem("langFormat"));
    const { language, format } = langFormatData || {}; // Provide default values for destructuring  const dates = [today, getDateAtIndex(1), getDateAtIndex(2), getDateAtIndex(3)];
    const moviData = JSON.parse(localStorage.getItem("bookMovie")) || '';
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [cinemaData, setCinemaData] = useState(null);
  const [payButton, setPaybutton] = useState(false);
  const [payment, setPayment] = useState(null)
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true);
//   const baseUrl = "http://localhost:8000"
  const baseUrl = "https://showvibes.onrender.com"

  const fetchCinema = async () => {
    try {
        const response = await axios(`${baseUrl}/cinema/cinema/${_id}`)
        if(response.data.success){
            setCinemaData(response.data.data)
            setShowName(response.data.data.name)
        }
    } catch (error) {
        console.log(error.message);
    }
  }

  console.log(selectedDate);

  const fetchBookings = async () => {
    try {
        const response = await axios.post(`${baseUrl}/bookings/getCinemaBookings`, {
            PvrId: _id,
            date: selectedDate, 
            time: selectedTime,
            movieId: moviData._id
        })
        if(response.data.success){
            // console.log(response.data);
            const flattenedArray  = [].concat(...response.data.data[0].seats)
            setBookings(flattenedArray)
        }
    } catch (error) {
        console.log(error.message);
    }
    finally{
        setIsLoading(false);
      }
  }

  useEffect(() => {
    fetchCinema()
    fetchBookings()
  }, [])


const handleSeatSelector = (seatNo, row, quality) => {
    const selectedRow = cinemaData[`${quality}`].format.find(ele => ele[0] === row);
    const selectedIndex = selectedRow.indexOf(seatNo);
    let selectedSeatsInRow = [];
    if (selectedSeat.length === selectedSeats){
        selectedSeatsInRow = selectedRow.slice(
            selectedIndex,
            selectedIndex + selectedSeats
        );
    }else{
        selectedSeatsInRow = selectedRow.slice(
            selectedIndex,
            selectedIndex + (selectedSeats - selectedSeat.length)
        );
    }
    // console.log(selectedSeatsInRow);
    let filteredRows = [];
    for (let i = 0; i < selectedSeatsInRow.length; i++) {
        if (selectedSeatsInRow[i] === "#" || bookings.includes(`${row}${selectedSeatsInRow[i]}`)) {
            break;
        } else {
            filteredRows.push(selectedSeatsInRow[i])
        }
    }

    let prevouseSeats = [...selectedSeat]

    if(selectedSeat.length==selectedSeats){
        setSelectedSeat(filteredRows.map(s => `${row}${s}`))
        filteredRows.length == selectedSeats ? setPaybutton(true) : setPaybutton(false);
    }else{
        setSelectedSeat(prevSelectedSeats => [...prevSelectedSeats, ...filteredRows.map(s => `${row}${s}`)]);
        if ((prevouseSeats.length+filteredRows.length) === selectedSeats) {
            setPaybutton(true);
        } 
    }
    setPayment(selectedSeats * (quality === "VIP" ? cinemaData.VIP.price : quality === "Executive" ? cinemaData.Executive.price : cinemaData.Normal.price));
};




console.log("hook: ", selectedSeat);

  const handleSeatsBooking = () => {
    navigate("/FoodBeverage", {
        state: { _id, tickets: selectedSeats, selectedDate, selectedTime, payment, seatIN: selectedSeat, showName, cinemaName}
      })
  }

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
        userData ? <div className="cinema_seats_container">
        {
            cinemaData ? 
            <div>
                <p style={{color: "#999", fontSize: "12px", marginBottom: "10px", borderBottom: "1px solid #ececec"}}>VIP-Rs. {cinemaData.VIP.price}.00</p>
                <table className="seat_format" cellSpacing={"7px"}>
        <tbody>
            {
            cinemaData.VIP.format.map(ele => {
                return (
                    <tr>
                    {ele.map((seats, index) => {
                        if(index==0){
                            return (<td style={{color: "#282c34"}}>{seats}</td>)
                        }
                        const isSelected = selectedSeat.includes(`${ele[0]}${seats}`);
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> : bookings.includes(`${ele[0]}${seats}`) ? <td className="already_booked">{seats}</td> : <td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "VIP")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    <p style={{color: "#999", fontSize: "12px", marginBottom: "10px", borderBottom: "1px solid #ececec"}}>EXECUTIVE-Rs. {cinemaData.Executive.price}.00</p>
                <table className="seat_format" cellSpacing={"7px"}>
        <tbody>
            {
            cinemaData.Executive.format.map(ele => {
                return (
                    <tr>
                    {ele.map((seats, index) => {
                        if(index==0){
                            return (<td style={{color: "#282c34"}}>{seats}</td>)
                        }
                        const isSelected = selectedSeat.includes(`${ele[0]}${seats}`);
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> : bookings.includes(`${ele[0]}${seats}`) ? <td className="already_booked">{seats}</td> : <td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "Executive")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    <p style={{color: "#999", fontSize: "12px", marginBottom: "10px", borderBottom: "1px solid #ececec"}}>NORMAL-Rs. {cinemaData.Normal.price}.00</p>
                <table className="seat_format" cellSpacing={"7px"}>
        <tbody>
            {
            cinemaData.Normal.format.map(ele => {
                return (
                    <tr>
                    {ele.map((seats, index) => {
                        if(index==0){
                            return (<td style={{color: "#282c34"}}>{seats}</td>)
                        }
                        const isSelected = selectedSeat.includes(`${ele[0]}${seats}`);
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> : bookings.includes(`${ele[0]}${seats}`) ? <td className="already_booked">{seats}</td> : <td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "Normal")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    <div style={{textAlign: "center", marginTop: "10px", lineHeight: "2px", marginBottom: "90px"}}>
      <img src={screen} style={{width: "400px", display: "block", margin: "auto"}} />
      <p>All eyes this way please!</p>
            </div>
            <div class="seat-legends-wrapper">		
                <div class="seat-legend-container">
                    <div class="seat-legend-box" style={{border: "1px solid #49ba8e"}}></div>
                    <div class="seat-legend-text">Available</div>
                </div>
                <div class="seat-legend-container">
                    <div class="seat-legend-box" style={{backgroundColor: "#1ea83c"}}></div>
                    <div class="seat-legend-text">Selected</div>
                </div>
                <div class="seat-legend-container">
                    <div class="seat-legend-box" style={{backgroundColor: "#4142436d"}}></div>
                    <div class="seat-legend-text">Sold</div>
                </div>	
            </div>
        {payButton && <div className="bottom_selector">
            <Button variant="contained" sx={{width: "300px"}} onClick={() => setOpenDialog(true)}> Pay Rs. {payment}.00 </Button>
        </div>}
    </div>
    :
    <span>loading..</span>
        }
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{fontSize: "16px", textAlign: "center"}}>Terms & Conditions</DialogTitle>
        <DialogContent className="terms_conditions">
            <p>1. Seat layout page for PVR cinemas is for representational purposes only and actual seat layout might vary.</p>
            <p>2. Tickets are compulsory for children of 3 years & above.</p>
            <p>3. Patrons below the age of 18 years cannot be admitted for movies certified `A`.</p>
            <p>4. For 3D movies, ticket price includes charges towards usage of 3D glasses.</p>   
            <p>5. Outside Food & Beverage are not allowed in the cinema premises.</p>
            <p>6. Please follow the covid guidelines (As per the directions from your local authority)</p>
            <p>7. Items like carry-bags, eatables, helmets, handbags are not allowed inside the theatres and are strictly prohibited.</p>
            <p>8. Items like laptops, camera, knives, lighter, match box, cigarettes, firearms and all types of inflammable objects are strictly prohibited.</p>
            <p>9. Patrons under the influence of alcohol or any other form of drugs will not be allowed inside the cinema premises.</p>
            <p>10. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.</p>
            <p>11. Tickets once purchased cannot be cancelled, exchanged or refunded.</p>
            <p>12. Decision(s) taken by PVR cinema shall be final and binding, ``rights of reserved``.</p>
            <p>13. Pre-booked food & beverage needs to be collected from F&B counter.</p>
            <p>14. Ticket prices are subject to change without any prior notification.</p>
            <p>15. Recording of a film through mobile or camera is strictly prohibited and is a punishable offence.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">Cancel</Button>
          <Button color="primary" variant="contained" onClick={handleSeatsBooking}>
          Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div> : <Alert severity="error">Please Login !</Alert>
    }
    </>   
    }
    </>
  );
}

export default BuySeats;
