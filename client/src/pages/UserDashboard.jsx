import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [qrCodes, setQrCodes] = useState([]);
const navigate = useNavigate()

  useEffect(() => {
    // Fetch QR codes from your API
    axios.get('https://showvibes.onrender.com/bookings/getMybookings/64e1fe8a2dc5aa660b1d32ce')
      .then(response => {
        setQrCodes(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleClick = () => {
const encode = encodeURIComponent("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")
    navigate(`/qrcode/${encode}`)
  }

    return (
        <div>
          <button onClick={handleClick}>click</button>
      {qrCodes.map(qrCode => (
        qrCode.QRcode ? 
        <img key={qrCode._id} src={`data:image/png;base64,${qrCode.QRcode}`} alt="QR Code" />
        :
        <p>ji</p>
      ))}
    </div>
    )
}

export default UserDashboard;