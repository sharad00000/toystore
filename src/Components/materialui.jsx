import React from "react";
import { Paper, TextField, Typography, Button, Stack } from "@mui/material";
import "./materialui.css";
import { Link } from "react-router-dom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {toast} from 'react-toastify';
import { useContext } from "react";
import { userContext } from "./Context";


const Materialui = () => {
  const [user, setuser] = useContext(userContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pwd, setpwd] = useState("");
  const [erro, seterro] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiurl = `http://localhost:8000/user?uname=${username}`;
      const response = await axios.get(apiurl);
      if (
        response.data.length !== 0 &&
        
        response.data[0].pwd === pwd
      ) {
        // seterro(false);

        toast.success('Logged in Successfully.');
        setuser(username);
        navigate('/');
        
      } else {
        seterro("Username or password is incorrect");
        toast.error("Incorrect Username or Password.");
        
        
      }
    } catch (erro) {
      console.error('Error during API call:', erro);
      // Handle error, maybe seterro(true) and navigate('/')
    }
  };
  
  return (
    <center>
      <div
        className="F"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
            backgroundColor: "rgba(240, 240, 240,0.7)",
          }}
        >
          <AccountCircleSharpIcon
            style={{ fontSize: "60px" }}
          ></AccountCircleSharpIcon>
          <br></br>
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            <Stack direction="column">
              <TextField
                label="Username"
                variant="outlined"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={pwd}
                onChange={(e) => setpwd(e.target.value)}
                required
              />
              
              
              <br></br>
              {erro && <p>{erro}</p>}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                
                
              on>
                Login
              </Button>
            </Stack>

            <br></br>
          </form>
          <br></br>
          <Link to="/SignUp">New User?</Link>
        </Paper>
      </div>
    </center>
  );
};
export default Materialui;
