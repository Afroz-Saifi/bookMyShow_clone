import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

const SeatSelectorPopup = ({ open, onClose, onSelectSeats, normalPrice, vipPrice, executivePrice, _id, selectedDate, selectedTime, cinemaName }) => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState(1);

  const handleSeatSelect = (num) => {
    setSelectedSeats(num);
  };

  const handleSeatsConfirmation = () => {
    onSelectSeats(selectedSeats);
    navigate("/buySeats", {
      state: { _id,  selectedSeats, selectedDate, selectedTime, cinemaName}
    })
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"How Many Seats?"}</DialogTitle>
      <DialogContent>
        {/* Circular buttons */}
        <div>
          <Box sx={{ resize: 'horizontal', overflow: 'auto', px: 2 }}>
      <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="M"
        sx={{ gap: 2, mb: 2, mt: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {[1,2,3,4,5,6,7,8,9,10].map((size) => (
          <Sheet
            key={size}
            sx={{
              position: 'relative',
              width: 30,
              height: 30,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                  backgroundColor: 'text.secondary'
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color="primary" overlay disableIcon value={size} label={size} onClick={() => handleSeatSelect(size)} />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
        </div>
        {/* Divs in a row */}
        <div className='rate_container'>
          <div>
            <p style={{color: "rgb(52 55 60)"}}>NORMAL</p>
            <p style={{fontWeight: 'bold'}}>Rs. {normalPrice}.00</p>
            <p style={{color: "#2ec492"}}>Available</p>
          </div>
          <div>
            <p style={{color: "rgb(52 55 60)"}}>EXECUTIVE</p>
            <p style={{fontWeight: 'bold'}}>Rs. {executivePrice}.00</p>
            <p style={{color: "#2ec492"}}>Available</p>
          </div>
          <div>
            <p style={{color: "rgb(52 55 60)"}}>VIP</p>
            <p style={{fontWeight: 'bold'}}>Rs. {vipPrice}.00</p>
            <p style={{color: "#2ec492"}}>Available</p>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSeatsConfirmation} color="primary">
          Select Seats
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SeatSelectorPopup;



// import * as React from 'react';

// export default function ExampleProductAttributes() {
//   return (
    // <Box sx={{ resize: 'horizontal', overflow: 'auto', px: 2 }}>
    //   <RadioGroup
    //     aria-labelledby="product-size-attribute"
    //     defaultValue="M"
    //     sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
    //   >
    //     {[1,2,3,4,5,6,7,8,9,10].map((size) => (
    //       <Sheet
    //         key={size}
    //         sx={{
    //           position: 'relative',
    //           width: 40,
    //           height: 40,
    //           flexShrink: 0,
    //           borderRadius: '50%',
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           '--joy-focus-outlineOffset': '4px',
    //           '--joy-palette-focusVisible': (theme) =>
    //             theme.vars.palette.neutral.outlinedBorder,
    //           [`& .${radioClasses.checked}`]: {
    //             [`& .${radioClasses.label}`]: {
    //               fontWeight: 'lg',
    //             },
    //             [`& .${radioClasses.action}`]: {
    //               '--variant-borderWidth': '2px',
    //               borderColor: 'text.secondary',
    //             },
    //           },
    //           [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
    //             outlineWidth: '2px',
    //           },
    //         }}
    //       >
    //         <Radio color="neutral" overlay disableIcon value={size} label={size} />
    //       </Sheet>
    //     ))}
    //   </RadioGroup>
    // </Box>
//   );
// }