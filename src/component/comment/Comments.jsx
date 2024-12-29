import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_Comments } from '../../graphql/queries'
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Loader from "./../../component/sheared/Loader";
import Box from '@mui/material/Box';

export default function Comments({slug}) {
      
       const {loading , data , error}=useQuery(GET_POST_Comments ,{

           variables:{slug}
       }
       )

       
  return (
     <Container maxWidth="lg" sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:5}}>
        {!!loading && <Loader />}
        {!!error && <Loader />}
        <Grid  size={{xs:12 , m:2}}>
        <Typography component="p" variant='h6' fontWeight={700}>Comments</Typography>

        {data ?
        data.comments.map(comment=>(
            <Grid  size={{xs:12}} style={{marginTop:'10px'  , border:'1px silver solid' , borderRadius:'8px'}} key={comment.id}>
                <Box component='div' style={{display:'flex' , alignItems:'center' , marginTop:'10px' , marginBottom:'5px' , padding:'8px'}}>
                    <Avatar style={{marginRight:'10px'}}>{comment.name[0]}</Avatar>
                    <Typography component="p" variant='span' fontWeight={700}>{comment.name}</Typography>
                </Box>
                <Typography component="p" variant='span' style={{padding:'10px 16px'}}>{comment.text}</Typography>

            </Grid>
        ))
        : null
        }

        </Grid>
        </Container>
  )
}
