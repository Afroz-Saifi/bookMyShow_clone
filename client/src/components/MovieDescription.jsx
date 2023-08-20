import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';

const MovieDescription = () => {
    const {id} = useParams()
    const [movieDescription, setMovieDescription] = useState([]);
    const baseUrl = "http://localhost:8000/movies/description"
    const fetchData = async () => {
        try {
            const response = await axios(`${baseUrl}/${id}`)
            if(response.data.success){
                setMovieDescription(response.data.data)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className='poster_container'>
                <div className="poster_left">
                    <img src={movieDescription.Poster} alt="" />
                </div>
                <div className="poster_right">
                    <h1>{movieDescription.title}</h1>
                    <Rating name="read-only" value={Math.floor(Math.random() * 5) + 1} readOnly />
                </div>
            </div>
        </div>
    )
}

export default MovieDescription;