import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import "./Registration.css";
import { Link } from "react-router-dom";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
const Registration = () => {
  return (
    
    <center>
      <div
        className="R"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={24}
          style={{
            width: 300,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SupervisedUserCircleIcon style={{fontSize:"60px"}}></SupervisedUserCircleIcon>
          <Typography variant="h5">Sign Up/Register</Typography>
          <form style={{ width: "100%", marginTop: 10 }}>
            <TextField label="First Name" variant="outlined" required />
            <br></br>
            <br></br>
            <TextField label="Last Name" variant="outlined" required />
            <br></br>
            <br></br>
            <TextField label="Username" variant="outlined" required />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
            />
            <br></br>
            <br></br>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
            />
            <br></br>
            <br></br>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            <br></br>
          </form>
          <br></br>
          <Link to="/Login">Already a Customer.</Link>
          <br></br>
          <Link to="/">Home</Link>
        </Paper>
      </div>
    </center>
  );
};
export default Registration;
