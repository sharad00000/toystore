import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import MenuApBar from "./Navbar2";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import MenuApBar from "./Navbar2";
import Footer2 from "./Footer2";
//import Footer2 from "./Footer2";

export default function IndoorToys() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://st.depositphotos.com/1298561/4807/v/950/depositphotos_48071139-stock-illustration-doodle-baby-pattern-background.jpg")`,
          height: "220vh",
        }}
      >
        <MenuApBar></MenuApBar>
        <Paper
          elevation={24}
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "50px",
            backgroundColor: "white",
          }}
        >
          <br></br>
          <br></br>
          <Stack direction="row" spacing={4} sx={{ marginLeft: "80px" }}>
            <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="data:image/jpeg;base64,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"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Play Area
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.600
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://rukminim2.flixcart.com/image/850/1000/kqjtd3k0/outdoor-toy/g/k/g/attractive-big-slide-outdoor-indoor-toy-for-kids-playtool-original-imag4jenbq2vzhgd.jpeg?q=90"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Baby Slide
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.899
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/coaster_1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Indoor Car Slide
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.799
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://image.made-in-china.com/202f0j00leVGWrmIZLcB/New-Indoor-Children-Plastic-Toy-House-PT-006D-.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wodden House
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.2999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
          <br></br>
          <br></br>
          <Stack direction="row" spacing={4} sx={{ marginLeft: "80px" }}>
            <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images-cdn.ubuy.co.in/637ecf07d74da062c5684dd5-dazzling-toys-mini-basketball-tabletop.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Basket Ball Playarea
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.899
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzw_PDkF_ZfzCvWhxNGZzU7-ZpcAbap-AfoG9gcBs2VaicLRNzP6BScVQx0ExhxFbiCc&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kids Play tent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.1299
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://image.smythstoys.com/zoom/222941.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lego
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.899
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://m.media-amazon.com/images/I/91Ux2bwdnDL._AC_UF1000,1000_QL80_.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lego Classic
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.699
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
          <br></br>
          <br></br>
          <Stack direction="row" spacing={4} sx={{ marginLeft: "80px" }}>
            <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lKIpA9YxqAUa2T_yXuWxhEv9u-LVh87GrXUTQuAyDQH6CVwN7a9SX_MAzldPnsXbcd0&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lego Minecraft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.1699
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://5.imimg.com/data5/SELLER/Default/2021/10/UT/KN/XP/615434/kids-hot-wheels-cars-amazoom.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hot Wheels
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.199
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-pull-along/g/x/k/-original-imagrzhgvzm7zxkv.jpeg?q=90"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hot Wheels Monster
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.3999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.fcglcdn.com/brainbees/images/products/583x720/11744858a.webp"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hot Wheels 6-in-1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
          <br></br>
          <br></br>
          <Stack direction="row" spacing={4} sx={{ marginLeft: "80px" }}>
            <Card elevation={12} sx={{ maxWidth: 380, maxHeight: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="data:image/jpeg;base64,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"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mattel Mega combo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.5999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.ebayimg.com/images/g/Ui8AAOSw7lBkDSgA/s-l1200.webp"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mattel Kitchen Toys
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.499
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="data:image/jpeg;base64,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"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Barbie Toys
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.1699
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card
              elevation={12}
              sx={{ maxWidth: 345, margin: "20px", maxHeight: 500 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://pbs.twimg.com/media/Fl-EpHvaEAEC_EL?format=jpg&name=large"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Oppemheimer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₨.1999
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
          <br></br>
          <br></br>
        </Paper>
      </div>
      <Footer2></Footer2>
    </div>
  );
}
