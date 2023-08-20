// RegistrationForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RegistrationForm = ({ toggleForms }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // You can implement your registration logic here
    // After successful registration, you might want to switch back to the login form
    toggleForms();
  };

  return (
    <div>
      <TextField
        fullWidth
        type="email"
        label="Username"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        Register
      </Button>
      <Button fullWidth onClick={toggleForms}>
        Login
      </Button>
    </div>
  );
};

export default RegistrationForm;




// "@emotion/react": "^11.11.1",
// "@emotion/styled": "^11.11.0",
// "@mui/icons-material": "^5.14.3",
// "@mui/material": "^5.14.5",
// "@mui/styles": "^5.14.5",
