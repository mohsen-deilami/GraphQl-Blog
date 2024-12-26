import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "./../sheared/CardEL";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  return (
    <>
    <Container spacing={2}>
  

      {!!loading && <h3>loading.... </h3>}
      {!!error && <h3>error.... </h3>} 
    

    <Grid container spacing={2}>
  {
    data ?
    data.posts.map(post=>(
       <Grid  size={{xs:12 , sm:6 , md:4}} key={post.id}>
      <CardEL {...post} />
    </Grid> 
    )):null}
    </Grid>
    
    </Container>
    </>
  );
}
