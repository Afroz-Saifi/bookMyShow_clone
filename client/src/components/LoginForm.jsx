// LoginForm.js
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button
} from '@mui/material';
import RegistrationForm from './RegistrationForm'; // Create this component

const LoginForm = ({ onClose }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{showLoginForm ? 'Login' : 'Registration'}</DialogTitle>
      <DialogContent>
        {showLoginForm && (
          <div>
            <Button variant="contained" fullWidth color="primary">
              Continue with Google
            </Button>
            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" fullWidth color="primary">
              Login
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
