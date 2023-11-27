import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Link } from "react-router-dom";

import { Button, IconButton, Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MenuApBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  return (
    <AppBar
      elevation={20}
      className="Box"
      position="static"
      style={{
        backgroundColor: "white",
        color: "black",
        opacity:"91%"
        
      }}
    >
      <Toolbar>
        <Typography
          sx={{ flexGrow: 0, paddingLeft: "30px", marginBottom: "5px" }}
        >
          <Link to="/">
            <Button  variant="text" style={{color:"black"}}>
              Home
            </Button>
          </Link>
        </Typography>
        <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
          <Link to="/About">
            <Button color="primary" variant="text" style={{color:"black"}}>
              About
            </Button>
          </Link>
        </Typography>
            <Typography
          sx={{ flexGrow: 0, paddingLeft: "10px", marginBottom: "5px" }}
        >
          <Link to="/ContactUs">

            <Button color="primary" variant="text" style={{color:"black"}}>
              Contact Us
            </Button>
          </Link>
        </Typography>
        <Typography
          sx={{ flexGrow: 1, paddingLeft: "10px", marginBottom: "5px" }}
        >
            <FormControl sx={{ m: 1, minWidth: 120 ,color:"black"}} size="small">
      <InputLabel>Products</InputLabel>
      <Select>
        <Stack direction="column">
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Paintings</MenuItem>
          </Button>
        </Link>
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Indoor Toys</MenuItem>
          </Button>
        </Link>
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Outdoor Toys</MenuItem>
          </Button>
        </Link>
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Wooden Toys</MenuItem>
          </Button>
        </Link>
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Montessori Toys</MenuItem>
          </Button>
        </Link>
        <Link to="/Paintings">
          <Button variant="text" sx={{color:"black"}}>
        <MenuItem >Born Baby Products</MenuItem>
          </Button>
        </Link>
        </Stack>
      </Select>
    </FormControl>
            </Typography>
          
        <Typography>
          <IconButton>
          <ShoppingCartSharpIcon style={{flexGrow:1,fontSize:"40px",color:"black"}}></ShoppingCartSharpIcon>
          </IconButton>
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}
