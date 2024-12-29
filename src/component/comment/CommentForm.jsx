import React, { useState } from 'react'
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function CommentForm() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');
 
  return (
   <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:5}}>
    <Grid size={{xs:12}} m={2}>
      <Typography component="p" variant="h6" fontWeight={700} color="text.primary">Send Comment</Typography>
    </Grid >
    <Grid size={{xs:12}} m={2}>
   
    <TextField
          required
          label="username"
          value={name}
          sx={{width:'100%' , my:2}}
          onChange={e=>setName(e.target.value)}
        />
    <TextField
          required
          id="outlined-required"
          label="email"
          value={email}
          sx={{width:'100%' ,my:2}}
          onChange={e=>setEmail(e.target.value)}
        />
    <TextField
          required
          id="outlined-required"
          label="text"
          value={text}
          sx={{width:'100%' ,my:2}}
          onChange={e=>setText(e.target.value)}
          multiline
          minRows={4}
        />
    </Grid >
<Grid sx={{padding:2}}>
<Button variant="contained">Send Comment</Button>
</Grid>
   </Grid>
  )
}
