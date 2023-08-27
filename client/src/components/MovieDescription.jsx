import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Rating, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress } from '@mui/material';

const MovieDescription = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [movieDescription, setMovieDescription] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    // const baseUrl = "http://localhost:8000/movies/description"
    const baseUrl = "https://showvibes.onrender.com/movies/description"
    const quality = ["2D, ICE, MX4D, 4DX, IMAX 2D", "2D", "2D, 3D, 4DX", "2D, IMAX"]
    const languages = ["English, Hindi, Tamil, Telugu", "English", "English, Hindi", "Hindi", "Hindi, English, Tamil", "Tamil, English, Hindi"]
    const duration = ["2h 7m", "1h 55m", "2h 12m", "2h 44m", "3h 1m", "3h 10m"]
    const random_genere = ["Action, Adventure, Fantasy", "Drama, Horror, Sci-Fi", "Action, Sci-Fi, Thriller", "Biography, Comedy, Crime", "Adventure, Drama, Sci-Fi", "Action, Drama, History", "Action, Crime, Drama"]

    const fetchData = async () => {
        try {
            const response = await axios(`${baseUrl}/${id}`)
            if(response.data.success){
                setMovieDescription(response.data.data)
                localStorage.setItem("bookMovie", JSON.stringify(response.data.data))
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleLangFormat = ({language, format}) => {
        const userData = JSON.parse(localStorage.getItem('loggedUser')) || '';
        if(!userData){
          alert("Please login first !")
        }else{
          localStorage.setItem("langFormat", JSON.stringify({language, format}))
          navigate("/buyTickets")
        }
    }

    return (
        <div>
            <div className='poster_container'>
                <div className="poster_left">
                    <img src={movieDescription.Poster} alt="" className='description_poster' />
                </div>
                <div className="poster_right" style={{
  backgroundImage: `linear-gradient(to right, rgb(40,44,52), rgba(40, 44, 52, 0.9), rgba(40, 44, 52, 0.6), transparent), url(${movieDescription.Poster})`}}>
                    <h1>{movieDescription.title}</h1>
                    <Rating name="read-only" size="large" sx={{ fontSize: '3rem', '& .MuiRating-iconEmpty': {
          color: 'white', // Set the background color for empty stars
        }, }} value={Math.floor(Math.random() * 5) + 1} readOnly />
                    <div className='quality_lang'>
                           <span className='meta_info'>{quality[(Math.floor(Math.random() * 4))]}</span>
                        <span className='meta_info'>{languages[(Math.floor(Math.random() * 6))]}</span>
                    </div>
                    <div>
                       <span className=''>{duration[(Math.floor(Math.random() * 6))]} &nbsp;•&nbsp; </span> 
                    <span>{movieDescription.Genre || random_genere[(Math.floor(Math.random() * 6))]} &nbsp;•&nbsp; </span>
                    <span>UA</span> 
                    </div>
                    
                    <Button variant="contained" color="primary" sx={{ marginTop: '30px'}} onClick={() => setOpenDialog(true)}> Book tickets </Button>
                </div>
            </div>

<p style={{
  textAlign: "center",
      width: "100%",
      backgroundColor: "rgb(243, 243, 243)",
      padding: "20px",
      marginTop: "30px",
      margin: 0
}}>{movieDescription.description}</p>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogContent>
    <p>{movieDescription.title}</p>
    <h3>Select language and format</h3>
    <div>
      <p style={{backgroundColor: "rgba(40, 44, 52, 0.1)", color: "#282c34", padding: "8px"}}>ENGLISH</p>
      <div className="options-row" onClick={(e) => handleLangFormat({language: "ENGLISH", format: e.target.textContent})}>
        <Button variant="outlined" sx={{marginRight: "2px"}}>2D</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>IMAX 2D</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>4DX</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>ICE</Button>
      </div>
    </div>
    <div>
      <p style={{backgroundColor: "rgba(40, 44, 52, 0.1)", color: "#282c34", padding: "8px"}}>HINDI</p>
      <div className="options-row" onClick={(e) => handleLangFormat({language: "HINDI", format: e.target.textContent})}>
        <Button variant="outlined" sx={{marginRight: "2px"}}>2D</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>4DX</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>IMAX 2D</Button>
      </div>
      <p style={{backgroundColor: "rgba(40, 44, 52, 0.1)", color: "#282c34", padding: "8px"}}>TELUGU</p>
      <div className="options-row" onClick={(e) => handleLangFormat({language: "TELUGU", format: e.target.textContent})}>
        <Button variant="outlined" sx={{marginRight: "2px"}}>2D</Button>
        <Button variant="outlined" sx={{marginRight: "2px"}}>4DX</Button>
      </div>
    </div>
  </DialogContent>
</Dialog>


        </div>
    )
}

export default MovieDescription;