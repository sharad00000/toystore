import React, { useState } from "react";
import { Paper, TextField, Typography, Button, Stack } from "@mui/material";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { toast } from "react-toastify";
import axios from 'axios';
const Registration = () => {
  const[fname,fnamechange]=useState("");
  const[lname,lnamechange]=useState("");
  const[uname,unamechange]=useState("");
  const[email,emailchange]=useState("");
  const[pwd,pwdchange]=useState("");
  const[cpwd,cpwdchange]=useState("");

  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={fname,lname,uname,email,pwd,cpwd};
    //console.log(regobj);

    axios.post("http://localhost:8000/user", regobj, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    // Handle success
    toast.success('Registered Successfully.');
    navigate("/Login");
  })
  .catch((error) => {
    // Handle error
    toast.error('Failed: ' + error.message);
  });
  }

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
          <SupervisedUserCircleIcon
            style={{ fontSize: "60px" }}
          ></SupervisedUserCircleIcon>
          <Typography variant="h5">Sign Up/Register</Typography>
          <form onSubmit={handlesubmit} style={{ marginTop: 10 }}>
            <Stack direction="column">
              <TextField label="First Name" required variant="outlined" value={fname} onChange={e=>fnamechange(e.target.value)}  ></TextField>
              <br></br>
              <TextField label="Last Name" required variant="outlined" value={lname} onChange={e=>lnamechange(e.target.value)}  />
              <br></br>
              <TextField label="Username" required variant="outlined" value={uname} onChange={e=>unamechange(e.target.value)}  />
              <br></br>
              <TextField
                label="Email"
                type="email"
                variant="outlined" value={email} onChange={e=>emailchange(e.target.value)} 
                required
              />
              <br></br>
              <TextField
                label="Password"
                type="password"
                variant="outlined" value={pwd} onChange={e=>pwdchange(e.target.value)} 
                required
              />
              <br></br>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined" value={cpwd} onChange={e=>cpwdchange(e.target.value)} 
                required
              />
              <br></br>
              
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              
              <br></br>
            </Stack>
          </form>
          <br></br>
          <Link to="/Login">Already a Customer.</Link>
          <br></br>
          
        </Paper>
      </div>
    </center>
  );
};
export default Registration;
