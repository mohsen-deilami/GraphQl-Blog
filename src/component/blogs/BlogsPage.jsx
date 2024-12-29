import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Loader from "./../../component/sheared/Loader";
import sanitizeHtml from "sanitize-html";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
export default function BlogsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  console.log(data);
  return (
    <Container maxWidth="lg" style={{ padding: "0" }}>
      {!!loading && <Loader />}
      {!!error && <Loader />}

      {data ? (
        <Grid container mt={5} mb={5}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
            size={{ sm: 12 }}
          >
            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "text.primary", m: "16px", fontWeight: "700" }}
            >
              {data.post.title}
            </Typography>
            <ArrowForwardIcon onClick={() => navigate(-1)} />
          </Grid>

          <Grid sx={{ mt: "10px" }} size={{ xs: 12 }}>
            <img
              src={`${data.post.coverPhoto.url}`}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid container mt={10}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={`${data.post.author.avatar.url}`}
                sx={{ marginRight: "25px", width: "150px", height: "150px" }}
              />
              <Grid>
                <Typography
                  component="h3"
                  variant="h5"
                  sx={{ color: "text.primary", fontWeight: "900" }}
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
          </Grid>

          <Grid size={{ xs: 12 }} mt={10}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.post.content.html),
              }}
            ></div>
          </Grid>
        </Grid>
      ) : null}
      <Grid size={{ sx: 12 }}>
        <CommentForm />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Comments slug={slug} />
      </Grid>
    </Container>
  );
}
