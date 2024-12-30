import React, { useState } from 'react'
import Grid from "@mui/material/Grid2";
import SEND_COMMENT from "../../graphql/mutations";
import Typography from "@mui/material/Typography";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
export default function CommentForm(slug) {
  console.log(slug)
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');
 const [sendComment ,{loading , data , error}]=useMutation(SEND_COMMENT ,{variables:{name, email, text , slug}});
 console.log(data)
 const clickHandler=()=>{
if(name && email && text){
  sendComment();

}else{
toast.warn("Fill in all fields",{position:"top-center"})
}
 }
  return (
   <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:5}}>
    <Grid size={{xs:12}} m={2}>
      <Typography component="p" variant="h6" fontWeight={700} color="text.primary">Send Comment</Typography>
    </Grid >
    <Grid size={{xs:12}} m={2}>
   
    <TextField
          label="username"
          value={name}
          sx={{width:'100%' , my:2}}
          onChange={e=>setName(e.target.value)}
        />
    <TextField
          id="outlined-required"
          label="email"
          value={email}
          sx={{width:'100%' ,my:2}}
          onChange={e=>setEmail(e.target.value)}
        />
    <TextField
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
  {loading ? <Button variant="contained" disabled>Sendingt</Button> 
   :
    <Button variant="contained" onClick={clickHandler}>Send Comment</Button> }
<ToastContainer/>
</Grid>
   </Grid>
  )
}
