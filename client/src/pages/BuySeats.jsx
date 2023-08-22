import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const BuySeats = () => {
    const location = useLocation();
  const { _id, selectedSeats } = location.state;
    const langFormatData = JSON.parse(localStorage.getItem("langFormat"));
    const { language, format } = langFormatData || {}; // Provide default values for destructuring  const dates = [today, getDateAtIndex(1), getDateAtIndex(2), getDateAtIndex(3)];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [cinemaData, setCinemaData] = useState(null);
  const baseUrl = "http://localhost:8000/cinema/cinema"

  const fetchCinema = async () => {
    try {
        const response = await axios(`${baseUrl}/${_id}`)
        if(response.data.success){
            setCinemaData(response.data.data)
        }
    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCinema()
  }, [])

  const handleSeatSelector = (seatNo, row, quality) => {
    console.log(`${row}${seatNo}`);
    if (selectedSeats === 1) {
        setSelectedSeat([`${row}${seatNo}`]);
      } else {
        const selectedRow = cinemaData[`${quality}`].format.find(ele => ele[0] === row);
        const selectedIndex = selectedRow.indexOf(seatNo);
        const selectedSeatsInRow = selectedRow.slice(
          selectedIndex,
          selectedIndex + selectedSeats
        );
        setSelectedSeat(selectedSeatsInRow.map(s => `${row}${s}`));
      }
  }


  const PVRData = {
    name: "PVR INOX EF3",
    VIP: {
        price: 420,
        format: [
            ["M", "#", "#", "11", "10", "#", "9", "8", "#", "7", "6", "#", "5", "4", "#", "3", "2", "#", "1"]
        ]
    },
    Executive: {
        price: 280,
        format: [
            ["L", "#", "#", 16, 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
            ["K", "#", "#", 16, 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
            ["J", "#", "#", 16, 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
            ["I", "#", "#", 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
            ["H", "#", "#", 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
            ["G", "#", "#", 15, 14, 13, "#", "#", 12,11,10,9,8,7,6,5,4,3,2,1],
        ]
    },
    Normal: {
        price: 260, 
        format: [
            ["F", "#", "#", 11,10,9,8,"#","#",7,6,5,4,3,2,1],
            ["E", "#", "#", 11,10,9,8,"#","#",7,6,5,4,3,2,1],
            ["D", "#", "#", 11,10,9,8,"#","#",7,6,5,4,3,2,1],
            ["C", "#", "#", 11,10,9,8,"#","#",7,6,5,4,3,2,1],
            ["B", "#", "#", 11,10,9,8,"#","#",7,6,5,4,3,2,1],
            ["A", "#", "#", 10,9,8,7,"#","#",6,5,4,3,2,1],
        ]
    }
  }



  return (
    <div>
        {
            cinemaData ? 
            <div>
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
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> :<td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "VIP")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
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
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> :<td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "Executive")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
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
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> :<td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0], "Normal")}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
    </table>
            </div>
            
    :
    <span>loading..</span>
        }
    
    </div>
  );
}

export default BuySeats;
