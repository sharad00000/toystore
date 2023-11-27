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

export default function Paintings2() {
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
            backgroundColor: "transparent",
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFkcFL_-Hs2Jqs9SdoTGpandgY_wqGVtOGw&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRORNpfKLgJUUG0-6VhQnE4kQ9WAC_NN-pxw&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wxfijevv8eSTZd1R5dEK-UNSic_c3r3J7w&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItH5iSjhnBZEglm4Uk3ROAQgCTVDRNFSoXA&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5q_OO3ShKMTVSBjQjNKy0kNZ5l5pLlHzHQ&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2R05BKItIiHQx9T7lZ_XcfUo1sV2Czy5wGw&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GvP6v9w76F9P8YHmLA7K5jWQuW1XT1_Gxg&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjPD4sFJRLEuIUO32-eBiAswvj4yECEdA_DbmWnWfG9-yoDraGmWDu7x0OldTMXIl1O4&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbueTBkzaoQftLQZYf3os2hmbVUyd9nLuLw&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboBzTOKDIk5OC38Mu-SAFV2_RipLlI8zgrg&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
                    Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Painting is made Of famous artist
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
