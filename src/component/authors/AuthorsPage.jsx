import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardEL from "../sheared/CardEL";

export default function AuthorsPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });



  return (
    <Container
      spacing={2}
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        marginBottom: 4,
      }}
    >
      {!!loading && <h3>loading.... </h3>}
      {!!error && <h3>error.... </h3>}
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "5px",
        }}
      >
        {data ? (
          
          
          <Grid
            sx={{
              alignItems: "center",

              padding: "5px",
            }}
            size={{ xs: 12 }}
          >
            <Avatar
              src={`${data.author.avatar.url}`}
              sx={{ marginLeft: "2px" }}
            />
              
           
            <Typography
              component="h3"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {data.author.name}
            </Typography>
            <Typography
              component="h3"
              variant="body2"
              sx={{ color: "text.primary" }}
            >
              {data.author.field}
            </Typography>
            <Grid
            
              size={{ xs: 12 }}
            >
              <div dangerouslySetInnerHTML={{__html:data.author.description.html}}></div>
              
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <Grid container spacing={2}>
          {data
            ? 
  
            data.author.post.map((post) => (
              
              
                 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                  <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
                </Grid> 
             )) 
            : null}
        </Grid>
    </Container>
  );
}
