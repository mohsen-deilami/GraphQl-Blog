import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardEL from "../sheared/CardEL";
import sanitizeHtml from 'sanitize-html';
import  Loader from './../../component/sheared/Loader'
export default function AuthorsPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  return (
    <Container maxWidth="lg">
      {!!loading &&  <Loader/>}
      {!!error &&  <Loader/>}

      {data ? (
        <Grid container mt={10}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            size={{ xs: 12 }}
          >
            <Avatar
              src={`${data.author.avatar.url}`}
              sx={{ marginLeft: "2px", width: "250px", height: "250px" }}
            />

            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "text.primary", m:"16px", fontWeight: "700" }}
            >
              {data.author.name}
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "text.secondry" }}
            >
              {data.author.field}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}mt={10} >
            <div
              dangerouslySetInnerHTML={{ __html:sanitizeHtml( data.author.description.html) }}
            ></div>
          </Grid>
        </Grid>
      ) : null}

      <Grid container spacing={2} mt={10}>
        {data
          ? data.author.post.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
}
