// LoginForm.js
import React, { useDebugValue, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import RegistrationForm from './RegistrationForm'; // Create this component

const LoginForm = ({ onClose, showUserName }) => {
  // const baseUrl = "http://localhost:8000/users"
  const baseUrl = "https://showvibes.onrender.com/users"
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const clientId = '715608412851-5267tsdhnetciohip2kkqfvb1savkno9.apps.googleusercontent.com';

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegistrationForm(!showRegistrationForm);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Make your axios post request here
      // After successful login, you'll receive user_name and token
      const response = await axios.post(`${baseUrl}/login`, {
        email, // Replace with the user's email
        password, // Replace with the user's password
      });

      if (response.data.success) {
        const userData = response.data
        localStorage.setItem('loggedUser', JSON.stringify(userData));
        showUserName();
        // Close the dialog or perform any other actions after successful login
        onClose();
      } else {
        setErrorMessage(response.data.msg);
      }
    } catch (error) {
      setErrorMessage('Wrong credentials');
    }
    setLoading(false);
  };



  // handle google login 
  const handleSuccess = async (response) => {
  const { credential } = response;
const decodedToken = jwtDecode(credential);
const userName = decodedToken.name
const userEmail = decodedToken.email;

//   console.log('Google login successful');
//   console.log('User email:', userEmail);


const data = {
  email: userEmail,
  password: userEmail,
  username: userName
};

try {
    const isUser = await axios.post(`${baseUrl}/google/register`, data);
    if(isUser.data.success){
      setLoading(true);
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: data.email, 
          password: data.password, 
        });
  
        if (response.data.success) {
          const userData = response.data
          localStorage.setItem('loggedUser', JSON.stringify(userData));
          showUserName();
          onClose();
        } else {
          setErrorMessage(response.data.msg);
        }
      } catch (error) {
        setErrorMessage('Wrong credentials');
      }
      setLoading(false);
    }
} catch (error) {
     console.log(error.message);
}
};

const handleFailure = () => {
  console.log('Google login failed');
  // Handle the failed login response
};


  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{showLoginForm ? 'Login' : 'Registration'}</DialogTitle>
      <DialogContent>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {showLoginForm && (
          <div>
            {/* <Button variant="contained" fullWidth color="primary">
              Continue with Google
            </Button> */}
            <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          id="google-login-button" // Add an ID to the GoogleLogin component
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
      </GoogleOAuthProvider>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" fullWidth color="primary" onClick={handleLogin}>
              {loading ? <CircularProgress color='secondary' size={24} /> : 'Login'}
            </Button>
            <Button fullWidth onClick={toggleForms}>
              Register
            </Button>
            <Button fullWidth>Forgot Password</Button>
          </div>
        )}
        {showRegistrationForm && <RegistrationForm toggleForms={toggleForms} />}
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
