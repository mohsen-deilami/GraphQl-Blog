import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';


export default function CardEL(props) {
  console.log(props);
  
  return (
    <div>

       <Card sx={{ boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px' , borderRadius:4 , marginBottom:4 }}>
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
        <Typography component="h3" variant="body2" sx={{ color: 'text.secondary' }}>
         {props.title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{marginTop:'16px'}} />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
  
    </Card>
    </div>
  )
}
