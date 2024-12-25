import React from 'react'
import {AppBar , Toolbar , Typography , Container} from '@mui/material';

import BookIcon from '@mui/icons-material/Book';

export default function Header() {
  return (
    <div>
       
       <AppBar position="sticky">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My-Blogs
          </Typography>
          <BookIcon/>
        </Toolbar>
      </AppBar>
            
       
    </div>
  )
}