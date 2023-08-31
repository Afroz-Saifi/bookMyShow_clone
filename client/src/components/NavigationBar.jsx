// NavigationBar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import mainLogo from '../images/main_logo.png'

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const NavigationBar = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [userName, setUserName] = useState('');

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const showUsername = () => {
    const user_name = JSON.parse(localStorage.getItem("loggedUser")) || '';
    setUserName(user_name ? user_name.data.username : '');
  }

  const handleLogout = () => {
    setUserName('');
    localStorage.clear();
    navigate("/")
  }

  useEffect(() => {
      showUsername();
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <img src={mainLogo} className='main_logo' />
          <Search className='search_icon'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          {userName ? <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}><p style={{marginRight: "10px"}}>{userName}</p> <Button variant='contained' onClick={handleLogout}>LOGOUT</Button> </div>  : <Button variant="contained" onClick={toggleLoginForm}>Login</Button>}
        </Toolbar>
      </AppBar>
      {showLoginForm && <LoginForm onClose={toggleLoginForm} showUserName={showUsername} />}
    </Box>
  );
};

export default NavigationBar;
