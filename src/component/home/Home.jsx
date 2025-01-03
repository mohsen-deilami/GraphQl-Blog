import React from "react";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
import Blogs from "../blogs/Blogs";
import Authors from "../authors/Authors";
export default function Home() {
  return (
    <Container maxWidth="lg" style={{padding:'0'}}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <Typography component="h3" variant="h5" mt={2}>
         
            <Authors/>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          <Typography component="h3" variant="h5" mt={2}>
         
            <Blogs/>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
