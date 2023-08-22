import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const BuySeats = () => {
    const location = useLocation();
  const { _id, selectedSeats } = location.state;
    const langFormatData = JSON.parse(localStorage.getItem("langFormat"));
    const { language, format } = langFormatData || {}; // Provide default values for destructuring  const dates = [today, getDateAtIndex(1), getDateAtIndex(2), getDateAtIndex(3)];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [seatNum, setSeatNum] = useState(3);

  const fetchCinema = async () => {
    try {
        // const 
    } catch (error) {
        console.log(error.message);
    }
  }

  const handleSeatSelector = (seatNo, row) => {
    console.log(`${row}${seatNo}`);
    if (seatNum === 1) {
        setSelectedSeat([`${row}${seatNo}`]);
      } else {
        const selectedRow = PVRData.Executive.format.find(ele => ele[0] === row);
        const selectedIndex = selectedRow.indexOf(seatNo);
        const selectedSeatsInRow = selectedRow.slice(
          selectedIndex,
          selectedIndex + seatNum
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
    <table className="seat_format" cellSpacing={"7px"}>
        {
            PVRData.Executive.format.map(ele => {
                return (
                    <tr>
                    {ele.map((seats, index) => {
                        if(index==0){
                            return (<td style={{color: "#282c34"}}>{seats}</td>)
                        }
                        const isSelected = selectedSeat.includes(`${ele[0]}${seats}`);
                        return seats==="#" ? <td style={{color: "transparent"}}>00</td> :<td className={`available_seats ${isSelected ? "selected_seat" : ""}`} onClick={() => handleSeatSelector(seats, ele[0])}>{seats}</td>
                    })}
                    </tr>
                )
            })
        }
    </table>
    </div>
  );
}

export default BuySeats;
