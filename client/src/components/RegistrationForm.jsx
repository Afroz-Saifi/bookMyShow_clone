// RegistrationForm.js
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress } from '@mui/material';
import axios from 'axios';

const RegistrationForm = ({ toggleForms }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [registrationToken, setRegistrationToken] = useState('')

  // const baseUrl = "http://localhost:8000/users"
  const baseUrl = "https://showvibes.onrender.com/users"

  const handleRegistration = async () => {
    setLoading(true);

    try {
      // Make POST request to register user
      const response = await axios.post(`${baseUrl}/register`, { email, password, username });
      if (response.data.token) {
        setRegistrationToken(response.data.token);
        setOpenDialog(true);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

    setLoading(false);
  };

  const handleVerifyOTP = async () => {
    setLoadingOtp(true);
  
    try {
      const response = await axios.post(
        `${baseUrl}/verifyotp`,
        { Useremail: email, otp },
        {
          headers: {
            Authorization: `Bearer ${registrationToken}`, // Sending token in headers
          },
        }
      );
  
      if (response.data.success) {
        setOpenDialog(false);
      } else {
        console.error('OTP verification failed.');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
    }
  
    setLoadingOtp(false);
    toggleForms()
  };
  

  return (
    <div>
      <TextField
        fullWidth
        type="email"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
<Button variant="contained" fullWidth color="primary" onClick={handleRegistration}>
        {loading ? <CircularProgress color="secondary" size={24} /> : 'Register'}
      </Button>
      <Button fullWidth onClick={toggleForms}>
        Login
      </Button>

       {/* OTP Verification Dialog */}
       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Verify OTP</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="text"
            label="Enter OTP"
            variant="outlined"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleVerifyOTP} color="primary">
          {loadingOtp ? <CircularProgress color="secondary" size={24} /> : 'Verify'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegistrationForm;
