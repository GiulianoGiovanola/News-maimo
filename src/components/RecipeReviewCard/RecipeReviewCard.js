import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LaunchIcon from '@mui/icons-material/Launch'
import './RecipeReviewCard.css';

export default function RecipeReviewCard({noticia}) {
    const { img_url, source_name, title, url, date } = noticia
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton> 
            }
            title={source_name}
            subheader={date}
          />
          <CardMedia
            component="img"
            height="194"
            image={img_url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton className="share" aria-label="share">
              <a href={url} target="_blank" rel="noreferrer"><LaunchIcon /></a>
            </IconButton>
          </CardActions>
        </Card>
      );
    }