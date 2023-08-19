import { Box, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const imagePath = `https://image.tmdb.org/t/p/original`;


const pages = async ({ params }) => {


  const generateStaticParams = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const response = await data.json();

    return response.results.map((movie) => ({
      movie: toString(movie.id)
    }));
  }


  const { movie } = params;

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  const { title, release_date, tagline, overview, runtime, backdrop_path } = response;

  const styles = {
    maxWidth: '100%',   // Image will scale within its container
    height: 'auto',     // Maintain aspect ratio
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // padding: "20px"
    float: "center"
}

  return (
    <Container my={5} sx={{minWidth: "80%"}} >
      <Paper sx={{}} >
        <Box sx={{textAlign:"center", p:3, height : "100%"}} >
        <Typography variant="h5" >{title}</Typography>
        <Typography variant="h6">{tagline}</Typography>
        <Typography>Release Date: {release_date}</Typography>
        <Typography>Movie Runtime: {runtime} mins</Typography>

        <Box sx={{ display: "flex", textAlign: "center", justifyContent : "center", alignItems: "center" }} my={4} p={2} >
          <Image alt={title}
              layout="responsive"  // Important for responsive images
              width={300}
              height={450}
              style={styles} src={`${imagePath + backdrop_path }`} />
        </Box>

        <Typography>Movie Overview: {overview}</Typography>
        </Box>
      </Paper>
    </Container>
  )
}



export default pages
