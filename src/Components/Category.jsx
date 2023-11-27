import React from "react";
import "./Category.css";
import Button from "@mui/material/Button";
import myImage from "./GOLDEN-HOUR.png";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div style={{float:"left",paddingRight:"30px"}}>
    <Paper className="back" elevation={12} style={{width:"250px",marginLeft:"30px",backgroundColor:"white",alignItems:"center" , height:"780px", marginTop:"50px"}}>
    <div>
      <div className="box">
        <div style={{marginRight:"70px"}}>
          <img
            className="img"
            src={myImage}
            alt="Example"
            style={{maxWidth: "100%", height: "190px" }}
          />
        </div>
        <table className="custom-table" style={{marginLeft:"30px"}}>
          <tbody>
            <tr>
              <td>
                
                <Link to="/Paintings">
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  backgroundColor="#00ff00"
                  style={{ width: "150px" }}
                >
                  Paintings
                </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/IndoorToys">
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  Indoor Toys
                </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  Outdoor Toys
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  Montessori Toys
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  born baby products
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  wooden toys
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="large"
                  content="centre"
                  style={{ width: "150px" }}
                >
                  musical toys
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Paper>
    </div>
  );
};

export default Category;
