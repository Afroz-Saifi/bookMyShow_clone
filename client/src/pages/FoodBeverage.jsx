import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import axios from "axios";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const FoodBeverage = () => {
    const location = useLocation();
    const { _id, showName, tickets, selectedDate, selectedTime, payment, seatIN } = location.state;
    const movieData = JSON.parse(localStorage.getItem('bookMovie'));
    const movieName = movieData.title
    const [filter, setFilter] = useState('ALL');
    const [foodData, setFoodData] = useState([]);
    const baseUrl = "http://localhost:8000/food/category"

    const fetchFood = async (category) => {
        try {
            const response = await axios(`${baseUrl}/${category}`)
            if(response.data.success){
                setFoodData(response.data.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchFood(filter)
    }, [filter])

    return (
        <div className="food_beverage_container">
            <div className="left_food_container">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688188454571_855x95.jpg" alt="" />
                <h2 style={{
                        fontFamily: "Montserrat",
                        lineHeight: "28px",
                        letterSpacing: "3px",
                        fontSize: "25px",
                        textAlign: "center"
                }}>Grab a <span style={{color: "red"}}>bite!</span></h2>
                <p style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#666",
                    fontFamily: "Roboto,sans-serif",
                    textAlign: "center"
                }}>Prebook Your Meal and Save More!</p>
                <RadioGroup
      orientation="horizontal"
      aria-label="alignment"
      name="alignment"
      variant="outlined"
      sx={{width: "400px", margin: "auto"}}
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    >
      {['ALL', 'POPCORN', 'COMBOS', 'BEVERAGE'].map((item) => (
        <Box
          key={item}
          sx={(theme) => ({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 158,
            height: 40,
            '&:not([data-first-child])': {
              borderLeft: '1px solid',
              borderColor: 'divider',
            },
            [`&[data-first-child] .${radioClasses.action}`]: {
              borderTopLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
            [`&[data-last-child] .${radioClasses.action}`]: {
              borderTopRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
          })}
        >
          <Radio
            value={item}
            disableIcon
            overlay
            label={item}
            variant={filter === item ? 'solid' : 'plain'}
            slotProps={{
              input: { 'aria-label': item },
              action: {
                sx: { borderRadius: 0, transition: 'none' },
              },
              label: { sx: { lineHeight: 0 } },
            }}
          />
        </Box>
      ))}
    </RadioGroup>
                <div className="food_hub">
                    {
                        foodData.map(({title, category, _id, subtitle, price, image}) => <Card variant="outlined" sx={{ width: 390 }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",

                            }}>
                                <div>
                                   <img
                            src={image}
                            loading="lazy"
                            alt=""
                            style={{
                                width: "80px"
                            }}
                          /> 
                                </div>
                             
                        <div style={{
                            width: "300px"
                        }}>
                          <Typography level="title-lg" sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            color: "#1a1a1a"
                          }}>{title}</Typography>
                          <Typography level="body-sm" sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "16px",
                            color: "#666",
                            padding: "4px 0 16px",
                            height: "auto"
                          }}>{subtitle}</Typography>
                        <CardContent orientation="horizontal">
                          <div>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                              ₹{price}
                            </Typography>
                          </div>
                          <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                          >
                            ADD
                          </Button>
                        </CardContent>
                        </div>
                        </div>
                      </Card>)
                    }
                </div>
            </div>

            {/* right container */}
            <div className="right_food_container">
                <p>BOOKING SUMMARY</p>
            </div>
        </div>
    )
}

export default FoodBeverage;