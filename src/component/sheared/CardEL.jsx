import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


export default function CardEL(props) {
  
  return (
    <div>

       <Card sx={{height:"410px" , boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px' , borderRadius:4 , marginBottom:4 }}>
      <CardHeader
        avatar={ <Avatar  src={`${props.author.avatar.url}`} sx={{marginLeft:"2px"}}/>    }
      
        title={<Typography component="p" variant="p" sx={{ color: 'text.primary'  ,fontSize:"16px"}}>

          {`${props.author.name}`}
        </Typography>}
        
      
      />
      <CardMedia
        component="img"
        height="194"
        image={`${props.coverPhoto.url}`}
        alt={`${props.slug}`}
      />
      <CardContent>
        <Typography component="h3" variant="body2" sx={{ color: 'text.secondary' ,overflow:'hidden',whiteSpace:'nowrap' , textOverflow:'ellipsis'}}>
         {props.title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{margin:'10px'}} />
      
      <CardActions disableSpacing>
        <Link to={`/blogs/${props.slug}`}>
      <Button variant="outlined" sx={{width:"100%"}}>Read Article</Button>
        </Link>
       
      </CardActions>
  
    </Card>
    </div>
  )
}
