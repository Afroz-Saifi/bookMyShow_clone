import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import axios from "axios";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Alert, CircularProgress } from "@mui/material";

const FoodBeverage = () => {
  const userData = JSON.parse(localStorage.getItem("loggedUser")) || '';
    const location = useLocation();
    const { _id, showName, tickets, selectedDate, selectedTime, payment, seatIN, cinemaName } = location.state;
    const navigate = useNavigate();
    const [filter, setFilter] = useState('ALL');
    const [foodData, setFoodData] = useState([]);
    const [selectedFood, setSelectedFood] = useState([]);
    const [selectedFoodDetails, setSelectedFoodDetails] = useState({});
    const [payableAmount, setPayableAmount] = useState(payment);
    const [foodAmount, setFoddAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // const baseUrl = "http://localhost:8000/food/category"
    const baseUrl = "https://showvibes.onrender.com/food/category"

    const fetchFood = async (category) => {
      setIsLoading(true);
        try {
            const response = await axios(`${baseUrl}/${category}`)
            if(response.data.success){
                setFoodData(response.data.data);
            }
        } catch (error) {
            console.log(error.message);
        }
        finally{
          setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchFood(filter)
    }, [filter])

    const handleFoodSelection = (id, title, quantity, price) => {
        const food_key = `food_${id}`
        const foodDetailsCopy = {...selectedFoodDetails}
        foodDetailsCopy[`${food_key}`] ? foodDetailsCopy[`${food_key}`].quantity++ : foodDetailsCopy[`${food_key}`] = {title, quantity, price}
        const food_details_key = Object.keys(foodDetailsCopy);
        setSelectedFoodDetails(foodDetailsCopy)
        setSelectedFood(food_details_key);
        let paymentCopy = payableAmount
        const total = paymentCopy+price 
        setPayableAmount(total)
        let foodPriceCopy = foodAmount
        setFoddAmount(foodPriceCopy+price)
    }

    const changeQuantity = (id, action, price) => {
        const food_key = `food_${id}`
        const foodDetailsCopy = {...selectedFoodDetails}
        if(action){
            foodDetailsCopy[`${food_key}`].quantity--
            if(foodDetailsCopy[`${food_key}`].quantity <= 0){
                delete foodDetailsCopy[`${food_key}`]
            }
            let paymentCopy = payableAmount
            const total = paymentCopy-price
            setPayableAmount(total)
            let foodPriceCopy = foodAmount
            setFoddAmount(foodPriceCopy-price)
        }else{
            foodDetailsCopy[`${food_key}`].quantity++
            let paymentCopy = payableAmount
            const total = paymentCopy+price
            setPayableAmount(total)
            let foodPriceCopy = foodAmount
            setFoddAmount(foodPriceCopy+price)
        }
        const food_details_key = Object.keys(foodDetailsCopy);
        setSelectedFoodDetails(foodDetailsCopy)
        setSelectedFood(food_details_key);
    }

    const handlePaymentButton = () => {
      navigate('/payment', {
        state: {
          _id, 
          showName, 
          tickets, 
          selectedDate, 
          selectedTime, 
          payment, 
          seatIN,
          cinemaName,
          selectedFoodDetails,
          payableAmount,
          foodAmount,
          selectedFood
        }
      })
    }

    return (
      <>
      {
        userData ? <div className="food_beverage_container">
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
                      isLoading ? (
                        // Display loader while loading
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <CircularProgress />
                        </div>
                      ) :
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
                          {
                            selectedFoodDetails[`food_${_id}`] ? 
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "10px",
                                marginLeft: 'auto',
                            }}> 
                                 <RemoveCircleOutlineIcon color="primary" sx={{cursor: "pointer"}} onClick={() => changeQuantity(_id, true, price)} />
                                <span>{selectedFoodDetails[`food_${_id}`].quantity}</span>
                                <AddCircleOutlineIcon color="primary" sx={{cursor: "pointer"}} onClick={() => changeQuantity(_id, false, price)} />
                            </div> 
                            :
                            <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                            onClick={() => handleFoodSelection(_id, title, 1, price)}
                          >
                            ADD
                          </Button>
                          }
                        </CardContent>
                        </div>
                        </div>
                      </Card>)
                    }
                </div>
            </div>

            {/* right container */}
            <div className="right_food_container">
              <div>
                <div className="booking_summary">
                    <p className="booking_tag">BOOKING SUMMARY</p>
                    <div className="flex_just">
                        <p style={{fontSize: 14, fontWeight: 500}}>IN-{seatIN.map((ele, index) => index>0 ? `, ${ele}` : ele)} ({tickets} Tickets)</p> 
                        <p style={{fontSize: 14, fontWeight: 500}}>Rs. {payment}.00</p>
                    </div>
                    <div className="convenience_container">
                    <div className="flex_just">
                        <p style={{fontSize: 12, fontWeight: 500}}> Convenience fees </p>
                        <p style={{fontSize: 14}}>Rs.141.60</p>
                    </div>
                    <div className="flex_just">
                        <p style={{fontSize: 10, color: "#969696"}}>Base Amount</p>
                        <p style={{fontSize: 10, color: "#969696"}}>Rs. 120.00</p>   
                    </div>
                    <div className="flex_just">
                        <p style={{fontSize: 10, color: "#969696"}}>Integrated GST (IGST) @ 18%</p>
                        <p style={{fontSize: 10, color: "#969696"}}>Rs. 21.60</p>
                    </div>
                    </div>
                    <div className="flex_just">
                        <p style={{fontSize: 14, fontWeight: 500}}>Sub total</p>
                        <p style={{fontSize: 14, fontWeight: 500}}>Rs. {(payment+141.60).toFixed(2)}</p>
                    </div>
                    <div className="food_beverage_amount">
                    {
                        foodAmount ? 
                        <div className="flex_just">
                        <p style={{fontSize: 14, fontWeight: 500}}>Food & Beveragel</p>
                        <p style={{fontSize: 14, fontWeight: 500}}>Rs. {foodAmount}</p>
                    </div>
                    :
                    <span></span>
                    }
                {
                    selectedFood.map((ele) => {
                        return <div className="flex_just">
                            <p style={{fontSize: 10, color: "#969696"}}>{selectedFoodDetails[`${ele}`].title}<span style={{color: "#000", fontWeight: 500}}>(Qt. {selectedFoodDetails[`${ele}`].quantity})</span></p>
                            <p style={{fontSize: 10, color: "#969696"}}>Rs. {selectedFoodDetails[`${ele}`].price * selectedFoodDetails[`${ele}`].quantity}</p>
                        </div>
                    })
                }
                </div>
                </div>
                <div className="amount_payable flex_just">
                    <p>Amount Payable</p>
                    <p>{(payableAmount+141.60).toFixed(2)}</p>
                </div>
                </div>
                <div style={{
                  marginTop: "30px",
                  padding: "10px"
                }}>
                  <p style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    alignItems: "center",
                    letterSpacing:" 0.2px",
                    color: "#404040",
                    display: "flex",
                    alignItems: "flex-start"
                  }}> <InfoOutlinedIcon sx={{
                    fontSize: 18
                  }} /> {'\u00A0'}By proceeding, I express my consent to complete this transaction.</p>
                  <Button variant="solid" sx={{
                    backgroundColor: "#f84464",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    margin: "auto",
                    fontSize: "18px",
                    '&:hover':{
                      backgroundColor: "#ef1a40"
                    }
                  }} onClick={handlePaymentButton}> <span>TOTAL: Rs. {(payableAmount+141.60).toFixed(2)}</span><span>Proceed</span></Button>
                  <p style={{
                    fontSize: "12px",
                    color: "#888c90",
                    textAlign: "center"
                  }}>You can cancel the tickets 4 hour(s) before the show. Refunds will be done according to Cancellation Policy</p>
                </div>
            </div>
        </div> : <Alert severity="error">Please Login !</Alert>
      }
      </>
        
    )
}

export default FoodBeverage;