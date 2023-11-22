import React from "react";
import "./Footer.css";
import { Button, Typography } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <Typography>© 2023 Kiddin' Around</Typography>
      </div>
      <div className="button">
        <Button variant="text" size="large">
          HOME
        </Button>
        <Button variant="text">ABOUT</Button>
        <Button variant="text">PRODUCTS</Button>
        <Button variant="text">CONTACT</Button>
      </div>
      <div className="instagram-button" style={{marginTop:"200px"}}>
        <a
          href="https://www.instagram.com/toyshop_tz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} color="#fff" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
