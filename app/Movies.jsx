import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const imagePath = `https://image.tmdb.org/t/p/original`;

const Movies = ({ movie }) => {
    const { title, id, poster_path, release_date} = movie;
    return (
        <>
    <Paper elevation={8} sx={{ textAlign: "center" }}>
        <Box sx={{ p: 1, m: 1 }} >
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{release_date}</Typography>
        </Box>

      <Link href={`/${id}`} >

          <Box>
            <Image
              src={imagePath + poster_path}
              alt={title}
              width={300}
              height={450}
              style={styles.imageStyle}
            />
          </Box>
      </Link>
    </Paper>
        </>
    )
}

const styles = {
    imageStyle: {
        borderRadius : "10px"
    }
}

export default Movies;