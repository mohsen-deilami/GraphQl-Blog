import React, { useState } from 'react'
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function CommentForm({slug}) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');
    console.log(slug)
  return (
   <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:5}}>
    <Grid size={{xs:12}} m={2}>
      <Typography component="p" variant="h6" fontWeight={700} color="text.primary">Send Comment</Typography>
    </Grid>

   </Grid>
  )
}
