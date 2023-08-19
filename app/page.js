import Image from 'next/image';
import styles from './page.module.css';
import { Box, Container, Grid, Paper, Typography } from "@mui/material";


import Movies from "../app/Movies";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response = await data.json();

  return (
  <>
    <Container  sx={{ minWidth: "95%" }} >
      <Grid container mt={5} spacing={1}>
        {response.results.map((movie) => (
          <Grid item sm={6} xs={12} md={6} lg={3} key={movie.id}>
            <Movies movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);
};