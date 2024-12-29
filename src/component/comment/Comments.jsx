import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_Comments } from '../../graphql/queries'
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Loader from "./../../component/sheared/Loader";
export default function Comments({slug}) {
       console.log(slug)
       const {loading , data , error}=useQuery(GET_POST_Comments ,{

           variables:{slug}
       }
       )
       console.log(data);
       
  return (
     <Container maxWidth="lg" sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:5}}>
        {!!loading && <Loader />}
        {!!error && <Loader />}
        </Container>
  )
}
