import React from 'react';
import '../../css/comment.css';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  Favorite,
  Share,
  ExpandMore,
  MoreVert,
  ThumbUp,
} from '@material-ui/icons';

// eslint-disable-next-line react/prefer-stateless-function
class CardComment extends React.Component {
  render() {
    return (
      <div className="padding">
        <Grid container spacing={2}>
          <Grid xs={3} />
          <Grid xs={6}>
            <Card className="card">
              <CardHeader
                className="background"
                avatar={(
                  <Avatar aria-label="recipe" className="avatar">A</Avatar>
              )}
                action={(
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
              )}
                title="Allie Michell Flores Sánchez"
                subheader="August 12, 2019"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardMedia
                className="media"
                image="C:/Users/allie/Desktop/Projects/Find-eat/src/client/images/react.png"
                title="React image"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="like" color="primary">
                  <ThumbUp />
                </IconButton>
                <IconButton aria-label="favorites" color="secondary">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share" color="inherit">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
            <Grid xs={3} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CardComment;
