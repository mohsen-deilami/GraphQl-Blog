import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "./../sheared/CardEL";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log('blogs:',data);

  return (
    <>
    <Container spacing={2}>
      <Grid  size={{xs:12 , sm:6 , md:4}}>
     {/*  {!!loading && <h3>loading.... </h3>}
      {!!error && <h3>error.... </h3>} */}
    

  {
    data ?
    data.posts.map(post=>(
      
      <CardEL {...post} key={post.id}/>
    )):null}
    </Grid>
    </Container>
    </>
  );
}
