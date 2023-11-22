import { Paper} from "@mui/material";
import React from "react";
import "./Homepagefront.css";
const Homepagefront = () => {
    const imageUrls = [
        'https://img.freepik.com/premium-photo/tiny-cute-isometric-3d-render-lovable-teddy-bear_979520-638.jpg',
        'https://img.freepik.com/premium-photo/toy-train-playful-colorful-great-children-s-entertainment_115919-27641.jpg',
        'https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-vibrant-wooden-xylophone-and-mallets-set-against-a-playful-pink-backdrop-image_3816263.jpg',
        'https://img.freepik.com/premium-psd/3d-illustration-drums-3_544758-9138.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1A2oLahWau0Je3pbrW6NdaqCLghGEz_mBQ&usqp=CAU'
      ];
  return (
    <div className="Hello" style={{float:"left",marginRight:"13px"}}>
    <Paper elevation={12} style={{width:"1050px",height:"780px", backgroundColor:"white", color:"black",marginTop:"8px"}}>
    
        <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Top Sellers</h1>
            <br></br>
        </div>
            <br></br>
        <marquee behavior="scroll" direction="left" style={{color:"red"}}>These are the top selling products in our store and these products is on 50% offer now . Don't hesitate Buy Now!!! </marquee>
    <table style={{display:"flex",justifyContent:"space-evenly"}}>
      <tbody>
        <tr >
          <td style={{padding:"30px",paddingLeft:"20px"}}>
            <img src={imageUrls[0]} alt="Image 1" style={{ width:"200px", height:"200px", objectFit: 'cover' }} />
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><center>
            <h3>Fluffy Teddy Bear</h3>
            <br></br>
            <h4>M.R.P:<strike>2499/-</strike><br></br>Price: 1400/-</h4>
            </center>
            </div>
            </div>
          </td>
          <td style={{paddingRight:"20px"}}>
            <img src={imageUrls[1]} alt="Image 2" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><center>
            <h3>Woody Train</h3>
            <br></br>
            <h4>M.R.P:<strike>899/-</strike><br></br>Price: 599/-</h4>
            </center>
            </div>
            </div>
          </td>
          <td >
            <img src={imageUrls[4]} alt="Image 2" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><center>
            <h3>Woody Train</h3>
            <br></br>
            <h4>M.R.P:<strike>899/-</strike><br></br>Price: 599/-</h4>
            </center>
            </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{padding:"30px"}}>
            <img src={imageUrls[2]} alt="Image 3" style={{marginLeft:"10px", width: '200px', height: '200px', objectFit: 'cover' }} />
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><center>
            <h3>Xylophone</h3>
            <br></br>
            <h4>M.R.P: <strike>999/-</strike><br></br>Price: 499/-</h4>
            </center>
            </div>
            </div>
          </td>
          <td>
            <img src={imageUrls[3]} alt="Image 4" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div><center>
            <h3>Fluffy Teddy Bear</h3>
            <br></br>
            <h4>M.R.P:<strike>499/-</strike><br></br>Price: 399/-</h4>
            </center>
            </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Paper>
  </div>
  );
};

export default Homepagefront;
