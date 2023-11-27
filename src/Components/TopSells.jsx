import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import "./TopSells.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea, Paper, Stack } from "@mui/material";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Paper className="Paper"
        elevation={12}
        style={{
          backgroundColor: "white",
          marginTop: "50px",
          height: "1200px",
          width: "1100px",
          display:"grid",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <center>
            <h1 style={{color:"white",fontFamily:"cursive",fontSize:"40px"}}>TOP SELLERS</h1>
        </center>
        <br></br>
        <marquee behavior="scroll" direction="left" style={{color:"white"}}>These are the top Selling Products Right Now!!!.Have a purchase on these products and get 50% OFF!!!</marquee>
        <Stack direction="row" spacing={2} style={{marginLeft:"20px"}}>
          <Card className="Card" sx={{ maxWidth: 345 }} item xs={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/free-photo/teddy-bear-with-pink-bow-sits-road_1340-42476.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
                <Typography variant="subtitle" color="text.secondary">
                   M.R.P :<strike>1499</strike>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 345 }} container="row">
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/free-photo/cute-cat-with-car_23-2150932415.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/premium-photo/children-toy-car-kids-like-gift-car-model-wallpaper-background-illustration-hd-remote-control-car_912113-352108.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
        <Stack direction="row" spacing={2} style={{marginTop:"15px",marginLeft:"10px"}}>
          <Card className="Card" sx={{ maxWidth: 335 }} item xs={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/free-photo/view-3d-toy-like-train-model_23-2150905373.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 300 }} container="row">
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/premium-photo/ai-wallpaper-abstract-background_999609-563.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/free-photo/flying-propeller-toy-brings-childhood-fun-indoors-generated-by-ai_188544-10222.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
        <Stack direction="row" spacing={2} style={{marginTop:"15px"}}>
          <Card className="Card" sx={{ maxWidth: 345 }} item xs={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/premium-photo/set-toys-objects-that-are-sitting-background-style-graphic-designinspire_950002-51957.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 345 }} container="row">
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/premium-photo/pink-toy-motorcycle-with-large-wheel-that-says-bike-it_680902-160.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className="Card" sx={{ maxWidth: 335 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/premium-photo/childrens-day-dawn-childrens-rights-cartoon-3d-june-11th-generative-ai_10221-26481.jpg?ga=GA1.1.1412296542.1700143337&semt=ais_ai_generated"
                
                
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Fluffy Teddy Bear
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  paragraph
                  variant="subtitle1"
                  color="text.secondary"
                >
                  This product is made of high quality cotton and
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <marquee behavior="scroll" direction="left" style={{color:"white"}}>These are the top Selling Products Right Now!!!.Have a purchase on these products and get 50% OFF!!!</marquee>
      </Paper>
    </div>
  );
}
