import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_INFO } from '../../graphql/queries'
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import  Loader from './../../component/sheared/Loader';
import sanitizeHtml from 'sanitize-html';
export default function BlogsPage() {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_POST_INFO, {
      variables: { slug },
    });
  console.log(data)
  return (
    <Container maxWidth="lg">
    {!!loading &&  <Loader/>}
    {!!error &&  <Loader/>}

    {data ? (
      <Grid container mt={10}>
      
          <Grid>  
            <Typography
            component="h3"
            variant="h5"
            sx={{ color: "text.primary", m:"16px", fontWeight: "700" }}
          >
            {data.post.title}
          </Typography>
          </Grid>
      

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          size={{ xs: 12 }}
        >
          <Avatar
            src={`${data.post.coverPhoto.url}`}
           
          />

</Grid>
        <Grid container>
        <Avatar
              src={`${data.post.author.avatar.url}`}
              sx={{ marginLeft: "2px", width: "250px", height: "250px" }}
            />
            <Grid>
            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "text.primary", m:"16px", fontWeight: "700" }}
            >
              {data.post.author.name}
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "text.secondry" }}
            >
              {data.post.author.field}
            </Typography>
            </Grid>
        </Grid>

          <Typography
            component="h3"
            variant="h5"
            sx={{ color: "text.secondry" }}
          >
            {data.post.title}
          </Typography>

        <Grid size={{ xs: 12 }}mt={10} >
          <div
            dangerouslySetInnerHTML={{ __html:sanitizeHtml( data.post.content.html) }}
          ></div>
        </Grid>
      </Grid>
    ) : null}

  
   
  </Container>
);
  
}
