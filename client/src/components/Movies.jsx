import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CircularProgress  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const baseUrl = "http://localhost:8000/movies"
    const baseUrl = "https://showvibes.onrender.com/movies"

    const fetchMovies = async () => {
        try {
            const response = await axios.get(baseUrl)
            console.log(response.data);
            if(response.data.success){
                setMovieData(response.data.data)
            }
        } catch (error) {
            console.log(error.message);
        }
        finally{
          setIsLoading(false);
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
              isLoading ? (
                // Display loader while loading
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div>
              ) : (
                movieData.map(({title, Poster, Genre, _id}) => <Card sx={{ width: 230 }} onClick={() => handleDescription(_id)} key={_id}>
                <CardActionArea id='movies_cart_container'>
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
              )
            }
        </div>
    )
}

export default Movies;