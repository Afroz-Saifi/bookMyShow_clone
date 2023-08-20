import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState([]);
    const baseUrl = "http://localhost:8000/movies"

    const fetchMovies = async () => {
        try {
            const response = await axios.get(baseUrl)
            if(response.data.success){
                setMovieData(response.data.data)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchMovies();
      }, []);

      const handleDescription = async (id) => {
        navigate(`/movieDescription/${id}`);
      }

    return (
        <div className='movies_container'>
            {
                movieData.map(({title, Poster, Genre, _id}) => <Card sx={{ width: 230 }} onClick={() => handleDescription(_id)} key={_id}>
                <CardActionArea>
                  <img src={Poster} className='movie_poster' />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {Genre || "Action, Adventure, Fantasy"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>)
            }
        </div>
    )
}

export default Movies;