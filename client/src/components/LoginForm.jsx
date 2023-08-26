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

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{showLoginForm ? 'Login' : 'Registration'}</DialogTitle>
      <DialogContent>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {showLoginForm && (
          <div>
            <Button variant="contained" fullWidth color="primary">
              Continue with Google
            </Button>
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
