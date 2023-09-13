import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CircularProgress } from '@mui/material';

const UserDashboard = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const userData = JSON.parse(localStorage.getItem('loggedUser')) || '';
  const config = {
    headers: {
      'Authorization': `Bearer ${userData.token}`
    }
  };
  // const baseUrl = "http://localhost:8000/bookings/getMybookings"
  const baseUrl = "https://showvibes.onrender.com/bookings/getMybookings"

  const [myBookings, setMyBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchMyBookings = async () => {
    try {
      const response = await axios(`${baseUrl}/${id}`, config)
      if(response.data.success){
        setMyBookings(response.data.data.reverse())
      }
    } catch (error) {
      console.log(error.message);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMyBookings()
  }, [])

  const getDateFormat = (input) => {
    const inputDate = input;

  const date = new Date(inputDate);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

  const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
  }

    return (
        <div className='dashboard_main_container'>
          {
            isLoading ? (
              // Display loader while loading
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <CircularProgress />
              </div>
            ) :
            myBookings.map(({_id, date, time, seat, QRcode, showName, showImage, foodAndBeverage, langFormat, cinemaName, payment}) => <div key={_id} className='dashboard_cards'>
              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div className='card_images_container'>
        <CardMedia
          component="img"
          image={showImage}
          alt="green iguana"
        />
        <div className='right_card_side'>
        <CardMedia
          component="img"
          image={`data:image/png;base64,${QRcode}`}
          alt="green iguana"
          style={{width: 170, height: 150}}
        />
        <div style={{lineHeight: "20px", padding: "5px"}}>
            <p style={{fontSize: "18px"}}>{cinemaName}</p>
            <p>{langFormat.format} / {langFormat.language}</p>
            <p>{getDateFormat(date)} / {time}</p>
            <p>{seat.map(ele => <span key={ele}>{ele} </span>)}</p>
            <p style={{fontSize: "18px"}}>Rs. {payment.toFixed(2)}</p>
        </div>
        </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
            {showName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>)
          }
    </div>
    )
}

export default UserDashboard;