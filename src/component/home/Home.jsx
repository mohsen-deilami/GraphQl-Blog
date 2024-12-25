import React from "react";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
export default function Home() {
   
  return (
    <Container maxWidth="lg">
  {/*       <Grid container >

      <Grid  xs={12} md={3}>
        
      </Grid>

      <Grid  xs={12} md={9}>
      
      </Grid>
        </Grid> */}

<Grid container spacing={2}>
        <Grid  size={{ xs: 12, sm: 4 , md:3}}>
        <Typography component="h3" variant="h5" mt={2} style={{background:'red'}}>
          
        Authors
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 , md:9}}>
        <Typography component="h3" variant="h5" mt={2} style={{background:'blue'}}>
          
        Articles
          </Typography>
        </Grid>
       
      </Grid>
    </Container>
  );
}
